import React, { useState } from "react";
import { Menu } from "antd";
import "../Styles/DesktopMenuStyles.css";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  // Submenu items for "ABOUT ICAST"
  const aboutSubMenus = [
    { key: "aims & objectives", label: "Aims & Objectives", link: "/aims" },
    { key: "governance", label: "ICAST Governance", link: "/governance" },
  ];

  return (
    <div className="desktop-menu-container">
      <Menu mode="horizontal" className="desktop-menu">
        {/* About ICAST Menu Item */}
        <div
          className="menu-item-with-drawer"
          onMouseEnter={() => setShowDrawer(true)}
          onMouseLeave={() => setShowDrawer(false)}
        >
          <Link to={'/'}>
          <Menu.Item key="about">ABOUT ICAST</Menu.Item>
          </Link>

          {/* Submenu Drawer */}
          {showDrawer && (
            <div className="submenu-drawer">
              <ul className="submenu-list">
                {aboutSubMenus.map((item) => (
                  <li key={item.key} className="submenu-item">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <Link to="/content">
          <Menu.Item key="content">CALL FOR CONTENT</Menu.Item>
        </Link>
        <Link to={"/expo"}>
          <Menu.Item key="sponsors">EXPOSITION & SPONSORS</Menu.Item>
        </Link>
        <Menu.Item key="register">REGISTRATION</Menu.Item>
        <Menu.Item key="theme">CONFERENCE THEME</Menu.Item>
        <Menu.Item key="program">PROGRAMME</Menu.Item>
        <Menu.Item key="downloads">DOWNLOADS</Menu.Item>
      </Menu>
    </div>
  );
};

export default DesktopMenu;
