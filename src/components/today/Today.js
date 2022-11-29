import React from "react";
import { useSelector } from "react-redux";
import '../tasks/tasks.css';
import { selectTasks } from "../tasks/tasksSlice";
import { TaskList } from "../tasks/TaskList";
import { TaskForm } from "../tasks/TaskForm";

export const Today = () => {
    
  const allTasks = useSelector(selectTasks);
  console.log(allTasks);
  const tasks = allTasks.filter(task => task.doToday === true);

      return (
      <div className='today container'>

        <TaskForm currentCategory="today"/>
        <TaskList tasks={tasks} />        
      
      </div>
    )
}