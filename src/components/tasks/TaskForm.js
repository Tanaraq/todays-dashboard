import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export const TaskForm = ({currentCategory}) => {
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ category, setCategory ] = useState(currentCategory);
    const [ recInterval ,setRecInterval ] = useState("not-recurring");
      
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let doToday = currentCategory === "today" && recInterval === "not-recurring" ? true : false;

        let weekdays=[]; // will be an array with 7 boolean values, corresponding with the .getDay() method, therefore starting with sunday  
        const sunday = document.getElementById("check_su");
        const monday = document.getElementById("check_mo"); 
        const tuesday = document.getElementById("check_tu");
        const wednesday = document.getElementById("check_we");
        const thursday = document.getElementById("check_th");
        const friday = document.getElementById("check_fr");
        const saturday = document.getElementById("check_sa");
              
        if(recInterval === "not-recurring"){
            weekdays= [false, false, false, false, false, false, false];
        } else {
            weekdays = [sunday.checked, monday.checked, tuesday.checked, wednesday.checked, thursday.checked, friday.checked, saturday.checked]; 
        };
        
        const newTask= {
            id: Date.now(), 
            title:title , 
            text:text || "", 
            category: category, 
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
        setCategory("today");
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
                pattern="[a-zA-Z0-9 -?!]+" minLength="3" maxLength="30"
                />
            {!title? null: (    
            <>
            <textarea
                name="text" 
                rows="3" cols="50"
                value={text || ""} 
                onChange = {((e) => setText(e.target.value))}
                placeholder = "omschrijving (optioneel)"   
                pattern="[a-zA-Z0-9 *?!]+" minLength="3" maxLength="150"               
                />  

            <select value={category} required onChange = {((e) => setCategory(e.target.value))}  >
                <option value="today" disabled hidden>Kies een categorie:</option>
                <option value="study">studie</option>
                <option value="sport">sport</option>
                <option value="house">huis & tuin</option>
                <option value="hobby">hobby</option>
            </select>                         
                       
            <select value={recInterval} onChange = {((e) => setRecInterval(e.target.value))} >
                <option value="not-recurring">Niet herhaald</option>
                <option value="weekly">Elke week op:</option>
                <option value="monthly_1">Eens per maand op de eerste:</option> 
                <option value="monthly_2">Eens per maand op de tweede:</option> 
                <option value="monthly_3">Eens per maand op de derde:</option> 
                <option value="monthly_4">Eens per maand op de vierde:</option>
                {/*
                <option value="twice-a-week">Twee keer per maand</option>    
            */}         
            </select>
            
            { recInterval === "weekly" &&
            <ul>
                <li>
                    <input type="checkbox" id="check_mo" name="check_mo" value="check_mo"/>
                    <label htmlFor="check_mo">M</label>
                </li>
                <li>
                    <input type="checkbox" id="check_tu" name="check_tu" value="check_tu"/>
                    <label htmlFor="check_tu">D</label>
                </li>
                <li>
                    <input type="checkbox" id="check_we" name="check_we" value="check_we"/>
                    <label htmlFor="check_we">W</label>
                </li>
                <li>
                    <input type="checkbox" id="check_th" name="check_th" value="check_th"/>
                    <label htmlFor="check_th">D</label>
                </li>
                <li>
                    <input type="checkbox" id="check_fr" name="check_fr" value="check_fr"/>
                    <label htmlFor="check_fr">V</label>
                </li>
                <li>
                    <input type="checkbox" id="check_sa" name="check_sa" value="check_sa"/>
                    <label htmlFor="check_sa">Z</label>
                </li>
                <li>
                    <input type="checkbox" id="check_su" name="check_su" value="check_su"/>
                    <label htmlFor="check_su">Z</label>
                </li>
            </ul>  
            }   

            { (recInterval === "monthly_1" || recInterval === "monthly_2"|| recInterval === "monthly_3" || recInterval === "monthly_4") &&
            <ul>
                <li>
                    <input type="radio" id="check_mo" name="check_day" value="check_mo" />
                    <label htmlFor="check_mo">M</label>
                </li>
                <li>
                    <input type="radio" id="check_tu" name="check_day" value="check_tu" />
                    <label htmlFor="check_tu">D</label>
                </li>
                <li>
                    <input type="radio" id="check_we" name="check_day" value="check_we" />
                    <label htmlFor="check_we">W</label>
                </li>
                <li>
                    <input type="radio" id="check_th" name="check_day" value="check_th" />
                    <label htmlFor="check_th">D</label>
                </li>
                <li>
                    <input type="radio" id="check_fr" name="check_day" value="check_fr" />
                    <label htmlFor="check_fr">V</label>
                </li>
                <li>
                    <input type="radio" id="check_sa" name="check_day" value="check_sa" />
                    <label htmlFor="check_sa">Z</label>
                </li>
                <li>
                    <input type="radio" id="check_su" name="check_day" value="check_su" />
                    <label htmlFor="check_su">Z</label>
                </li>
            </ul>  
            }  

            <input type='submit' value='voeg toe'/>
            </>
            )}
        </form>
    )
}
