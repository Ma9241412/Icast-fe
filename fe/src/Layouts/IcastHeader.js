import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logow.png";
import "../Styles/IcaseHeaderStyles.css";
import { Image } from "antd";

const IcastHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Image src={logo} width={400} alt="ICAST Logo" className="logo-image" />
      </div>

      {/* Background bar for the menu with tilt */}
      <div className="menu-background">
      <nav className="desktop-menu">
        <Link to="/about" className="menu-link">ABOUT ICAST</Link>
        <Link to="/themes" className="menu-link">CONFERENCE THEMES</Link>
        <Link to="/content" className="menu-link">CALL FOR CONTENT</Link>
        <Link to="/registration" className="menu-link">REGISTRATION</Link>
        <Link to="/sponsors" className="menu-link">EXPOSTION & SPONSORS</Link>
        <Link to="/program" className="menu-link">PROGRAMME</Link>
        <Link to="/download" className="menu-link">DOWNLOAD</Link>
      </nav>

      </div>

      {/* Desktop Menu */}
     
      {/* Mobile Menu Toggle Button */}
      <button className="menu-icon" onClick={handleMenuToggle}>
        ☰
      </button>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="close-icon" onClick={handleCloseMenu}>✖</button>
          <nav className="mobile-menu-links">
            <Link to="/about" onClick={handleCloseMenu} className="menu-link">About ICAST</Link>
            <Link to="/themes" onClick={handleCloseMenu} className="menu-link">Conference Theme</Link>
            <Link to="/content" onClick={handleCloseMenu} className="menu-link">Call for Content</Link>
            <Link to="/registration" onClick={handleCloseMenu} className="menu-link">Exposition & Sponsors</Link>
            <Link to="/program" onClick={handleCloseMenu} className="menu-link">Program</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default IcastHeader;
