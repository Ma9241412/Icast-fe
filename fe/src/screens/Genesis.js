import React from "react";
import { Layout, Typography, Row, Col, Card, Image, Button, Grid } from "antd";
import m1 from "../Assets/suparco2.jpg";
import m2 from "../Assets/ist2.JPG";
import m3 from "../Assets/m3.jpg";
import m4 from "../Assets/e3.jpg";
import m5 from "../Assets/e4.jpg";

import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import '../Styles/HomeStyles.css'
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const aimsData = [
  {
    id: 1,
    title: "1. About SUPARCO & IST",
    description: (
      <>
        <br />
        <strong
  className="strong-text"
>
  Pakistan Space and Upper Atmosphere Research Commission (SUPARCO):
</strong>

        <br />
        <strong style={{ color: "black", fontWeight: "bold" }}>
          The Pakistan Space and Upper Atmosphere Research Commission (SUPARCO)
        </strong>{" "}
        has been the driving force behind Pakistan’s space ambitions since its
        inception in 1961. As the national space agency, SUPARCO’s mission is to
        employ space technology for peaceful purposes, ensuring its application
        benefits Pakistan’s socio-economic development and national security.
        With a vision to position Pakistan as a key contributor in the global
        space community, SUPARCO has played a pioneering role in satellite
        development, space exploration, and technology applications for societal
        advancement.
        <br />
        Contributions include the development and launch of satellites like
        Badr, PakSat, and PRSS, supporting communication, Earth observation,
        disaster management, and climate monitoring. SUPARCO fosters
        international collaborations with organizations such as APSCO and ISNET,
        enhancing Pakistan’s technical expertise and positioning the country as
        an emerging player in the global space arena.
        <br />
        SUPARCO’s{" "}
        <strong style={{ color: "black", fontWeight: "bold" }}>
          International Conference on Space (ICS)
        </strong>
        , initiated in 2012, brought together policymakers, researchers, and
        industry leaders to discuss space technology applications and
        governance. Over three successful editions, ICS became a platform for
        shaping the discourse on space policy and fostering international
        partnerships. This legacy now thrives under ICAST, amplifying SUPARCO’s
        vision of advancing space science for societal benefit.
        <br />
        <br />
        <strong className="strong-text">
           Institute of Space Technology (IST):
        </strong>
        <br />
        <strong style={{ color: "black", fontWeight: "bold" }}>
          The Institute of Space Technology (IST)
        </strong>{" "}
        is a leading institution in Pakistan, renowned for its academic and
        research excellence in aerospace, space sciences, and technology. Since
        its establishment in 2002, IST has emerged as a hub of innovation,
        fostering a culture of discovery, research, and technological
        advancement. With a vision to lead Pakistan into a new era of scientific
        exploration and self-reliance, IST is dedicated to inspiring the next
        generation of space scientists and engineers while contributing to the
        nation’s space capabilities.
        <br />
        IST plays a pivotal role in shaping Pakistan’s space sector by offering
        specialized academic programs in Aerospace Engineering, Avionics, and
        Space Science. It actively engages in research on satellite technology,
        Global Navigation Satellite Systems (GNSS), and climate monitoring.
        IST’s partnerships with industry and government institutions further
        bridge the gap between theoretical knowledge and practical applications,
        promoting indigenous technological solutions for national and global
        challenges.
        <br />
        The legacy of IST’s{" "}
        <strong style={{ color: "black", fontWeight: "bold" }}>
          International Conference on Aerospace Science and Engineering (ICASE)
        </strong>
        , launched in 2009, is a testament to its leadership in aerospace
        research. Over its seven editions, ICASE provided a global platform for
        cutting-edge research, featuring technical presentations, collaborative
        opportunities, and publications in prestigious outlets like IEEE. Today,
        this legacy continues under
      </>
    ),
  },
  {
    id: 2,
    title: "2. A Convergence of Excellence",
    description: (
      <>
        <br />
        ICAST builds upon the rich histories of ICASE and ICS to bring together
        the brightest minds in academia, industry, and government. This merger
        was formalized to create a unified platform for:
        <br />
        (a). Showcasing groundbreaking research in Space Science, Technology,
        and their Applications.
        <br />
        (b). Discussing space policies and governance.
        <br />
        (c). Exploring the role of space science in solving global challenges
        like climate change, disaster management, and resource sustainability.
      </>
    ),
  },

  {
    id: 3,
    title: "3. ICAST Aims & Objectives",
    description: (
      <>
          <br/>

        <ul style={{ color: "black", fontSize: "16px", lineHeight: "1.8" }}>
          <li>
            <strong style={{ fontWeight: "bold" }}>Drive Global Collaboration:</strong> 
            Create an international platform where scientists, researchers, and industry experts can exchange insights and collaborate on innovative space technologies that address today’s global challenges.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Advance Research and Innovation:</strong> 
            Support pioneering research in space science by providing participants with opportunities to present, share, and publish their work, fostering a culture of innovation with SUPARCO and IST at the forefront.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Promote Space Technology for Sustainable Development:</strong> 
            Emphasize the role of space technology in addressing sustainability goals, including climate monitoring, disaster management, and environmental protection, with SUPARCO leading these critical initiatives.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Engage and Inspire the Next Generation:</strong> 
            Encourage youth involvement in space science through specialized sessions and interactive forums, promoting STEM education and empowering the next generation of space leaders.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Facilitate Dialogue on Space Policy and Law:</strong> 
            Foster discussions on space law, governance, and sustainability among policymakers, researchers, and industry leaders, reinforcing SUPARCO’s role in shaping international space policy.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Strengthen Skills through Hands-On Training:</strong> 
            Empower participants with hands-on experience in advanced space technologies through interactive workshops and training sessions, equipping them to apply these skills across scientific, commercial, and societal projects.
          </li>
          <li>
            <strong style={{ fontWeight: "bold" }}>Highlight SUPARCO and IST’s Leadership in Space Science:</strong> 
            Showcase SUPARCO and the Institute of Space Technology (IST) as leaders in space science and technology, featuring their groundbreaking research, collaborations, and contributions to global and national space missions.
          </li>
        </ul>
      </>
    ),
  }
  
];

