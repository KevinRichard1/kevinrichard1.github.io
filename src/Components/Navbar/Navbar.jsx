import './Navbar.css'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [scrollDirection, setScrollDirection] = useState("up");
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > lastScrollTop.current) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollTop.current = currentScrollPos <= 0 ? 0 : currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, );

    return (
        <div className={`navbar ${scrollDirection === "up" ? "show-navbar" : "hide-navbar"}`}>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><NavLink style={{textDecoration: 'none'}} to = '/'>Home</NavLink>{menu === "home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("projects")}}><NavLink style={{textDecoration: 'none'}} to = '/projects'>Projects</NavLink>{menu === "projects"?<hr/>:<></>}</li>
            </ul>
        </div>
    )
}

export default Navbar