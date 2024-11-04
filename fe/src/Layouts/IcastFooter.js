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
import footerLogo from '../Assets/icastw.png';
import suparcoLogo from '../Assets/suparco.png';
import istLogo from '../Assets/ist-logo.png';

const { Text, Link } = Typography;

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        
        {/* Left Section: ICAST Logo */}
        <Col xs={24} sm={8} md={8} style={{ textAlign: 'center' }}>
          <Image className='icast-logo' src={footerLogo} alt="ICAST Logo" preview={false} />
        </Col>
        
        {/* Center Section: Contact Information */}
        <Col xs={24} sm={8} md={8}>
  <Space align="start" direction="vertical">
    <Text style={{ color: "white", fontSize: "20px" }}>NCGSA Secretariat</Text>
    <Text style={{ color: "white", fontSize: "20px" }}>Institute of Space Technology</Text>
    <Text style={{ color: "white", fontSize: "20px" }}>1, Islamabad Highway, Islamabad 44000</Text>
    <Space direction="vertical" align="start"> 
      <Space>
        <MailOutlined />
        <Text style={{ color: "white", fontSize: "20px" }}>icast.pakistan@gmail.com</Text>
      </Space>
      <Space>
        <PhoneOutlined />
        <Text style={{ color: "white", fontSize: "20px" }}>+92-51-9075799</Text>
      </Space>
    </Space>
  </Space>
</Col>


        {/* Right Section: Partner Logos and Social Media Links */}
        <Col xs={24} sm={8} md={8} style={{ textAlign: 'center' }}>
          <Space direction='vertical'>
            <Space className="partner-logos">
              <img src={suparcoLogo} alt="SUPARCO Logo" preview={false} className="partner-logo" />
              <img src={istLogo} alt="IST Logo" preview={false} className="partner-logo" />
            </Space>
            <Space className="social-media-icons">
              <Link href="#" target="_blank"><TwitterOutlined /></Link>
              <Link href="#" target="_blank"><FacebookOutlined /></Link>
              <Link href="#" target="_blank"><InstagramOutlined /></Link>
              <Link href="#" target="_blank"><LinkedinOutlined /></Link>
              <Link href="#" target="_blank"><YoutubeOutlined /></Link>
            </Space>
            <Space className="footer-links">
              <Link href="/contact" className="footer-link">CONTACT US</Link>
              <Link href="#" className="footer-link">SITEMAP</Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
