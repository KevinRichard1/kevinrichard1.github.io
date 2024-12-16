import React, {useState} from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
    const [menu, setMenu] = useState("home");
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
            <ul>
                <li onClick={() => { setMenu("home"); }}><NavLink style={{ textDecoration: 'none' }} to='/'>Home</NavLink>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("projects"); }}><NavLink style={{ textDecoration: 'none' }} to='/projects'>Projects</NavLink>{menu === "projects" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("contact"); }}><NavLink style={{ textDecoration: 'none' }} to='/contact'>Contact</NavLink>{menu === "contact" ? <hr /> : <></>}</li>
            </ul>
        </nav>
        </div>
    );
};

export default Sidebar;
