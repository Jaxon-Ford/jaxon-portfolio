import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
}, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Jaxon Ford</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
