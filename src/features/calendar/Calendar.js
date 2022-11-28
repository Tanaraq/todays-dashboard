import React from "react";
import { useSelector } from "react-redux";
import { CalendarForm } from './components/CalendarForm';
import { CalendarDate } from './components/CalendarDate';
import { selectDays } from "./calendarSlice";


export const Calendar = () => {
    const specialDays= useSelector(selectDays);
    //console.log(specialDays); // array with objects

    return (
        <div className='container segment'>
            <CalendarForm />
            <div className="calendar">
            {specialDays.map((day,index) => {
                return (
                    <CalendarDate key={index} day={day}/>
                )
            })}
            </div>
            
        </div>
    )
}