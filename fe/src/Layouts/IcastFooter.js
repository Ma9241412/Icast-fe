import React from "react";
import { Row, Col, Typography, Space, Image, Grid } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import footerLogo from "../Assets/icastw.png";
import suparcoLogo from "../Assets/suparco.png";
import istLogo from "../Assets/ist-logo.png";

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

const Footer = () => {
  const screens = useBreakpoint();

  
  const titleMedium = screens.xl
    ? "19px"
    : screens.lg
    ? "19px"
    : screens.md
    ? "17px"
    : "17px";
  const paragraphFontSize = screens.xl
    ? "17px"
    : screens.lg
    ? "17px"
    : screens.md
    ? "15px"
    : "15px";
  return (
    <div style={{ background: "#001529", padding: "40px 20px" }}>
      <Row gutter={[32, 32]} justify="space-around" align="top">
        {/* Left Section: ICAST Logo */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Image
            src={footerLogo}
            alt="ICAST Logo"
            preview={false}
            style={{ maxWidth: "250px", width: "100%" }}
          />
        </Col>

        {/* Center Section: Contact Information */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Space direction="vertical" size="large">
            <Title
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: titleMedium,
                fontFamily: "Inter, sans-serif",
              }}
            >
              CONFERENCE SECRETARIAT
            </Title>
            <Text
              style={{
                color: "white",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Institute of Space Technology
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
              }}
            >
              1, Islamabad Highway 44000, Pakistan
            </Text>
            <Space direction="vertical" size="small">
              <Space size="small">
                <MailOutlined style={{ color: "white" }} />
                <Text
                  style={{
                    color: "white",
                    fontSize: paragraphFontSize,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  icast.pakistan@gmail.com
                </Text>
              </Space>
              <br/>
              <Space size="small">
                <PhoneOutlined style={{ color: "white" }} />
                <Text
                  style={{
                    color: "white",
                    fontSize: paragraphFontSize,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  +92-51-9075799
                </Text>
              </Space>
            </Space>
          </Space>
        </Col>

        {/* Right Section: Partner Logos and Social Media Links */}
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Space direction="vertical" size="large">
            {/* Partner Logos */}
            <Space size="large">
              <Link to="https://suparco.gov.pk/">
                <Image
                  src={suparcoLogo}
                  alt="SUPARCO Logo"
                  preview={false}
                  style={{ maxWidth: "100px", width: "100%" }}
                />
              </Link>
              <Link to="https://ist.edu.pk/">
                <Image
                  src={istLogo}
                  alt="IST Logo"
                  preview={false}
                  style={{ maxWidth: "100px", width: "100%" }}
                />
              </Link>
            </Space>
            <br/>
            {/* Social Media Links */}
            <Space size="large">
              <Link
                to="https://www.facebook.com/ICAST.Pakistan"
                target="_blank"
              >
                <FacebookOutlined
                  style={{ fontSize: "30px", color: "white" }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/company/icast-pakistan/"
                target="_blank"
              >
                <LinkedinOutlined
                  style={{ fontSize: "30px", color: "white" }}
                />
              </Link>
            </Space>
            <br/>

            {/* Footer Links */}
            <Space size="large">
              <Link
                to="/contact"
                style={{
                  color: "#FD7527",
                  fontSize: titleMedium,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                CONTACT US
              </Link>
              <Link
                to="/map"
                style={{
                  color: "#FD7527",
                  fontSize: titleMedium,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
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
