import React from "react";
import { Layout, Typography, Row, Col, Button, Card, Image, Grid } from "antd";
import m1 from "../Assets/m1.jpg";
import m2 from "../Assets/m2.jpg";
import m3 from "../Assets/m3.jpg";
import m4 from "../Assets/m4.jpg";
import m5 from "../Assets/m5.jpg";
import m6 from "../Assets/m6.jpg";
import m7 from "../Assets/m7.jpg";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const aimsData = [
  {
    id: 1,
    title: "Drive Global Collaboration",
    description:
      "Create an international platform where scientists, researchers, and industry experts can exchange insights and collaborate on innovative space technologies that address today's global challenges.",
    image: m1,
  },
  {
    id: 2,
    title: "Advance Research and Innovation",
    description:
      "Support pioneering research in space science by providing participants with opportunities to present, share, and publish their work, fostering a culture of innovation with SUPARCO and IST at the forefront.",
    image: m2,
  },
  {
    id: 3,
    title: "Promote Space Technology for Sustainable Development",
    description:
      "Emphasize the role of space technology in addressing sustainability goals, including climate monitoring, disaster management, and environmental protection, with SUPARCO leading these critical initiatives.",
    image: m3,
  },
  {
    id: 4,
    title: "Engage and Inspire the Next Generation",
    description:
      "Encourage youth involvement in space science through specialized sessions and interactive forums, promoting STEM education and empowering the next generation of space leaders.",
    image: m4,
  },
  {
    id: 5,
    title: "Facilitate Dialogue on Space Policy and Law",
    description:
      "Foster discussions on space law, governance, and sustainability among policymakers, researchers, and industry leaders, reinforcing SUPARCO's role in shaping international space policy.",
    image: m5,
  },
  {
    id: 6,
    title: "Strengthen Skills through Hands-On Training",
    description:
      "Empower participants with hands-on experience in advanced space technologies through interactive workshops and training sessions, equipping them to apply these skills across scientific, commercial, and societal projects.",
    image: m6,
  },
  {
    id: 7,
    title: "Highlight SUPARCO and IST's Leadership in Space Science",
    description:
      "Showcase SUPARCO and the Institute of Space Technology (IST) as leaders in space science and technology, featuring their groundbreaking research, collaborations, and contributions to global and national space missions.",
    image: m7,
  },
];

const AimsPage = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
  const titleMedium = screens.xl
    ? "30px"
    : screens.lg
    ? "30px"
    : screens.md
    ? "25px"
    : "25px";
  const paragraphFontSize = screens.xl
    ? "19px"
    : screens.lg
    ? "17px"
    : screens.md
    ? "19px"
    : "22px";
  return (
    <>
      <IcastHeader />
      <Layout style={{ overflowX: "hidden", backgroundColor: "white" }}>
        <Content style={{ margin: "0 auto", backgroundColor: "white" }}>
          {/* Page Title */}
          <Title
            style={{
              textAlign: "start",
              marginBottom: "30px",
              backgroundColor: "#EFF0F2",
              padding: "20px",
              fontSize: titleFontSize,
              fontWeight: "bold",
            }}
          >
            Aims & Objectives
          </Title>
          <Paragraph
            style={{
              textAlign: "start",
              marginBottom: "30px",
              fontSize: paragraphFontSize,
              color: "#595959",
              padding: "0px 20px",
            }}
          >
            ICAST Forum and Exposition / About ICAST / Aims & Objectives
          </Paragraph>

          {/* Aims List */}
          <Row gutter={[16, 24]} justify="center">
            {aimsData.map((aim, index) => (
              <React.Fragment key={aim.id}>
                <Col xs={24} md={14} lg={20}>
                  <Card bordered={false} style={{ backgroundColor: "#EFF0F2" }}>
                    <Title
                      style={{ marginBottom: "10px", textAlign: "start" ,fontSize:paragraphFontSize,fontWeight:"bold"}}
                    >
                      {index + 1}. {aim.title}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: paragraphFontSize,
                        lineHeight: "1.8",
                        color: "#595959",
                        textAlign: "start",
                      }}
                    >
                      {aim.description}
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={10} lg={4}>
                  <Image
                    preview={false}
                    alt={aim.title}
                    src={aim.image}
                    style={{
                      borderRadius: "8px",
                      height: "auto",
                      maxHeight: "170px",
                      width: "100%", // Updated for full responsiveness
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </React.Fragment>
            ))}
          </Row>

          {/* Footer Section */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "30px",
              textAlign: "start",
              marginTop: "40px",
              borderTop: "1px solid #d9d9d9",
            }}
          >
            <Title style={{ fontSize: titleMedium,fontWeight:"bold" }}>
              Building Your Network and Have Fun While Doing It
            </Title>
            <Paragraph
              style={{
                fontSize: paragraphFontSize,
                color: "#595959",
                marginBottom: "20px",
              }}
            >
              At the forum, you'll have networking opportunities including a
              happy hour, luncheons, coffee breaks, and other special events.
              You'll be able to connect with peers, engage with industry
              leadership, build your network, and discuss the latest
              developments coming out of the forum.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#1F5223",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 16px",
                fontSize: "16px",
              }}
            >
              Register Now
            </Button>
          </div>
        </Content>
      </Layout>

      <Footer />
    </>
  );
};

export default AimsPage;
