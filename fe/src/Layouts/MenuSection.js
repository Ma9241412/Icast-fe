import React, { useState } from "react";
import { Menu } from "antd";
import "../Styles/DesktopMenuStyles.css";
import { Link, useLocation } from "react-router-dom";

const DesktopMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation(); // Get the current path from react-router
  const [currentKey, setCurrentKey] = useState(location.pathname);

  // Submenu items for "ABOUT ICAST"
  const aboutSubMenus = [
    { key: "/aims", label: "Aims & Objectives", link: "/aims" },
    { key: "/governance", label: "ICAST Governance", link: "/governance" },
  ];

  // Handle menu item click
  const handleMenuClick = (e) => {
    setCurrentKey(e.key); // Set the clicked menu key as active
  };

  return (
    <div className="desktop-menu-container">
      <Menu
        mode="horizontal"
        className="desktop-menu"
        selectedKeys={[currentKey]} // Highlight only the selected menu item
        onClick={handleMenuClick} // Update active key on click
      >
        {/* About ICAST Menu Item */}
        <div
          className="menu-item-with-drawer"
          onMouseEnter={() => setShowDrawer(true)}
          onMouseLeave={() => setShowDrawer(false)}
        >
          <Menu.Item key="/about">
            <Link to="/" onClick={() => setCurrentKey("/")}>
              ABOUT ICAST
            </Link>
          </Menu.Item>

          {/* Submenu Drawer */}
          {showDrawer && (
            <div className="submenu-drawer">
              <ul className="submenu-list">
                {aboutSubMenus.map((item) => (
                  <li key={item.key} className="submenu-item">
                    <Link
                      to={item.link}
                      onClick={() => setCurrentKey(item.key)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <Menu.Item key="/content">
          <Link to="/content">CALL FOR CONTENT</Link>
        </Menu.Item>
        <Menu.Item key="/expo">
          <Link to="/expo">EXPOSITION & SPONSORS</Link>
        </Menu.Item>
        <Menu.Item key="/registration">
          <Link to="/registration">REGISTRATION</Link>
        </Menu.Item>
        <Menu.Item key="/theme">
          <Link to="/theme">CONFERENCE THEME</Link>
        </Menu.Item>
        <Menu.Item key="/screen-inprogress">
          <Link to="/screen-inprogress">PROGRAMME</Link>
        </Menu.Item>
        <Menu.Item key="/downloads">
          <Link to="/screen-inprogress">DOWNLOADS</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DesktopMenu;
