import React from "react";
import { NavLink } from "react-router-dom";


export const Header = () => {

    let currentDate = new Date();
    let cDay = currentDate.getDate() 
    let cYear = currentDate.getFullYear()

    const weekdays = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
    let day = weekdays[currentDate.getDay()];

    const months = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];
    let month = months[currentDate.getMonth()];

    return(
        <div className="currentday segment">
        <h1>{day} {cDay} {month} {cYear}</h1>
        <div id='calendar-div'>
            <NavLink to="/calendar" id="calendar-icon"><i className="far fa-calendar-alt"></i></NavLink>   
            <p>Today is : Menno's birthday</p>
        </div>
        </div>
    )
}

