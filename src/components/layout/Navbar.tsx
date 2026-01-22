import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className="nav">
          <div className="links">
            <a href="#home" onClick={closeNavbar}>
              Home
            </a>
            <a href="#projects" onClick={closeNavbar}>
              Projects
            </a>
            <a href="#about" onClick={closeNavbar}>
              About
            </a>
            <a href="#experience" onClick={closeNavbar}>
              Experience
            </a>
            <a href="#services" onClick={closeNavbar}>
              Services
            </a>
            <a href="#contact" onClick={closeNavbar}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={closeNavbar}></div>}
    </>
  );
}
