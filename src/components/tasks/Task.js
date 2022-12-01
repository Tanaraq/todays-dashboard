import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleDoToday, toggleTaskDone } from "./tasksSlice";
import Confetti from "react-dom-confetti"; 

export const Task = ({task}) => {    
    const [ isActive, setIsActive] = useState(false);   // to fold out the task (accordion-menu)
    const dispatch = useDispatch();
    const {id,title,text, category, isDone, doToday, recurrence} = task;
    
    //to print recurrence days:
    const getRecurrenceDays = () => {
      console.log(recurrence.recInterval, recurrence.weekdays);
      const days = ["Zo","Ma","Di","Wo","Do","Vr","Za"];
      let recList=[]
      for (let i=0; i<recurrence.weekdays.length; i++){
        if (recurrence.weekdays[i] === true ){
          recList.push(
            <li key={i}>
              <input type="checkbox" checked readOnly/>
              <label>{days[i]}</label>
            </li>
          );
        } else {
          recList.push(
            <li key={i}>
              <input type="checkbox" readOnly/>
              <label>{days[i]}</label>
            </li>
          );
        }
      }
      return recList;
    }

    const getIcon=(category) => {
      switch(category){
        case "study":
          return <i className="fas fa-laptop-code"></i>;
          break;
        case "sport":
          return <i className="fa-solid fa-dumbbell"></i>;
          break;
        case "house":
          return <i className='fas fa-home'></i>;
          break;
        case "hobby":
            return <i className="fas fa-edit"></i>
            break;
        default:
          return null;
      }
    }

    const getColor=(category) =>{
      switch(category){
        case "study":
          return "#1A5E76"
          break;
        case "sport":
          return "#937D41";
          break;
        case "house":
          return "#e2cb67";
          break;
        case "hobby":
          return "#98B5A3";
          break;
        default:
          return "grey";
      }
    }

    return (        
        <div className="task" style={{backgroundColor:(getColor(category))}}>
            <div  className="task-title" >
                <h4 onClick={() => setIsActive(!isActive)}>{getIcon(category)} {title}</h4>
                <div className="buttons">
                    
                    <button onClick={()=> dispatch(toggleTaskDone(id))} >
                        {isDone ? "Redo" : <i className="fa-solid fa-check"></i>}
                        <Confetti active={isDone} config={{ spread: 360 }} />
                    </button>  
                    
                    <button onClick={()=> dispatch(toggleDoToday(id))}>
                      {doToday ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>

                    <button onClick={()=> dispatch(removeTask(id))} >
                      <i className="fa-solid fa-xmark"></i>
                    </button>  

                </div>
            </div>
            {isActive && 
                <div className="project-foldout">
                    {text && (
                    <p>{text}</p>
                    )}                   
                    <h5>&nbsp; {recurrence.recInterval}</h5>                     
                    { recurrence.recInterval === "not-recurring" ? null :
                    <ul style={{backgroundColor:(getColor(category)),height:38}}>
                      {getRecurrenceDays()}
                    </ul>  
                    }  
                </div>
            }
                                
        </div>
    )
}

