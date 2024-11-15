import React from "react";
import { Layout, Typography, Row, Col, Card, Image, Button, Grid } from "antd";
import m1 from "../Assets/m1.jpg";
import m2 from "../Assets/m2.jpg";
import m3 from "../Assets/m3.jpg";
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
  },
  {
    id: 2,
    title: "Advance Research and Innovation",
    description:
      "Support pioneering research in space science by providing participants with opportunities to present, share, and publish their work, fostering a culture of innovation with SUPARCO and IST at the forefront.",
  },
  {
    id: 3,
    title: "Promote Space Technology for Sustainable Development",
    description:
      "Emphasize the role of space technology in addressing sustainability goals, including climate monitoring, disaster management, and environmental protection, with SUPARCO leading these critical initiatives.",
  },
  {
    id: 4,
    title: "Engage and Inspire the Next Generation",
    description:
      "Encourage youth involvement in space science through specialized sessions and interactive forums, promoting STEM education and empowering the next generation of space leaders.",
  },
  {
    id: 5,
    title: "Facilitate Dialogue on Space Policy and Law",
    description:
      "Foster discussions on space law, governance, and sustainability among policymakers, researchers, and industry leaders, reinforcing SUPARCO's role in shaping international space policy.",
  },
  {
    id: 6,
    title: "Strengthen Skills through Hands-On Training",
    description:
      "Empower participants with hands-on experience in advanced space technologies through interactive workshops and training sessions, equipping them to apply these skills across scientific, commercial, and societal projects.",
  },
  {
    id: 7,
    title: "Highlight SUPARCO and IST's Leadership in Space Science",
    description:
      "Showcase SUPARCO and the Institute of Space Technology (IST) as leaders in space science and technology, featuring their groundbreaking research, collaborations, and contributions to global and national space missions.",
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
    : "22px";
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
        <Content style={{ margin: "0 auto" }}>
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
              fontWeight:"bold"
            }}
          >
            ICAST / About ICAST / Aims & Objectives
          </Paragraph>

          <Row gutter={[16, 24]}>
            <Col xs={24} lg={16}>
              {aimsData.map((aim, index) => (
                <Card
                  key={aim.id}
                  bordered={false}
                  style={{ backgroundColor: "#EFF0F2" }}
                >
                  <Title
                    level={4}
                    style={{
                      textAlign: "start",
                      fontSize: paragraphFontSize,
                      fontWeight: "bold",
                      color:"black"
                    }}
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
              ))}
            </Col>

            {/* Right Column: Three images */}
            <Col xs={24} lg={8} style={{ textAlign: "center" }}>
              <Image
                src={m1}
                alt="Drive Global Collaboration"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
              <Image
                src={m2}
                alt="Advance Research and Innovation"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
              <Image
                src={m3}
                alt="Promote Space Technology"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>

          {/* Footer Section */}
        
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default AimsPage;
