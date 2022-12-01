import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleDoToday, toggleTaskDone } from "./tasksSlice";
import Confetti from "react-dom-confetti"; 

export const Task = ({task}) => {    
    const [ isActive, setIsActive] = useState(false);   // to fold out the task (accordion-style)
    const dispatch = useDispatch();
    const {id,title,text, category, isDone, doToday, recurrence} = task;
    
    // to render recInterval in an userfriendly format):
    const getInterval = () => {
      switch(recurrence.recInterval){
        case "weekly":
          return "Elke week op:";
        case "monthly_1":
          return "Eens per maand op de eerste:";
        case "monthly_2":
          return "Eens per maand op de tweede:";
        case "monthly_3":
            return "Eens per maand op de derde:";
        case "monthly_4":
          return "Eens per maand op de vierde:";
        default:
          return null;
      }
    }

    //to render recurrence days:
    const getRecurrenceDays = () => {
      const days = ["Zo","Ma","Di","Wo","Do","Vr","Za"];
      let recList=[];
      for (let i=0; i<recurrence.weekdays.length; i++){
        if (recurrence.weekdays[i] === true ){
          recList.push(
            <li key={i}>
              <input type="checkbox" checked readOnly />
              <label style={{cursor: "default" }}>{days[i]}</label>
            </li>
          );
        } else {
          recList.push(
            <li key={i}>
              <input type="checkbox" readOnly/>
              <label style={{cursor: "default" }}>{days[i]}</label>
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
        case "sport":
          return <i className="fa-solid fa-dumbbell"></i>;
        case "house":
          return <i className='fas fa-home'></i>;
        case "hobby":
            return <i className="fas fa-edit"></i>;
        default:
          return null;
      }
    }

    const getColor=(category) =>{
      switch(category){
        case "study":
          return "#1A5E76"
        case "sport":
          return "#937D41";
        case "house":
          return "#e2cb67";
        case "hobby":
          return "#98B5A3";
        case "today":
          return "#6295A9"
        default:
          return "grey";
      }
    }

    return (        
        <div className="task" style={{backgroundColor:(getColor(category))}}>
            <div  className="task-title" >
                <h4 onClick={() => setIsActive(!isActive)} title="Klik voor meer details">{getIcon(category)} {title}</h4>
                <div className="buttons">
                    
                    <button onClick={()=> dispatch(toggleTaskDone(id))} title="Klik om de taak af te vinken" >
                        {isDone ? "Redo" : <i className="fa-solid fa-check"></i>}
                        <Confetti active={isDone} config={{ spread: 360 }} />
                    </button>  
                    
                    <button onClick={()=> dispatch(toggleDoToday(id))} title='Klik om de taak toe te voegen aan "Vandaag"'>
                      {doToday ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>

                    <button onClick={()=> dispatch(removeTask(id))} title="Klik om de taak te verwijderen" >
                      <i className="fa-solid fa-xmark"></i>
                    </button>  

                </div>
            </div>
            {isActive && 
                <div className="project-foldout">
                    {text && (
                    <p>{text}</p>
                    )}                   
                    <h5 style={{cursor: "default" }}>&nbsp; {getInterval()}</h5>                     
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

