import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar segment row">
            <NavLink to="/today" id="today-tab"><i className="fa-solid fa-heart"></i> Vandaag</NavLink>            
            <NavLink to="/study" id="study-tab"><i className="fas fa-laptop-code"></i> Studie</NavLink>            
            <NavLink to="/sport" id="sport-tab"><i className="fa-solid fa-dumbbell"></i> Sport</NavLink>
            <NavLink to="/house" id="house-tab"><i className='fas fa-home'></i> Huis & Tuin</NavLink>  
            <NavLink to="/calendar" id="calendar-tab"><i className="far fa-calendar-alt"></i> Kalender</NavLink>          
        </nav>
    )
}

//note: find more icons here: https://www.w3schools.com/icons/default.asp
/* uit oude taskboard:
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
      <nav>
        <NavLink to="/today" id="today-tab">Today</NavLink>
        <NavLink to="/goals" id="goals-tab">Goals</NavLink>
        <NavLink to="/projects" id="projects-tab">Projects</NavLink>
      </nav>
    )
}
*/