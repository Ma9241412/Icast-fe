import React, { useState } from "react";
import { Menu, Drawer, Button, Image } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../Styles/IcaseHeaderStyles.css";
import logo from "../Assets/logoicast.svg";
import supcarco from "../Assets/suparco.png";
import ist from "../Assets/ist-logo.png";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const LogoSection = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSubMenuClick = () => {
    setSubMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="header-container">
        <div className="left-section">
          <Link to={"/"}>
            <img src={logo} alt="ICAST Logo" className="main-logo" />
          </Link>
          <div className="header-text">
            <h1>
              INTERNATIONAL CONFERENCE ON APPLICATIONS OF SPACE SCIENCE &
              TECHNOLOGY
            </h1>
            <h2>"Space for Sustainable Development"</h2>
            <h3>Institute of Space Technology, Islamabad, Pakistan</h3>
            <button className="date-button">November 18-20, 2025</button>
          </div>
        </div>
        <div className="right-section">
          <div className="partners-background">
            <Link
              to="https://suparco.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src={supcarco}
                alt="SUPARCO Logo"
                className="partner-logo"
              />
            </Link>
            <Link
              to="https://ist.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src={ist}
                alt="IST Logo"
                className="partner-logo"
              />
            </Link>
          </div>

          <Button
            type="text"
            icon={<MenuOutlined />}
            className="mobile-menu-icon"
            onClick={showDrawer}
          />
        </div>

        {/* Mobile Drawer Menu */}
        <Drawer
          title={<span style={{ color: "white" }}>ICAST Menu</span>}
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
          style={{
            backgroundColor: "#1E2634",
            overflow: "hidden", // Prevents overflow
          }}
          bodyStyle={{
            padding: 0,
            margin: 0,
            overflowY: "auto", // Allows scrolling if content exceeds drawer height
          }}
          closeIcon={
            <span
              style={{
                color: "white",
                fontSize: "16px",
              }}
            >
              ✖
            </span>
          }
        >
          <Menu
            style={{
              backgroundColor: "#1E2634",
              borderRight: "none",
              padding: "20px",
            }}
            mode="inline"
          >
            {/* Dropdown for About ICAST */}
            <SubMenu
              key="about-icast"
              title={<span style={{ color: "black" }}>About ICAST</span>}
              style={{
                backgroundColor: "white",
                color: "white",
                marginBottom: "10px",
                padding: "0", // Ensure no additional padding
              }}
              onTitleClick={handleSubMenuClick} 
              open={subMenuOpen}
            >
              <Menu.Item
                key="About ICAST"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/">About ICAST</Link>
              </Menu.Item>
              <Menu.Item
                key="genesis"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/genisis">Genesis</Link>
              </Menu.Item>
              <Menu.Item
                key="icast2025"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/icast-2025">ICAST 2025</Link>
              </Menu.Item>
              <Menu.Item
                key="governance-structure"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/governance">Governance Structure</Link>
              </Menu.Item>
            </SubMenu>

            {/* Other Menu Items */}
            <SubMenu
              title={<span style={{ color: "black" }}>Call For Content</span>}
              style={{
                backgroundColor: "white",
                marginBottom: "10px",
              }}
              key="content"
            >
              <Menu.Item
                key="Call for Content"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/content">Call For Content</Link>
              </Menu.Item>

              <Menu.Item
                key="papers"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/call-for-papers">Call For Papers</Link>
              </Menu.Item>
              <Menu.Item
                key="sessions"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/call-for-session">Call For Sessions</Link>
              </Menu.Item>
              <Menu.Item
                key="resources"
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                <Link to="/author-resources">Author Resources</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item
              style={{
                backgroundColor: "white",
                marginBottom: "10px",
                padding: "10px 20px",
              }}
              key="registration"
            >
              <Link to="/registration">Registration</Link>
            </Menu.Item>

            <Link to={"/tracks"}>
              <Menu.Item
                style={{
                  backgroundColor: "white",
                  marginBottom: "10px",
                  padding: "10px 20px",
                }}
                key="tracks"
              >
                Theme & Tracks
              </Menu.Item>
            </Link>

            <Link to={"/expo"}>
              <Menu.Item
                style={{
                  backgroundColor: "white",
                  marginBottom: "10px",
                  padding: "10px 20px", // Ensure consistent padding
                }}
                key="sponsors"
              >
                Exposition & Sponsors
              </Menu.Item>
            </Link>
            <Link to={"/press-release"}>
              <Menu.Item
                style={{
                  backgroundColor: "white",
                  marginBottom: "10px",
                  padding: "10px 20px",
                }}
                key="sponsors"
              >
                Media Release
              </Menu.Item>
            </Link>
          </Menu>
        </Drawer>
      </header>
    </>
  );
};

export default LogoSection;
