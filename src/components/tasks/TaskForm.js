import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export const TaskForm = ({currentCategory}) => {
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ category, setCategory ] = useState(currentCategory);
    //console.log(category,currentCategory);
  
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let doToday = currentCategory === "today" ? true : false
        const newTask= {id: Date.now(), title:title , text:text || "", category:category, isDone: false, doToday: doToday};
        console.log(newTask);
        if (newTask.title === "") {
            return;
        }
        dispatch(addTask(newTask));
        setTitle('');
        setText(''); 
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            
            <input 
                name="title" 
                type="text" 
                value={title} 
                onChange = {((e) => setTitle(e.target.value))}
                placeholder = "nieuwe taak"
                required
                />
            {!title? null: (    
            <>
            <input
                name="text" 
                type="text" 
                value={text || ""} 
                onChange = {((e) => setText(e.target.value))}
                placeholder = "omschrijving (optioneel)"                  
                />  

            <select value={category} onChange = {((e) => setCategory(e.target.value))} >
                <option value="study">studie</option>
                <option value="sport">sport</option>
                <option value="house">huis & tuin</option>
            </select>                   
            
            <input type='submit' value='voeg toe'/>
            </>
            )}
        </form>
    )
}
