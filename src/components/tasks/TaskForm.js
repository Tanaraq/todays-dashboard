import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export const TaskForm = () => {
    //const [ newTask, setNewTask] = useState("");
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ dueDate, setDueDate ] = useState("");
  
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask= { title:title , text:text || "", dueDate:dueDate || "", isDone: false, doToday:true};
        console.log(newTask);
        //if (newTask.title === "") {
        //return;
        //}
        dispatch(addTask(newTask));
        //setNewTask("");
        setTitle('');
        setText(''); 
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            
            <input 
                name="title" 
                type="text" 
                value={title} 
                onChange = {((e) => setTitle(e.target.value))}
                placeholder = "new task"
                required
                />
            {!title? null: (    
            <>
            <input
                name="text" 
                type="text" 
                value={text || ""} 
                onChange = {((e) => setText(e.target.value))}
                placeholder = "new task (optional)"                  
                />          
            <input 
                name="dueDate" 
                type="text" 
                value={dueDate} 
                onChange = {((e) => setDueDate(e.target.value))}
                placeholder = "deadline (optional)"
                /> 
            <input type='submit' value='voeg toe'/>
            </>
            )}
        </form>
    )
}
