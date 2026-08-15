import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
        <p>© {new Date().getFullYear()} Kevin Richard. All rights reserved.</p>
        <p>Contact me at: <a href="mailto:krich103@charlotte.edu">krich103 (at) charlotte (dot) edu</a></p>
    </div>
  )
}
