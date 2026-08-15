import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setMenuStatus }) => {
  const handleLinkClick = () => {
    setMenuStatus(false);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav aria-label="Mobile navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <a
              href="/#research"
              onClick={handleLinkClick}
            >
              Research
            </a>
          </li>

          <li>
            <a
              href="/#education"
              onClick={handleLinkClick}
            >
              Education
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;