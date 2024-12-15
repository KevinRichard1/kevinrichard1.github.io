import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
        <p>© {new Date().getFullYear()} Kevin Richard. All rights reserved.</p>
        <p>Built with React and hosted on GitHub Pages</p>
    </div>
  )
}
