import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDay, editDay } from "../calendarSlice";

export const CalendarForm =({dayToEdit}) =>{
    const dispatch = useDispatch();
    const [ name, setName ] = useState( dayToEdit? dayToEdit.text : "" );
    const [ date, setDate ] = useState( dayToEdit? dayToEdit.date : "");
    const [isActive, setIsActive ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCalendarEntry = { id:(dayToEdit? dayToEdit.id : Date.now()), name:name, date:date};
        //console.log(newCalendarEntry);
        if (newCalendarEntry.name === "") {
            return;
        }
        if(dayToEdit){
            dispatch(editDay(newCalendarEntry))
        } else {
        dispatch(addDay(newCalendarEntry));
        };
        setName("");
        setDate("");
        setIsActive(false);
    }
    
    return(
        <form onSubmit={handleSubmit} className="calendarForm">
            <input 
                name="name" 
                type="text" 
                value={name} 
                onChange = {((e) => setName(e.target.value))}
                placeholder = "naam"
                required
                pattern="[a-zA-Z0-9 ()]+" minLength="3" maxLength="30"
                />
            <input
                name="date" 
                type="date" 
                value={date} 
                onChange = {((e) => setDate(e.target.value))}
                required
            />
            <input type='submit' value={dayToEdit? "edit": "voeg toe"}/>
        </form>
    )
}