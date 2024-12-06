import React, { useState } from "react";
import { Menu } from "antd";
import "../Styles/DesktopMenuStyles.css";
import { Link, useLocation } from "react-router-dom";

const DesktopMenu = () => {
  const [activeDrawer, setActiveDrawer] = useState(null); // State to track which drawer is active
  const location = useLocation(); // Get the current path from react-router
  const [currentKey, setCurrentKey] = useState(location.pathname);

  // Submenu items for "ABOUT ICAST"
  const aboutSubMenus = [
    { key: "/aims", label: "Genesis of ICAST", link: "/genisis" },
    { key: "/aims", label: "ICAST 2025", link: "/icast-2025" },
    { key: "/governance", label: "Governance Structure", link: "/governance" },
  ];
  
  const ContentMenus = [
    { key: "/aims", label: "Call For Papers", link: "/call-for-papers" },
    { key: "/aims", label: "Call For Sessions", link: "/call-for-session" },
    { key: "/governance", label: "Author Resources", link: "/author-resources" },
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
          onMouseEnter={() => setActiveDrawer("about")}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <Menu.Item key="/about">
            <Link to="/" onClick={() => setCurrentKey("/")}>
              ABOUT ICAST
            </Link>
          </Menu.Item>

          {/* Submenu Drawer */}
          {activeDrawer === "about" && (
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

        {/* Content Menu Item */}
        <div
          className="menu-item-with-drawer"
          onMouseEnter={() => setActiveDrawer("content")}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <Menu.Item key="/content">
            <Link to="/content" onClick={() => setCurrentKey("content")}>
               CALL FOR CONTENT
            </Link>
          </Menu.Item>

          {/* Submenu Drawer */}
          {activeDrawer === "content" && (
            <div className="submenu-drawer">
              <ul className="submenu-list">
                {ContentMenus.map((item) => (
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
        <Menu.Item key="/registration">
          <Link to="/registration">REGISTRATION</Link>
        </Menu.Item>
        <Menu.Item key="/theme">
          <Link to="/theme"> THEME & TRACKS</Link>
        </Menu.Item>
        <Menu.Item key="/screen-inprogress">
          <Link to="/expo">EXPOSITION & SPONSORS</Link>
        </Menu.Item>  
        {/* <Menu.Item key="/grants">
          <Link to="/grants">GRANTS & AWARDS</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="/screen-inprogress">
          <Link to="/screen-inprogress">PROGRAMME</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="/downloads">
          <Link to="/screen-inprogress">DOWNLOADS</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default DesktopMenu;
