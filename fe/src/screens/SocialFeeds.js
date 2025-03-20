import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
const { Title, Text } = Typography;

const SocialFeeds = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";
  const titleMedium = screens.xl
    ? "22px"
    : screens.lg
    ? "22px"
    : screens.md
    ? "17px"
    : "17px";
  return (
    <>
      <IcastHeader />
      <div>
        <Title
          style={{
            padding: "20px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: titleFontSize,
            backgroundColor: "#EEF0F2",
            textAlign: "justify",
          }}
        >
          Social Feeds
        </Title>
      </div>
      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]} justify="center">
          {/* Facebook Column */}

          <Col xs={24} md={12}>
            <Typography.Title
              level={4}
              style={{ textAlign: "left", color: "#186814" }}
            >
              Be Part of Our Community! <br /> Like & Follow Us on Facebook!"
            </Typography.Title>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FICAST.Pakistan&tabs=timeline&width=1200&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="1000"
              height="1000"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Col>

          {/* LinkedIn Column */}
          <Col xs={24} md={12}>
            <Typography.Title
              level={4}
              style={{ textAlign: "left", color: "#186814" }}
            >
              Don't Miss Out! Follow Us on LinkedIn for Exciting Updates!
            </Typography.Title>
            <iframe
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25536837"
              frameborder="0"
              width="100%"
              height="1000"
            ></iframe>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default SocialFeeds;
