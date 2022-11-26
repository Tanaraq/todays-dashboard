import React from "react";

export const Navbar = () => {
    return (
        <ul className="navbar segment row">
            <li>Vandaag</li>            
            <li>Studie</li>            
            <li>Sport</li>
            <li>Huishouden</li>  
            <li>Kalender</li>          
        </ul>
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