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
      "To create an International platform where scientists, researchers, and industry experts can exchange insights and collaborate on innovative space technologies that address today's global challenges.",
  },
  {
    id: 2,
    title: "Advance Research and Innovation",
    description:
      "To support pioneering research in space science by providing participants with opportunities to present, share, and publish their work, fostering a culture of innovation with SUPARCO and IST at the forefront.",
  },
  {
    id: 3,
    title: "Promote Space Technology for Sustainable Development",
    description:
      "To emphasize the role of space technology in addressing sustainability goals, including climate monitoring, disaster management, and environmental protection, with SUPARCO leading these critical initiatives.",
  },
  {
    id: 4,
    title: "Engage and Inspire the Next Generation",
    description:
      "To encourage youth involvement in space science through specialized sessions and interactive forums, promoting STEM education and empowering the next generation of space leaders.",
  },
  {
    id: 5,
    title: "Facilitate Dialogue on Space Policy and Law",
    description:
      "To foster discussions on space law, governance, and sustainability among policymakers, researchers, and industry leaders, reinforcing SUPARCO's role in shaping international space policy.",
  },
  {
    id: 6,
    title: "Strengthen Skills through Hands-On Training",
    description:
      "To empower participants with hands-on experience in advanced space technologies through interactive workshops and training sessions, equipping them to apply these skills across scientific, commercial, and societal projects.",
  },
  {
    id: 7,
    title: "Highlight SUPARCO and IST's Leadership in Space Science",
    description:
      "To showcase SUPARCO and the Institute of Space Technology (IST) as leaders in space science and technology, featuring their groundbreaking research, collaborations, and contributions to global and national space missions.",
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
              color: "black",
              padding: "0px 20px",
              fontWeight:"bold"
            }}
          >
            ICAST / About ICAST / Aims & Objectives
          </Paragraph>

          <Row gutter={[0, 0]} style={{ margin: 0, padding: 0,marginBottom:"20px" }}>
  <Col xs={24} lg={18}>
    {aimsData.map((aim, index) => (
 <Card
 key={aim.id}
 bordered={false}
 style={{
   backgroundColor: "#EFF0F2",
   marginBottom: 0, // Remove margin between cards
   border: "none",
   padding: 0, // Remove padding inside the card
 }}
>
 <Title
   style={{
     textAlign: "start",
     fontSize: paragraphFontSize,
     fontWeight: "bold",
     color: "black",
     margin: 0, // Remove top and bottom margin for Title
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
     margin: 0, // Remove top and bottom margin for Paragraph
   }}
 >
   {aim.description}
 </Paragraph>
</Card>

    ))}
  </Col>

  <Col xs={24} lg={6} style={{ textAlign: "center" }}>
    <Image
      src={m1}
      alt="Drive Global Collaboration"
      preview={false}
      style={{
        borderRadius: "8px",
        width: "80%",
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
        width: "80%",
        marginBottom: "20px",
        objectFit: "contain",
      }}
    />
    <Image
      src={m3}
      alt="Promote Space Technology"
      preview={false}
      style={{
        borderRadius: "8px",
        width: "80%",
        marginBottom: "20px",
        objectFit: "cover",
      }}
    />
  </Col>
</Row>
       
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default AimsPage;
