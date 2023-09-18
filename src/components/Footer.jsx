import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} MyShopp</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer