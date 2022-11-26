import React from "react";
import { Task } from '../tasks/Task';

export const TaskList =({tasks}) =>{
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className={`${task.isDone ? "task-done" : ""}`}
                >
                    <Task 
                    id={index} 
                    task={task}
                    />
                    
                </li>
            ))}
        </ul>
    )
}