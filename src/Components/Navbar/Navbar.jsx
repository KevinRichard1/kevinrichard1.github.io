'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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
          <Link
            href="/"
            className="navbar-logo"
            onClick={handleLogoClick}
            aria-label="Home"
          >
            <img src="/images/favicon.png" alt="" />
          </Link>

          <Link
            href="/"
            className="navbar-name"
            onClick={handleLogoClick}
          >
            Kevin Richard
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/#research">Research</Link>
          </li>

          <li>
            <Link href="/#education">Education</Link>
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