const Genisis = () => {
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
  const paragraphFontSize = screens.xl
    ? "16px"
    : screens.lg
    ? "16px"
    : screens.md
    ? "15px"
    : "15px";

  return (
    <>
      <IcastHeader />
      <Layout style={{ overflowX: "hidden", backgroundColor: "white" }}>
        <Content style={{ margin: "0 auto" }}>
          <Title
            style={{
              textAlign: "start",
              marginBottom: "30px",
              backgroundColor: "#EFF0F2",
              padding: "20px",
              fontSize: titleFontSize,
              fontFamily: "Inter, sans-serif",
              fontWeight:"700",
            }}
          >
            Genesis of ICAST
          </Title>
          <Paragraph
            style={{
              textAlign: "start",
              marginBottom: "30px",
              fontSize: paragraphFontSize,
              color: "black",
              padding: "0px 20px",
              fontFamily: "Inter, sans-serif",
              fontWeight:"600",
            }}
          >
            ICAST / About ICAST / Genesis of ICAST
          </Paragraph>

                  <Row gutter={[0, 0]} style={{ margin: 0, padding: 0 ,marginBottom:"30px"}}>
            <Col xs={24} lg={19}>
              <Paragraph
                style={{
                  backgroundColor: "#EFF0F2",
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  margin: 0, // Remove top and bottom margin for Title
                  padding: "10px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight:"500",
                  lineHeight:"2rem"
                }}
              >
                The International Conference on Applications of Space Science
                and Technology (ICAST) is Pakistan’s premier platform for
                advancing the frontiers of space science and technology. This
                biennial event represents a historic merger of two esteemed
                conferences—the International Conference on Aerospace Science
                and Engineering (ICASE) by the Institute of Space Technology
                (IST) and the International Conference on Space (ICS) by the
                Pakistan Space and Upper Atmosphere Research Commission
                (SUPARCO). Together, these two legacies form a global forum
                fostering collaboration, innovation, and knowledge exchange.
              </Paragraph>

              {aimsData.map((aim, index) => (
                <div
                  key={aim.id}
                  bordered={false}
                  style={{
                    backgroundColor: "#EFF0F2",
                    marginBottom: 0, // Remove margin between cards
                    border: "none",
                    padding: "10px 20px", // Remove padding inside the card
                  }}
                >
                  <Title
                    style={{
                      textAlign: "start",
                      fontSize: titleMedium,
                      fontFamily: "Inter, sans-serif",
                fontWeight:"700",
                      color: "black",
                      margin: 0, // Remove top and bottom margin for Title
                    }}
                  >
                    {aim.title}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: paragraphFontSize,
                      lineHeight: "1.8",
                      color: "black",
                      textAlign: "start", fontFamily: "Inter, sans-serif",
                      fontWeight:"500",
                      margin: 0, 
                  lineHeight:"2rem"

                    }}
                  >
                    {aim.description}
                  </Paragraph>
                </div>
              ))}
             
            </Col>

            <Col xs={24} lg={5} style={{ textAlign: "center" }}>
              <Image
                src={m1}
                alt="Drive Global Collaboration"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                  height:"50%"
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
              <Image
                src={m4}
                alt="Promote Space Technology"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
              <Image
                src={m5}
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

export default Genisis;
