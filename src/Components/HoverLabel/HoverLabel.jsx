'use client';

import { useState } from 'react';

const HoverLabel = ({ label, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX + 14,
      y: event.clientY - 20,
    });
  };

  return (
    <div
      className="hover-label-trigger"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      <span
        className={`hover-label ${visible ? 'visible' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default HoverLabel;