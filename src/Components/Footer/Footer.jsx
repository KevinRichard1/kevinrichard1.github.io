import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
        <p>© {new Date().getFullYear()} Kevin Richard. Last Updated September 3, 2026.</p>
        <p>Contact me at: <a href="mailto:krich103@charlotte.edu">krich103 (at) charlotte (dot) edu</a></p>
    </div>
  )
}
