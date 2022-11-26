import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDay } from "../../features/calendar/calendarSlice";

export const CalendarForm =() =>{
    const dispatch = useDispatch();
    const [ text, setText ] = useState("");
    const [ date, setDate ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCalendarEntry = {text:text,date:date};
        console.log(newCalendarEntry);
        if (newCalendarEntry.text === "") {
            return;
        }
        dispatch(addDay(newCalendarEntry));
        setText("");
        setDate("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="text" 
                type="text" 
                value={text} 
                onChange = {((e) => setText(e.target.value))}
                placeholder = "occasion"
                required
                />
            <input
                name="date" 
                type="date" 
                value={date} 
                onChange = {((e) => setDate(e.target.value))}
                required
            />
            <input type='submit' value='voeg toe'/>
        </form>
    )
}