import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar segment row">
            <NavLink to="/today" id="today-tab">Vandaag</NavLink>            
            <NavLink to="/study" id="study-tab">Studie</NavLink>            
            <NavLink to="/sport" id="sport-tab">Sport</NavLink>
            <NavLink to="/house" id="house-tab">Huishouden</NavLink>  
            <NavLink to="/calendar" id="calendar-tab">Kalender</NavLink>          
        </nav>
    )
}

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