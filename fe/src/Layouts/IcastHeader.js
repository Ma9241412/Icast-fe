import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logow.png";
import "../Styles/IcaseHeaderStyles.css";
import { Grid, Image } from "antd";
const { useBreakpoint } = Grid;

const IcastHeader = () => {
  const screens = useBreakpoint();
  const logoWidth = screens.lg ? 380 : screens.md ? 250 : 250;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <Image preview={false} src={logo} width={logoWidth} alt="ICAST Logo" className="logo-image" />
        </div>
        <nav className="desktop-menu">
          <Link to="/about" className="menu-link">ABOUT ICAST</Link>
          <Link to="/themes" className="menu-link">CONFERENCE THEMES</Link>
          <Link to="/content" className="menu-link">CALL FOR CONTENT</Link>
          <Link to="/registration" className="menu-link">REGISTRATION </Link>
          <Link to="/sponsors" className="menu-link">EXPOSITION & SPONSORS</Link>
          <Link to="/program" className="menu-link">PROGRAMME</Link>
          <Link to="/download" className="menu-link">DOWNLOADS & MANUALS</Link>
        </nav>
      </div>

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
