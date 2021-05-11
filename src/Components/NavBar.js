import React from 'react'
import logo from "../images/logo1.png"
function NavBar() {
    return (
        <nav>
            <a href="#" className="logo">
               <h3>DEAL</h3>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon" ></span>
            </label>
            <ul className="menu">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#agent">Agent</a></li>
                <li><a href="#property">Property</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </nav>
    )
}

export default NavBar
