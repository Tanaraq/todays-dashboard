import React from "react";
import { useSelector } from "react-redux";
import '../../components/tasks/tasks.css';
import { selectTasks } from "../../components/tasks/tasksSlice";
import { TaskList } from "../../components/tasks/TaskList";
import { TaskForm } from "../../components/tasks/TaskForm";

export const Study = () => {
  const allTasks = useSelector(selectTasks);
  //console.log(allTasks);
  const tasks = allTasks.filter(task => task.category === "study");

      return (
      <div className='study container'>

        <TaskForm currentCategory="study" />
        <TaskList tasks={tasks} />        
      
      </div>
    )
}