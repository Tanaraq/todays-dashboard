import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDay, editDay } from "../calendarSlice";

export const CalendarForm =({dayToEdit}) =>{
    const dispatch = useDispatch();
    const [ text, setText ] = useState( dayToEdit? dayToEdit.text : "" );
    const [ date, setDate ] = useState( dayToEdit? dayToEdit.date : "");
    const [isActive, setIsActive ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCalendarEntry = { id:(dayToEdit? dayToEdit.id : Date.now()), text:text, date:date};
        //console.log(newCalendarEntry);
        if (newCalendarEntry.text === "") {
            return;
        }
        if(dayToEdit){
            dispatch(editDay(newCalendarEntry))
        } else {
        dispatch(addDay(newCalendarEntry));
        };
        setText("");
        setDate("");
        setIsActive(false);
    }
    
    return(
        <form onSubmit={handleSubmit} className="calendarForm">
            <input 
                name="text" 
                type="text" 
                value={text} 
                onChange = {((e) => setText(e.target.value))}
                placeholder = "naam / gebeurtenis "
                required
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