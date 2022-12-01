import React from "react";
import { useSelector,useDispatch } from "react-redux";
import '../../components/tasks/tasks.css';
import { selectAllTasks, selectTodayTasks,setDoTodayIsFalse,setDoTodayIsTrue } from "../../components/tasks/tasksSlice";
import { TaskList } from "../../components/tasks/TaskList";
import { TaskForm } from "../../components/tasks/TaskForm";

export const Today = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(selectAllTasks);
  const todayTasks = useSelector(selectTodayTasks);

  //RESET: first, check what day it is:
  let today = new Date(), lastUpdate;

  window.addEventListener( "mousemove", function () {
    let time = new Date();
    // If we haven't checked yet, or if it's been more than a minute since the last check
    if ( !lastUpdate || ( time.getTime() - lastUpdate.getTime() ) > 60000 ) {
      // Set the last time we checked, and then check if the date has changed.
      lastUpdate = time;
      if ( time.getDate() !== today.getDate() ) {
        // If the date has changed, set the date to the new date, and for every task set doToday=false. 
        today = time
        allTasks.forEach((task)=>{
          dispatch(setDoTodayIsFalse(task.id))
        })        
      } 
      //DAY-START: set "doToday=true" for the recurring tasks that day
      todayTasks.forEach((task) => {
        dispatch(setDoTodayIsTrue(task.id))
      });
    }
  });

  //then select allTasks base on "doToday===true" (so you get both the recurring tasks AND the tasks that are manually set to doToday)
  const tasks = allTasks.filter(task => task.doToday === true);

  return (
  <div className='today container'>

    <TaskForm currentCategory="today"/>
    <TaskList tasks={tasks} />        
  
  </div>
  )
}