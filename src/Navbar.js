import {React, useEffect, useState} from 'react'
import "./Navbar.css";


function Navbar() {
    const [show, handleShow] = useState(false);

useEffect( () =>{
    window.addEventListener("scroll", () => {
        if(window.scroll>100){
            handleShow(true)

        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };

}, [])
    return (
        <div className ={`nav ${show && "nav_black"}`}>
            <img className ="nav_logo" src = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" 
            alt="Netflix Logo"/>

            <img className="nav_avatar" src = " https://media-exp1.licdn.com/dms/image/C5603AQHrOBRpdIO12w/profile-displayphoto-shrink_800_800/0/1651560682390?e=1658966400&v=beta&t=eQU_Uroxl9CNdrGEb_F6loghLRbkJvUKNWpUvInr0sE"
           
            alt ="Netflix Logo" />
            
        </div>
    )
}

export default Navbar
