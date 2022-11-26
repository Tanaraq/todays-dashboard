import React from "react";

export const Header = () => {
    
    let currentDate = new Date();
    let cDay = currentDate.getDate() 
    let cYear = currentDate.getFullYear()
    
    const weekdays = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
    let weekday = weekdays[currentDate.getDay()];
    
    const months = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];
    let cMonth = months[currentDate.getMonth()];  

    return(
        <div className="todayheader segment">
        <h1>{weekday} {cDay} {cMonth} {cYear}</h1>
        <p> Today is : Menno's birthday</p>
        </div>
    )
}

