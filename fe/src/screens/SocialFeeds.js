import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Text } = Typography;

const SocialFeeds = () => {
  const screens = Grid.useBreakpoint();

  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : screens.sm
    ? "40px"
    : "30px";

  const embedContainerStyle = {
    width: "100%",
    height: screens.xs ? "500px" : "650px", // shorter on mobile
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  };

  return (
    <>
      {/* <IcastHeader /> */}
      <div style={{ padding: screens.xs ? "15px" : "20px", backgroundColor: "white" }}>
        <Title
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: titleFontSize,
            textAlign: "center",
            color: "black",
          }}
        >
          Social Feeds
        </Title>

        <Row gutter={[16, 16]} justify="center" style={{ display: "flex", alignItems: "stretch" }}>
          {/* Facebook Column */}
          <Col xs={24} md={12} lg={8} xxl={6} style={{ display: "flex", flexDirection: "column" }}>
            <Text
              strong
              style={{
                fontSize: "18px",
                textAlign: "start",
                marginBottom: "10px",
                color: "#186814",
              }}
            >
              👍 Stay Updated! Follow Us on Facebook
            </Text>
            <div style={embedContainerStyle}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FICAST.Pakistan&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                style={iframeStyle}
                scrolling="no"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Feed"
              ></iframe>
            </div>
          </Col>

          {/* LinkedIn Column */}
          <Col xs={24} md={12} lg={16} xxl={18} style={{ display: "flex", flexDirection: "column" }}>
            <Text
              strong
              style={{
                fontSize: "18px",
                textAlign: "start",
                marginBottom: "10px",
                color: "#186814",
              }}
            >
              🔗 Connect with Us! Follow Us on LinkedIn
            </Text>
            <div style={embedContainerStyle}>
              <iframe
                src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25537040"
                style={iframeStyle}
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Feed"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SocialFeeds;
