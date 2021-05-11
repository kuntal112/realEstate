import React from 'react'
import NavBar from "./NavBar"

function Header() {
    return (
        <div className="header">
            <NavBar/>
            <div className="intro">
                <p>Looking for a Property !</p>
                <h1><span>Buy </span>and <span>sell </span>Properties</h1>
            <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit cumque corporis, et laudantium pariatur nesciunt ex! Reiciendis ad ab itaque quas iste mollitia vero, quis cumque, cum corporis at ipsum.</p>
            <a href="#" className="header-btn">Details</a>
            </div>
        </div>
    )
}

export default Header
