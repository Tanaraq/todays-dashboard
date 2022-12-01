import React, {useState} from "react";
import { useDispatch } from "react-redux";
import '../calendar.css';
import { removeDay } from "../calendarSlice";
import { CalendarForm } from "./CalendarForm";

export const CalendarTile = ({day}) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive ] = useState(false);

    return (
        <div className="date">
            <div className="date-box">
                
                <p className="date-title"> {day.name} , {day.date}</p>   
            
                <div className="buttons">
                    <button onClick={()=>{setIsActive(!isActive)}}><i className="fa-solid fa-pen"></i></button>               

                    <button onClick={()=> dispatch(removeDay(day))}><i className="fa-solid fa-xmark"></i></button>
                </div>

            </div>

            {isActive && <CalendarForm dayToEdit={day} setIsActive={setIsActive}/> }

        </div>
        
    )
}