import React from "react";
import { useDispatch } from "react-redux";
import { removeDay } from "../../features/calendar/calendarSlice";

export const CalendarDate = ({day}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{day.text} , {day.date}</p>
            <button onClick={()=> dispatch(removeDay(day))}>x</button>
        </div>
    )
}