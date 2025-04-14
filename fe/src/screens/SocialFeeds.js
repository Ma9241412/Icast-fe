import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Text } = Typography;

const SocialFeeds = () => {
  const screens = Grid.useBreakpoint();

  // Responsive Font Sizes
  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";

  return (
    <>
      {/* <IcastHeader /> */}

      <div style={{ padding: "20px",backgroundColor:"white" }}>
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
          <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column" }}>
  <Text strong style={{ fontSize: "18px", textAlign: "start", marginBottom: "10px" ,color:"#186814"}}>
    👍 Stay Updated! Follow Us on Facebook
  </Text>
  <div
    style={{
      width: "100%",
      height: "600px",
      overflow: "hidden",
      border: "1px solid #ddd",
      borderRadius: "8px",
    }}
  >
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FICAST.Pakistan&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      width="100%"
      height="600px"
      style={{ border: "none", display: "block" }}
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
</Col>


          {/* LinkedIn Column */}
          <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column" }}>
            <Text strong style={{ fontSize: "18px", textAlign: "start", marginBottom: "10px",color:"#186814" }}>
              🔗 Connect with Us! Follow Us on LinkedIn
            </Text>
            <div
              style={{
                width: "100%",
                height: "600px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <iframe
                src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25537040"
                frameBorder="0"
                width="100%"
                height="600px"
                style={{ border: "none" }}
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
