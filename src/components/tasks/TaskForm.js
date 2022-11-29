import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export const TaskForm = ({currentCategory}) => {
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ category, setCategory ] = useState(currentCategory);
    //console.log(category,currentCategory);
    const [ recurring, setRecurring ] = useState("not-recurring");
    const [ recCounter, setRecCounter ] = useState(1);
    const [ recInterval ,setRecInterval ] = useState("week");
    const [ weekday, setWeekday ] = useState ()
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
                <option value="hobby">hobby</option>
            </select>    

            { /*UNDER CONSTRUCTION : RECURRING TASKS:*/}
                          
                       
            <select value={recInterval} onChange = {((e) => setRecInterval(e.target.value))} >
                <option value="not-recurring">Niet herhaald</option>
                <option value="everyday">Elke dag</option>
                <option value="weeks">Elke week op:</option>
                <option value="monthly_1">Eens per maand op de eerste:</option> 
                <option value="monthly_2">Eens per maand op de tweede:</option> 
                <option value="monthly_3">Eens per maand op de derde:</option> 
                <option value="monthly_4">Eens per maand op de vierde:</option>
                <option value="twice_per_month">Twee keer per maand</option>             
            </select>
            
            <ul>
                <li>
                    <input type="checkbox" id="check_ma" name="check_ma" value="check_ma"/>
                    <label for="check_ma">Ma</label>
                </li>
                <li>
                    <input type="checkbox" id="check_di" name="check_di" value="check_di"/>
                    <label for="check_di">Di</label>
                </li>
                <li>
                    <input type="checkbox" id="check_wo" name="check_wo" value="check_wo"/>
                    <label for="check_wo">Wo</label>
                </li>
                <li>
                    <input type="checkbox" id="check_do" name="check_do" value="check_do"/>
                    <label for="check_do">Do</label>
                </li>
                <li>
                    <input type="checkbox" id="check_vr" name="check_vr" value="check_vr"/>
                    <label for="check_vr">Vr</label>
                </li>
                <li>
                    <input type="checkbox" id="check_za" name="check_za" value="check_za"/>
                    <label for="check_za">Za</label>
                </li>
                <li>
                    <input type="checkbox" id="check_zo" name="check_zo" value="check_zo"/>
                    <label for="check_zo">Zo</label>
                </li>
            </ul>  
                       
            <input type='submit' value='voeg toe'/>
            </>
            )}
        </form>
    )
}
