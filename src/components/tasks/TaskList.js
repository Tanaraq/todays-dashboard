import React from "react";
import { Task } from '../tasks/Task';

export const TaskList =({tasks, currentCategory}) =>{
    return (
        <div>
        <div className="space-for-form"></div>
        <ul className="task-list">
            
            {tasks.map((task)=> (
                <li
                    key={task.title}
                    className={`${task.isDone ? "task-done" : ""}`}
                >
                    <Task task={task} currentCategory={currentCategory} />
                    
                </li>
            ))}
        </ul>
        </div>
    )
}