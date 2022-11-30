import React from "react";

import { useSelector } from "react-redux";
import '../../components/tasks/tasks.css';
import { selectAllTasks } from "../../components/tasks/tasksSlice";
import { TaskList } from "../../components/tasks/TaskList";
import { TaskForm } from "../../components/tasks/TaskForm";

export const Sport = () => {
  const allTasks = useSelector(selectAllTasks);
  //console.log(allTasks);
  const tasks = allTasks.filter(task => task.category === "sport");

      return (
      <div className='sport container'>

        <TaskForm currentCategory="sport"/>
        <TaskList tasks={tasks} />        
      
      </div>
    )
}