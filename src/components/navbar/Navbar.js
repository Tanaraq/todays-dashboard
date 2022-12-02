import React from "react";
import { NavLink } from 'react-router-dom';
import '../header/header.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/today" id="today-tab"><i className="fa-solid fa-heart"></i> <span> Vandaag</span></NavLink>            
            <NavLink to="/study" id="study-tab"><i className="fas fa-laptop-code"></i> <span> Werk</span></NavLink>            
            <NavLink to="/sport" id="sport-tab"><i className="fa-solid fa-dumbbell"></i> <span> Sport</span></NavLink>
            <NavLink to="/house" id="house-tab"><i className='fas fa-home'></i> <span> Huis</span></NavLink>  
            <NavLink to="/hobby" id="hobby-tab"><i className="fas fa-edit"></i> <span> Social</span></NavLink>          
        </nav>
    )
}