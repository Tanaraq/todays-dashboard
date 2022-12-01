import React, {useState} from "react";
import { useSelector } from "react-redux";
import { CalendarForm } from './components/CalendarForm';
import { CalendarDate } from './components/CalendarDate';
import { selectDays } from "./calendarSlice";


export const Calendar = () => {
    const specialDays= useSelector(selectDays);

    return (
        <div className='calendar container'>
            <h2>Verjaardags Kalender:</h2>
            <CalendarForm />
            
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