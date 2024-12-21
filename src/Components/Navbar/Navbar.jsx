import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/favicon.png';

const Navbar = ({ setMenuStatus, isMenuOpen }) => {
  const [menu, setMenu] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollTop = useRef(0);
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    setMenuStatus(prevState => !prevState);
  };

  useEffect(() => {
    setMenuOpen(isMenuOpen);
  }, [isMenuOpen]);

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
  }, []);

  return (
    <div className={`navbar ${scrollDirection === "up" ? "show-navbar" : "hide-navbar"}`}>
      <NavLink to="/" className='navbar-logo'>
        <img src={logo} alt="" />
      </NavLink>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home"); }}><NavLink style={{ textDecoration: 'none' }} to='/'>Home</NavLink>{menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("projects"); }}><NavLink style={{ textDecoration: 'none' }} to='/projects'>Projects</NavLink>{menu === "projects" ? <hr /> : <></>}</li>
      </ul>
      <div className={`navbar-dropdown ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
