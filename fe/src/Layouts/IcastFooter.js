import React from 'react';
import { Row, Col, Typography, Space, Image } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import '../Styles/IcastFooterStyles.css';
import footerLogo from '../Assets/icastf.png';
import suparcoLogo from '../Assets/suparco.png';
import istLogo from '../Assets/ist-logo.png';

const { Text, Link } = Typography;

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]} justify="space-around" align="middle">
        
        {/* Left Section: ICAST Logo */}
        <Col xs={24} sm={8} md={6} className="footer-logo">
          <Image src={footerLogo} alt="ICAST Logo" preview={false} className="icast-logo" />
        </Col>
        
        {/* Center Section: Contact Information */}
        <Col xs={24} sm={8} md={8} className="footer-contact">
          <Text className="footer-title">NCGSA Secretariat</Text>
          <Text>Institute of Space Technology</Text>
          <Text>1, Islamabad Highway, Islamabad 44000</Text>
          <Space direction="vertical" className="contact-info">
            <Space>
              <PhoneOutlined />
              <Text>+92-51-9075799</Text>
            </Space>
            <Space>
              <MailOutlined />
              <Text>info@ncgsa.org.pk</Text>
            </Space>
          </Space>
        </Col>

        {/* Right Section: Partner Logos and Social Media Links */}
        <Col xs={24} sm={8} md={6} className="footer-partners">
          <Space className="partner-logos">
            <Image src={suparcoLogo} alt="SUPARCO Logo" preview={false} className="partner-logo" />
            <Image src={istLogo} alt="IST Logo" preview={false} className="partner-logo" />
          </Space>
          <Space className="social-media-icons">
            <Link href="#" target="_blank"><TwitterOutlined /></Link>
            <Link href="#" target="_blank"><FacebookOutlined /></Link>
            <Link href="#" target="_blank"><InstagramOutlined /></Link>
            <Link href="#" target="_blank"><LinkedinOutlined /></Link>
            <Link href="#" target="_blank"><YoutubeOutlined /></Link>
          </Space>
          <Space className="footer-links">
            <Link href="#" className="footer-link">CONTACT US</Link>
            <Link href="#" className="footer-link">SITEMAP</Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
