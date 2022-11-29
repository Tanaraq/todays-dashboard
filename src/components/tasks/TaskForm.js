import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export const TaskForm = ({currentCategory}) => {
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ category, setCategory ] = useState(currentCategory);
    //console.log(category,currentCategory);
    //const [ recurring, setRecurring ] = useState("not-recurring");
    //const [ recCounter, setRecCounter ] = useState(1);
    const [ recInterval ,setRecInterval ] = useState("week");
    //const [ weekday, setWeekday ] = useState ()
    //console.log(category,currentCategory);
  
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let doToday = currentCategory === "today" ? true : false;

        const monday = document.getElementById("check_mo"); 
        const tuesday = document.getElementById("check_tu");
        const wednesday = document.getElementById("check_we");
        const thursday = document.getElementById("check_th");
        const friday = document.getElementById("check_fr");
        const saturday = document.getElementById("check_sa");
        const sunday = document.getElementById("check_su");
        const weekdays = [sunday.checked, monday.checked, tuesday.checked, wednesday.checked, thursday.checked, friday.checked, saturday.checked]; //weekdays is always an array with 7 boolean values, corresponding with the .getDay() method

        const newTask= {
            id: Date.now(), 
            title:title , 
            text:text || "", 
            category:category, 
            isDone: false, 
            doToday: doToday,
            recurrence: {
                recInterval: recInterval,
                weekdays: weekdays
            }
        };

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
                    <input type="checkbox" id="check_mo" name="check_mo" value="check_mo"/>
                    <label htmlFor="check_mo">Ma</label>
                </li>
                <li>
                    <input type="checkbox" id="check_tu" name="check_tu" value="check_tu"/>
                    <label htmlFor="check_tu">Di</label>
                </li>
                <li>
                    <input type="checkbox" id="check_we" name="check_we" value="check_we"/>
                    <label htmlFor="check_we">Wo</label>
                </li>
                <li>
                    <input type="checkbox" id="check_th" name="check_th" value="check_th"/>
                    <label htmlFor="check_th">Do</label>
                </li>
                <li>
                    <input type="checkbox" id="check_fr" name="check_fr" value="check_fr"/>
                    <label htmlFor="check_fr">Vr</label>
                </li>
                <li>
                    <input type="checkbox" id="check_sa" name="check_sa" value="check_sa"/>
                    <label htmlFor="check_sa">Za</label>
                </li>
                <li>
                    <input type="checkbox" id="check_su" name="check_su" value="check_su"/>
                    <label htmlFor="check_su">Zo</label>
                </li>
            </ul>  
                       
            <input type='submit' value='voeg toe'/>
            </>
            )}
        </form>
    )
}
