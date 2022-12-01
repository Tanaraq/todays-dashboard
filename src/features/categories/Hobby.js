import React from "react";
import { useSelector } from "react-redux";
import '../../components/tasks/tasks.css';
import { selectAllTasks } from "../../components/tasks/tasksSlice";
import { TaskList } from "../../components/tasks/TaskList";
import { TaskForm } from "../../components/tasks/TaskForm";

export const Hobby = () => {
  const allTasks = useSelector(selectAllTasks);
  const tasks = allTasks.filter(task => task.category === "hobby");

      return (
      <div className='hobby container'>

        <TaskForm currentCategory="hobby"/>
        <TaskList tasks={tasks} />        
      
      </div>
    )
}