import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
        <p>© {new Date().getFullYear()} Kevin Richard. All rights reserved.</p>
        <p>Contact me at: <a href="mailto:krrichard@protonmail.com">krrichard (at) protonmail (dot) com</a></p>
    </div>
  )
}
