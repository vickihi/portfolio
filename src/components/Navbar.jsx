import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          <a href="#">
            <img src="/images/logo.png" alt="logo"/>
          </a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="nav-links">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a href="#" className="resume-btn">
          Resume <FiDownload />
        </a>
      </div>
    </header>
  )
}

export default Navbar
