'use client';

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        setMenuStatus={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <Sidebar
        isOpen={isMenuOpen}
        setMenuStatus={setIsMenuOpen}
      />
    </>
  );
}