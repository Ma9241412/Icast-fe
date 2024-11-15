import React from "react";
import { Layout, Typography, Row, Col, Button, Card, Space, Grid } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  DownloadOutlined,
  FileTextOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/ExpoStyles.css";

const { Title, Text } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Expositions = () => {
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
  ? "45px"
  : screens.lg
  ? "40px"
  : screens.md
  ? "35px"
  : "28px";

const paragraphFontSize = screens.xl
  ? "19px"
  : screens.lg
  ? "17px"
  : screens.md
  ? "19px"
  : "19px";
    const buttonsize = screens.xl
    ? "15px"
    : screens.lg
    ? "18px"
    : screens.md
    ? "16px"
    : "16px";
  return (
    <>
      <IcastHeader />
        <div className="expo-content">
          <Title style={{ fontSize: titleFontSize ,fontWeight:"bold" }} className="expo-header">
            Exposition & Sponsors
          </Title>
          <Text
            style={{ fontSize: paragraphFontSize }}
            className="expo-subtitle"
          >
            ICAST Forum and Exposition / Exposition & Sponsors
          </Text>

          {/* Description and Contact Section */}
          <Row
          style={{backgroundColor:"#EFF0F2",padding:"30px",}}
          align={"top"}
          >
            {/* Left Column */}
            <Col xs={24} md={16} lg={16}>
              <Text
                style={{ fontSize: paragraphFontSize ,}}
                className="expo-description"
              >
                AIAA SciTech Forum is the world’s largest event for aerospace
                research, development, and technology. Following up on a strong
                2024 forum—which set a new attendance record of 6,000+ attendees
                from 45 countries—the 2025 AIAA SciTech Forum promises to
                attract thousands of high-profile decision makers,
                entrepreneurs, scientists, technologists, and other
                professionals from government, military, industry, and academia.
              </Text>
              <Text
                style={{ fontSize: paragraphFontSize }}
                className="expo-description"
              >
                Through sponsoring or exhibiting, you can validate your
                solutions of the future, showcase an exciting product, service,
                or company project, find and/or meet with business partners,
                make qualified sales, and recruit premier talent.
              </Text>
            </Col>

            {/* Right Column - Contact Info */}
            <Col xs={24} md={8} lg={8}>
                <div className="contact-card"
                  style={{
                    backgroundColor: "#1f5223",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <Title
                    style={{
                      fontSize: paragraphFontSize,
                      color: "white",
                      margin: 0,
                      fontWeight:500
                    }}
                  >
                    Contact Our Team
                  </Title>
                </div>
                <div className="contact-entry">
                  <Text className="contact-name">Elizabeth Just</Text>
                  <Text className="contact-details">
                    Sr. Manager, Client Executive and Sales Capture
                  </Text>
                  <Text className="contact-details">New Clients A-N</Text>
                  <Text className="contact-details">ElizabethJ@aiaa.org</Text>
                  <Text className="contact-details">Cell: 571.439.4672</Text>
                </div>
                <div className="contact-entry">
                  <Text className="contact-name">Brian Williams</Text>
                  <Text className="contact-details">
                    Sr. Manager, Client Executive and Sales Capture
                  </Text>
                  <Text className="contact-details">New Clients A-N</Text>
                  <Text className="contact-details">ElizabethJ@aiaa.org</Text>
                  <Text className="contact-details">Cell: 571.439.4672</Text>
                </div>
            </Col>
            <Col>
            <div style={{ textAlign: "left",padding:"10px 0px" }}>
 
            <div className="contact-card"
                  style={{
                    backgroundColor: "#1f5223",
                   width:"200px",
                   height:"45px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <Title
                    style={{
                      fontSize: paragraphFontSize,
                      color: "white",
                      margin: 0,
                      fontWeight:500,
                      textAlign:"center",
                      padding:"10px"
                    }}
                  >
                    Get Started
                  </Title>
                </div>


            <Row
              gutter={[24, 24]}
              style={{ marginTop: "2rem" }}
              justify="start"
            >
              <Col xs={24} sm={12} md={6} lg={6}>
                <Card  className="action-card">
             <Space direction="vertical">
             <Space align="start">
                <FileTextOutlined
                    style={{ fontSize: "24px", color: "white" }}
                  />
                  <Text style={{  color: "white" }} className="action-card-text">
                    Step 1. Find the Right Opportunity For Your Organization.
                  </Text>
                </Space>
                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    className="action-button"
                    style={{fontSize:buttonsize}}
                  >
                    Download Forum Prospectus
                  </Button>
             </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Card  className="action-card">
                <Space direction="vertical">
                <Space align="start">
                 <MessageOutlined
                    style={{ fontSize: "24px", color: "white" }}
                  />
                  <Text  style={{  color: "white" }} className="action-card-text">
                    Step 2. See Who’s Attending and Find Your Space In the Expo
                    Hall.
                  </Text>
                 </Space>
                  <Button 
                    style={{fontSize:buttonsize}}
                    size="large"
                    type="primary" className="action-button">
                    View 2025 Floor Plans
                  </Button>
                </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Card  className="action-card">
           <Space direction="vertical">
           <Space align="start">
                    <FileTextOutlined
                    style={{ fontSize: "24px", color: "white" }}
                  />
                  <Text style={{  color: "white" }} className="action-card-text">
                    Step 3. Complete a Sponsor or Exhibitor Contract In Minutes.
                  </Text>
                  </Space>
                  <Space align="start">
                    <Button 
                    style={{fontSize:buttonsize}}
                    size="large"
                    type="primary" className="action-button">
                      Sponsor Contacts
                    </Button>
                  </Space>
           </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Card  className="action-card">
                <Space direction="vertical">
                <Space  align="start">
                  <MessageOutlined
                    style={{ fontSize: paragraphFontSize, color: "white" }}
                  />
                  <Text style={{  color: "white" }} className="action-card-text">
                    Step 4. Have Questions Before You Sign? Get in Touch With
                    Our Team.
                  </Text>
                  </Space>
                  <Button 
                    style={{fontSize:buttonsize}}
                    size="large"
                  type="primary" className="action-button">
                    Contact Us
                  </Button>
                </Space>
                </Card>
              </Col>
            </Row>
          </div>
            </Col>
          </Row>

         
        </div>

      <Footer />
    </>
  );
};

export default Expositions;
