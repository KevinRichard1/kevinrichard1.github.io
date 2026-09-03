'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar = ({ isOpen, setMenuStatus }) => {
  const handleLinkClick = () => {
    setMenuStatus(false);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav aria-label="Mobile navigation">
        <ul>
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/#research"
              onClick={handleLinkClick}
            >
              Research
            </Link>
          </li>

          <li>
            <Link
              href="/#education"
              onClick={handleLinkClick}
            >
              Education
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;