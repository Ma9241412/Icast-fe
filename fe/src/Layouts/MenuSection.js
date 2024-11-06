import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "antd";
import "../Styles/IcaseHeaderStyles.css";

const { useBreakpoint } = Grid;

const MenuSection = () => {
  const screens = useBreakpoint();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="menu-section">
      {/* Desktop Menu */}
      {screens.md ? (
        <nav className="desktop-menu">
          <Link to="/about" className="menu-link">ABOUT ICAST</Link>
          <Link to="/themes" className="menu-link">CONFERENCE THEMES</Link>
          <Link to="/content" className="menu-link">CALL FOR CONTENT</Link>
          <Link to="/registration" className="menu-link">REGISTRATION</Link>
          <Link to="/sponsors" className="menu-link">EXPOSITION & SPONSORS</Link>
          <Link to="/program" className="menu-link">PROGRAMME</Link>
          <Link to="/download" className="menu-link">DOWNLOADS & MANUALS</Link>
        </nav>
      ) : (
        <>
          {/* Mobile Menu Toggle Button */}
          <button className="menu-icon" onClick={handleMenuToggle}>
            ☰
          </button>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <button className="close-icon" onClick={handleCloseMenu}>✖</button>
              <nav className="mobile-menu-links">
                <Link to="/about" onClick={handleCloseMenu} className="menu-link">ABOUT ICAST</Link>
                <Link to="/themes" onClick={handleCloseMenu} className="menu-link">CONFERENCE THEMES</Link>
                <Link to="/content" onClick={handleCloseMenu} className="menu-link">CALL FOR CONTENT</Link>
                <Link to="/registration" onClick={handleCloseMenu} className="menu-link">REGISTRATION</Link>
                <Link to="/sponsors" onClick={handleCloseMenu} className="menu-link">EXPOSITION & SPONSORS</Link>
                <Link to="/program" onClick={handleCloseMenu} className="menu-link">PROGRAMME</Link>
                <Link to="/download" onClick={handleCloseMenu} className="menu-link">DOWNLOADS & MANUALS</Link>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuSection;
