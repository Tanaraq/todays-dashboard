import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, addTask, removeTask } from "./tasksSlice";

export const Task = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks); // = undefined
    console.log(typeof tasks);

    return (        
        <div className="task border">
            <div  className="task-title">
                <h4>task.title</h4>
                <div className="buttons">
                    <button onClick={()=> dispatch(removeTask())} >
                        &#10008;
                    </button>              
                </div>
            </div>
            
            <p>task.text</p>
            <h6>task.dueDate</h6>                     
        </div>
    )
}