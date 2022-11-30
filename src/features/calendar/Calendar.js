import React, {useState} from "react";
import { useSelector } from "react-redux";
import { CalendarForm } from './components/CalendarForm';
import { CalendarDate } from './components/CalendarDate';
import { selectDays } from "./calendarSlice";


export const Calendar = () => {
    const specialDays= useSelector(selectDays);
    const [isActive, setIsActive ] = useState(false);
    //console.log(specialDays); // array with objects

    return (
        <div className='calendar container'>
            <button onClick={() => setIsActive(!isActive)}>+</button>
            {isActive && 
                <CalendarForm setIsActive={setIsActive} />
            }
            
            <div className="calendarEntries">
            {specialDays.map((day,index) => {
                return (
                    <CalendarDate key={index} day={day}/>
                )
            })}
            </div>
            
        </div>
    )
}