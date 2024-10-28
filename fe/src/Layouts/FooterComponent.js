import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'; 
import ISTLogo from '../Assets/ist-logo.png'; 
import HECLogo from '../Assets/hec.png'; 
import '../Styles/HomeStyles.css';

const { Text, Title } = Typography;

const FooterComponent = () => {
  return (
    <div className="footer-section">
      <Row gutter={[32, 64]} justify="space-between" align="top">
        {/* Contact Info */}
        <Col xs={24} sm={24} md={8} lg={8} className="footer-col" align="center">
          <Title level={2} className="footer-title" style={{ color: "white" }}>
            Contact Info
          </Title>
          <Text className="footer-text">NCGSA Secretariat</Text>
          <Text className="footer-text">Institute of Space Technology</Text>
          <Text className="footer-text">1, Islamabad Highway, Islamabad 44000</Text>
          <Text className="footer-text">Phone: +92-51-9075799</Text>
          <Text className="footer-text">Email: info@ncgsa.org.pk</Text>
        </Col>

        {/* Social Media Links */}
        <Col xs={24} sm={24} md={8} className="footer-col" align="center">
          <Title level={2} style={{ color: "white" }} className="footer-title">
            Get Social
          </Title>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="social-icon fb" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="social-icon insta" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeOutlined className="social-icon yt" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="social-icon linkedin" />
            </a>
          </div>
        </Col>

        {/* Logos */}
        <Col xs={24} sm={24} md={8} className="footer-col logos-col" align="center">
          <Image src={ISTLogo} height={70} width={150} alt="IST Logo" className="footer-logo" />
          <Image src={HECLogo} height={90} width={100} alt="HEC Logo" className="footer-logo" />
        </Col>
      </Row>
    </div>
  );
};

export default FooterComponent;
