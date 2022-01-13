import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-items-container">
        <a href="#home" className="navbarItem">
          home
        </a>
        <a href="#about" className="navbarItem">
          about
        </a>
        <a href="#technology" className="navbarItem">
          technology
        </a>
        <a href="#contact" className="navbarItem">
          contact
        </a>
      </div>
    </div>
  );
}
