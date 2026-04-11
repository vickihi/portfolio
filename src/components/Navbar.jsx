import { FiDownload } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-icon">P</div>
        <span>Personal</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <a href="#" className="resume-btn">
        Resume <FiDownload />
      </a>
    </nav>
  )
}

export default Navbar
