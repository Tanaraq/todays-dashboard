import React from "react";
import { useSelector } from "react-redux";
import { CalendarForm } from './components/CalendarForm';
import { CalendarTile } from './components/CalendarTile';
import { selectBirthdays } from "./calendarSlice";


export const Calendar = () => {
    const birthdays= useSelector(selectBirthdays);

    return (
        <div className='calendar container'>
            <h2>Verjaardags Kalender:</h2>
            <CalendarForm />
            
            <div className="calendar-list">
            {birthdays.map((day,index) => {
                return (
                    <CalendarTile key={index} day={day}/>
                )
            })}
            </div>
            
        </div>
    )
}