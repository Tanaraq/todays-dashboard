import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleDoToday, toggleTaskDone } from "./tasksSlice";
import Confetti from "react-dom-confetti"; 

export const Task = ({task,id}) => {    
    const [ isActive, setIsActive] = useState(false);   // to fold out the task (accordion-menu)
    const dispatch = useDispatch();
    //console.log(task);

    return (        
        <div className="task">
            <div  className="task-title" >
                <h4 onClick={() => setIsActive(!isActive)}>{task.title}</h4>
                <div className="buttons">
                    
                    <button onClick={()=> dispatch(toggleTaskDone(id))} >
                        {task.isDone ? "Redo" : "Done"}
                        <Confetti active={task.isDone} config={{ spread: 360 }} />
                    </button>  
                    
                    <button onClick={()=> dispatch(toggleDoToday(id))}>
                        !
                    </button>

                    <button onClick={()=> dispatch(removeTask(id))} >
                        &#10008;
                    </button>  

                </div>
            </div>
            {isActive && 
                <div className="project-foldout">
                    {task.text && (
                    <p>{task.text}</p>
                    )}
                    {task.dueDate && (
                    <h6>{task.dueDate}</h6>
                    )}
                </div>
            }
                                
        </div>
    )
}

/* om te spieken:
import React from "react";
import { useDispatch } from "react-redux";
import { removeEntry, toggleEntryDone } from "../journalSlice";
import Confetti from "react-dom-confetti";

const JournalEntry = ({ children, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div className={`entry`}>
      <div className="entry-actions-container">
        <button
          aria-label="Remove"
          className="remove"
          onClick={() => dispatch(removeEntry(id))}
        >
          Remove
        </button>
        <button
          aria-label="Mark Done"
          className="done"
          onClick={() => {
            dispatch(toggleEntryDone(id));
          }}
        >
          {isDone ? "Redo" : "Done"}
          <Confetti active={isDone} config={{ spread: 360 }} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default JournalEntry;
*/
