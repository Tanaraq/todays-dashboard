import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectDays } from "../../features/calendar/calendarSlice";


export const Header = () => {

    // to get the current date and render it in a format that pleases me:
    let currentDate = new Date();
    let cDay = currentDate.getDate(); 
    let cMonth = currentDate.getMonth();
    let cYear = currentDate.getFullYear();
    
    const weekdays = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
    let weekday = weekdays[currentDate.getDay()];

    const months = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];
    let month = months[cMonth];

    // to compare the current date with the dates from the Calendar: BUT only month & day, else birthdays won't work :D
    const specialDays = useSelector(selectDays); 

    let birthdayPpl = [];  // array, because multiple ppl can possibly share the same birthday!
    const name = specialDays.map((day)=> {
        let dayArray = day.date.split('-');
        //console.log(dayArray); // = { '1978','11','30'}
        //console.log(cMonth+1, cDay); // = { 11, 30 } subtle difference: equal, but not deep-equal
        if ( dayArray[1] == cMonth+1 && dayArray[2] == cDay){
            console.log("bingo!");
            birthdayPpl.push(day.text);
        }
    });
       
    return(
        <div className="currentday segment">
            <h1>{weekday} {cDay} {month} {cYear}</h1>
            <div id='calendar-div'>
                <NavLink to="/calendar" id="calendar-icon"><i className="far fa-calendar-alt"></i></NavLink>   
                { birthdayPpl.length === 0 ? <p>Today is a beautiful day.</p> : 
                    birthdayPpl.map((name) => { 
                        return <p>Vandaag is {name} jarig!&nbsp;&nbsp;</p>
                    })                    
                }
            </div>
        </div>
    )
}

