import React, { useState } from "react";
import { Image, Layout, Menu, Button, Drawer, Grid } from "antd";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import image from "../Assets/logow.png";
import "../Styles/IcaseHeaderStyles.css";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const IcastHeader = () => {
  const [current, setCurrent] = useState("1");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Header className="header">
        <div className="logo">
          <Image
            src={image}
            alt="logo ICast"
            width={screens.xs ? 250 : 600} // Adjust logo width based on screen size
            preview={false}
          />
        </div>

        {/* Desktop Menu */}
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="desktop-menu"
        >
          <Menu.Item key="1" className={`menu-link ${current === "1" ? "active" : ""}`}>
            <Link to="/about">About ICAST</Link>
          </Menu.Item>
          <Menu.Item key="3" className={`menu-link ${current === "3" ? "active" : ""}`}>
            <Link to="/themes">Conference Themes</Link>
          </Menu.Item>
          <Menu.Item key="2" className={`menu-link ${current === "2" ? "active" : ""}`}>
            <Link to="/content">Call for Content</Link>
          </Menu.Item>
          <Menu.Item key="4" className={`menu-link ${current === "4" ? "active" : ""}`}>
            <Link to="/registration">Registration</Link>
          </Menu.Item>
          <Menu.Item key="5" className={`menu-link ${current === "5" ? "active" : ""}`}>
            <Link to="/sponsorship">Exposition & Sponsorship</Link>
          </Menu.Item>
          <Menu.Item key="6" className={`menu-link ${current === "6" ? "active" : ""}`}>
            <Link to="/programme">Programme</Link>
          </Menu.Item>
        </Menu>

        {/* Mobile Menu Button */}
        <Button
          className="menu-icon"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />

        {/* Drawer for Mobile Menu */}
        <Drawer
      title={
        <div style={{ textAlign: "center", backgroundColor: "#272B3A" }}>
          <Image src={image} alt="logo ICast" width={200} preview={false} />
        </div>
      }
      style={{ backgroundColor: "#272B3A" }}
      placement="right"
      onClose={onClose}
      visible={drawerVisible}
      closeIcon={<CloseOutlined style={{ color: 'white' }} />}
    >
      <Menu
        onClick={(e) => {
          handleClick(e);
          onClose();
        }}
        style={{ backgroundColor: "#272B3A", color: "white" }}
        selectedKeys={[current]}
        mode="vertical"
        className="custom-menu" // Add a class name to target with CSS
      >
        <Menu.Item key="1">
          <Link style={{ color: "white" }} to="/about">About ICAST</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link style={{ color: "white" }} to="/themes">Conference Themes</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link style={{ color: "white" }} to="/content">Call for Content</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link style={{ color: "white" }} to="/registration">Registration</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link style={{ color: "white" }} to="/sponsorship">Exposition & Sponsorship</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link style={{ color: "white" }} to="/programme">Programme</Link>
        </Menu.Item>
      </Menu>
    </Drawer>
      </Header>
    </>
  );
};

export default IcastHeader;
