import './Navbar.css';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/favicon.png';

const Navbar = ({ setMenuStatus, isMenuOpen }) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollTop = useRef(0);

  const toggleMenu = () => {
    setMenuStatus(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setMenuStatus(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= 0) {
        setScrollDirection('up');
      } else if (currentScrollPos > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        scrollDirection === 'up' ? 'show-navbar' : 'hide-navbar'
      }`}
      aria-label="Main navigation"
    >
      <div className="navbar-inner">

<div className="navbar-brand">
  <NavLink
    to="/"
    className="navbar-logo"
    onClick={handleLogoClick}
    aria-label="Home"
  >
    <img src={logo} alt="" />
  </NavLink>

  <NavLink
    to="/"
    className="navbar-name"
    onClick={handleLogoClick}
  >
    Kevin Richard
  </NavLink>
</div>
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>

          <li>
            <a href="/#research">Research</a>
          </li>

          <li>
            <a href="/#education">Education</a>
          </li>
        </ul>

        <button
          type="button"
          className={`navbar-dropdown ${
            isMenuOpen ? 'change' : ''
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;