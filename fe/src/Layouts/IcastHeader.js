import React from "react";
import { Button, Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import image from "../Assets/logow.png"; // Logo image
import "../Styles/IcaseHeaderStyles.css"; // Custom styles

const { Header } = Layout;

const IcastHeader = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#272B3A",
          padding: "5px 40px",
          fontSize: "14px",
        }}
      >
        <div>
          <HomeOutlined style={{ marginRight: "8px", color: "white" }} />
          Welcome to Paheli. Need Help?{" "}
          <Link to="/contact" style={{ color: "#ff7a00" }}>
            Get in Touch
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div>
            <EnvironmentOutlined style={{ marginRight: "8px" }} />
            521684 Majadra Street, New York.
          </div>
          <div>
            <MailOutlined style={{ marginRight: "8px" }} />
            support.Paheli@gmail.com
          </div>
          <div>
            <PhoneOutlined style={{ marginRight: "8px" }} />
            +5-547-254-3526
          </div>
        </div>
      </div>

      {/* Main Header */}
      <Header
        className="header"
        style={{
          padding: "0 40px",
          backgroundColor: "#272B3A",

          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="logo"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <Image
            src={image}
            alt="logo ICast"
            width={180}
            height={75}            
            preview={true}
          />

        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            flexGrow: 1, justifyContent: "center", backgroundColor: "#272B3A",
          }}
        >
          <Menu.Item key="1" className="menu-link">
            <Link to="/home">About ICAST</Link>
          </Menu.Item>
          <Menu.Item key="2" className="menu-link">
            <Link to="/about">Speakers</Link>
          </Menu.Item>
          <Menu.Item key="3" className="menu-link">
            <Link to="/services">Conference Themes</Link>
          </Menu.Item>
          <Menu.Item key="4" className="menu-link">
            <Link to="/pages">ImportantDates</Link>
          </Menu.Item>
          <Menu.Item key="5" className="menu-link">
            <Link to="/blog">Gallery</Link>
          </Menu.Item>
         
        </Menu>
        <Link to="/quote">
  <Button
    style={{
      background:
        "linear-gradient(90deg, rgba(180, 180, 180, 1) 0%, rgba(200, 200, 200, 1) 100%)",
      color: "white",
      borderRadius: "4px",
      marginLeft: "15px",
      textDecoration: "none",
      padding: "20px 40px",
      border: "none",
    }}
  >
    Registration
  </Button>
</Link>



      </Header>
    </>
  );
};

export default IcastHeader;
