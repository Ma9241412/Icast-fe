import React from "react";
import { Row, Col, Typography, Space, Image } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "../Styles/IcastFooterStyles.css";
import footerLogo from "../Assets/icastw.png";
import suparcoLogo from "../Assets/suparco.png";
import istLogo from "../Assets/ist-logo.png";
import { Link } from "react-router-dom";

const { Text,Title } = Typography;

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Left Section: ICAST Logo */}
        <Col xs={24} sm={8} md={8} className="footer-logo-container">
          <Image
            className="icast-logo"
            src={footerLogo}
            alt="ICAST Logo"
            preview={false}
          />
        </Col>

        {/* Center Section: Contact Information */}
        <Col xs={24} sm={8} md={8} className="footer-contact-container">
          <Space align="start" direction="vertical">
            <Title level={4} style={{fontWeight:"bold",textAlign:"center",color:"white"}}  className="footer-text">CONFERENCE SECRETARIAT</Title>
            <Text   className="footer-text">Institute of Space Technology</Text>
            <Text    className="footer-text">
              1, Islamabad Highway 44000, Pakistan
            </Text>
            <Space direction="vertical" align="start">
              <Space>
                <MailOutlined   />
                <Text     className="footer-text">icast.pakistan@gmail.com</Text>
              </Space>
          
              <Space >
                <PhoneOutlined   />
                <Text     className="footer-text">+92-51-9075799</Text>
              </Space>
            </Space>
          </Space>
        </Col>

        {/* Right Section: Partner Logos and Social Media Links */}
        <Col xs={24} sm={8} md={8} className="footer-social-container">
          <Space direction="vertical" size={20}>
            <Space className="partner-logos">
              <Link to="https://suparco.gov.pk/">
                <img
                  src={suparcoLogo}
                  alt="SUPARCO Logo"
                  className="partner-logo"
                />
              </Link>
              <Link to="https://ist.edu.pk/">
                <img
                  src={istLogo}
                  alt="IST Logo"
                  className="partner-logo"
                />
              </Link>
            </Space>
            <Space className="social-media-icons">
              <Link to="https://www.facebook.com/ICAST.Pakistan" target="_blank">
                <FacebookOutlined className="social-icon fb" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/icast-pakistan/"
                target="_blank"
              >
                <LinkedinOutlined className="social-icon linkedin" />
              </Link>
            </Space>
            <Space className="footer-links">
              <Link to="/contact" className="footer-link">
                CONTACT US
              </Link>
              <Link to="/map" className="footer-link">
                VENUE MAP
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
