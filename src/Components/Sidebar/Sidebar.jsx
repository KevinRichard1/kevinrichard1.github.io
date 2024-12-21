import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setMenuStatus }) => {
  const handleLinkClick = () => {
    setMenuStatus(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink style={{ textDecoration: 'none' }} to="/" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: 'none' }} to="/projects" onClick={handleLinkClick}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
