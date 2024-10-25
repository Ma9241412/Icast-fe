import React from "react";
import { Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "../Styles/IcaseHeaderStyles.css"; // Custom styles
import image from "../Assets/logoicast.png"; // Logo image

const { Header } = Layout;

const IcastHeader = () => {
  return (
    <Header
      className="header"
      style={{
        padding: "0 40px",
        backgroundColor: "#f0f0f0",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="logo-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          src={image}
          alt="NCGSA Logo"
          style={{ height: "60px", marginRight: "15px" }}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flexGrow: 1, justifyContent: "flex-end" }}
      >
        <Menu.Item key="1">
          <Link to="/Introduction" className="menu-link">
            About ICAST
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/speakers" className="menu-link">
            {" "}
            Speakers
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/themes" className="menu-link">
            Conference Themes
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/dates" className="menu-link">
            Important Dates
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/registeration" className="menu-link">
            Registration
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default IcastHeader;
