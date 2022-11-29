import React from "react";
import { useSelector,useDispatch } from "react-redux";
import '../tasks/tasks.css';
import { selectTodayTasks } from "../tasks/tasksSlice";
import { TaskList } from "../tasks/TaskList";
import { TaskForm } from "../tasks/TaskForm";

export const Today = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTodayTasks);

  




  
      return (
      <div className='today container'>

        <TaskForm currentCategory="today"/>
        <TaskList tasks={tasks} />        
      
      </div>
    )
}