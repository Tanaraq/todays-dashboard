import React, {useState} from "react";
import { useDispatch } from "react-redux";
import '../calendar.css';
import { removeDay } from "../calendarSlice";
import { CalendarForm } from "./CalendarForm";

export const CalendarDate = ({day}) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive ] = useState(false);

    
    return (
        <div className="date">
            <div className="date-box">
                <p className="date-title"> {day.text} , {day.date}</p>   
            
                <div className="buttons">
                    <button onClick={()=>{setIsActive(!isActive)}}>/</button>               

                    <button onClick={()=> dispatch(removeDay(day))}>x</button>
                </div>
            </div>
            {isActive && <CalendarForm dayToEdit={day} setIsActive={setIsActive}/> }
        </div>
        
    )
}