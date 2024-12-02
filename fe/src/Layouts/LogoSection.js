import React, { useState } from 'react';
import { Menu, Drawer, Button, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../Styles/IcaseHeaderStyles.css';
import logo from '../Assets/logoicast.svg';
import supcarco from '../Assets/suparco.png';
import ist from '../Assets/ist-logo.png';
import { Link } from 'react-router-dom';

const LogoSection = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
   <>
   <header className="header-container">
      <div className="left-section">
        <Link to={"/"}>
        <img src={logo} alt="ICAST Logo" className="main-logo" />
        </Link>
        <div className="header-text">
          <h1>INTERNATIONAL CONFERENCE ON APPLICATIONS OF SPACE SCIENCE & TECHNOLOGY</h1>
          <h2>"Space for Sustainable Development"</h2>
          <h3>Institute of Space Technology, Islamabad, Pakistan</h3>
          <button className="date-button">November 18-20, 2025</button>
        </div>
      </div>

      {/* Right Section with a Different Background Color */}
      <div className="right-section">
        <div className="partners-background">
          <Link to="https://suparco.gov.pk/">
          <Image  preview={false} src={supcarco} alt="SUPARCO Logo" className="partner-logo" />

          </Link>
          <Link to={"https://ist.edu.pk/"}>
          <Image preview={false} src={ist} alt="IST Logo" className="partner-logo" />

          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="mobile-menu-icon"
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="ICAST Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu mode="vertical">
         <Link to={'/'}>
         <Menu.Item key="about">About ICAST</Menu.Item>
         </Link>
          <Menu.Item key="theme">Conference Theme</Menu.Item>
          <Link to={"/content"}>
          <Menu.Item key="content">Call for Content</Menu.Item>
          </Link>
          <Menu.Item key="sponsors">Exposition & Sponsors</Menu.Item>
          <Menu.Item key="program">Program</Menu.Item>
          <Menu.Item key="downloads">Downloads</Menu.Item>
        </Menu>
      </Drawer>
    </header>

   </>

  );
};

export default LogoSection;
