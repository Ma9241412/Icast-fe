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
import fb from "../Assets/fb.png";
import ld from "../Assets/ld.png";
import "../Styles/Subfooter.css";

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
            style={{ maxWidth: "350px", width: "100%" }}
          />
        </Col>

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
                  info@icast.pk
                </Text>
              </Space>
              <br />
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
              <br />
              <Space className="icon-container">
                <Link
                  to="https://www.facebook.com/ICAST.Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    preview={false}
                    src={fb} 
                    alt="Facebook"
                    className="social-icon fb"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "white",
                      borderRadius: "5px", 
                    }} 
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/icast-pakistan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    preview={false}
                    src={ld}
                    alt="LinkedIn"
                    className="social-icon linkedin"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }} 
                  />
                </Link>
              </Space>
            </Space>
          </Space>
        </Col>

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
              <Link
                to="https://suparco.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={suparcoLogo}
                  alt="SUPARCO Logo"
                  preview={false}
                  style={{ maxWidth: "100px", width: "100%" }}
                />
              </Link>
              <Link
                to="https://ist.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={istLogo}
                  alt="IST Logo"
                  preview={false}
                  style={{ maxWidth: "100px", width: "100%" }}
                />
              </Link>
            </Space>
            <br />
            {/* Social Media Links */}
            <Space size="large">
              <Link to="/press-release" target="_blank">
                <Title
                  style={{
                    color: "#FD7527",
                    fontSize: titleMedium,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  MEDIA RELEASE
                </Title>
              </Link>
            </Space>
            <br />

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
