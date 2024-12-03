import React from "react";
import { Button, Card, Col, Divider, Grid, Row, Space, Typography } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const CallForPapers = () => {
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
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Title
          style={{
            textAlign: "justify",
            backgroundColor: "#EFF0F2",
            padding: "20px 40px",
            fontSize: titleFontSize,
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          Call for Papers
        </Title>
        <Paragraph
          style={{
            textAlign: "justify",
            padding: "0px 40px",
            fontSize: paragraphFontSize,
            color: "black",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          ICAST /Call For Content / Call For Papers
        </Paragraph>

        <div style={{ backgroundColor: "#EFF0F2", padding: "20px" }}>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize,
              color: "black",
              padding: "0px 15px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              lineHeight: "2rem",
            }}
          >
            The International Conference on Applications of Space Science and
            Technology (ICAST 2025) invites researchers, academicians, and
            professionals from around the world to submit their original
            research for presentation at Pakistan’s premier space conference.
            Under the theme{" "}
            <strong>“Space for Sustainable Development,”</strong> ICAST 2025
            provides a global platform to showcase cutting-edge ideas,
            transformative research, and innovative solutions that address
            critical challenges in space science and technology.
          </Paragraph>

          <div style={{ textAlign: "justify", padding: "10px 15px" }}>
            <Space direction="horizontal">
            <Link to={"/screen-inprogress"}>
            <Button
                type="default"
                size="large"
                target="_blank"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Manage Submissions
              </Button>
            </Link>
              <Button
                type="primary"
                size="large"
                href="/author-resources"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Author Resources
              </Button>
            </Space>
          </div>
        </div>

        <div style={{ textAlign: "left", padding: "10px 35px" }}>
          <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Conference Tracks
          </Title>
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            We welcome high-quality submissions across the following dynamic
            tracks. Detailed subtopics can be found below:
          </Paragraph>
          <div style={{ textAlign: "start", marginBottom: "30px" }}>
            <Space>
              <Button
                size="large"
                type="primary"
                href=""
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Tracks and Subtopics Page
              </Button>
            </Space>
          </div>
        </div>

        <Row
          style={{ padding: "20px 35px", backgroundColor: "#EFF0F2" }}
          gutter={[24, 24]}
        >
          {conferenceTracks.map((track, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                style={{
                  height: "100%", // Remove fixed height for flexibility
                  width: "100%",
                }}
             
                hoverable
              >
                <Title style={{
                      fontSize: paragraphFontSize, // Slightly smaller font size
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      color: "#1a73e8",
                      lineHeight: "1.2", // Reduce line height for closer spacing
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      textAlign:"left"
                    }}>{track.title}</Title>
                <Paragraph
                  style={{
                    textAlign: "left",
                    fontSize: paragraphFontSize, // Reduce font size for compactness
                    color: "black",
                    margin: "0", // Remove margin
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "400", // Slightly lighter font weight
                  }}
                >
                  {track.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        <Title
          style={{
            marginTop: "40px",
            fontSize: titleMedium,
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            padding: "10px 35px",
          }}
        >
          Why Submit?
        </Title>
        <div
          style={{
            textAlign: "left",
            padding: "10px 35px",
            backgroundColor: "#EFF0F2",
          }}
        >
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
            }}
          >
            By submitting your research to ICAST 2025, you will:
          </Paragraph>
          <ul
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              paddingLeft: "20px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
            }}
          >
            <li>
              Gain recognition by presenting your work to a global audience of
              experts and stakeholders.
            </li>
            <br />
            <li>
              Contribute to advancing the field of space science and technology.
            </li>
            <br />

            <li>
              Have the opportunity for your paper to be published in reputable
              conference proceedings and indexed journals.
            </li>
            <br />

            <li>
              Network with leading scientists, policymakers, and industry
              professionals shaping the future of space innovation.
            </li>
          </ul>
          <div>
            <Space>
           <Link to={"/screen-inprogress"}>
           <Button
                size="large"
                type="primary"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Register Now
              </Button>
           </Link>
            </Space>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const conferenceTracks = [
  {
    title: "Aeronautics & Astronautics",
    description: (
      <>
        Explore the cutting-edge advancements shaping the future of aerospace
        systems and technologies. This track covers a wide array of topics,
        including advanced propulsion systems, hypersonic and supersonic
        aerodynamics, and sustainable aerospace innovations. With a focus on
        space mission design, autonomous aerospace vehicles, and urban air
        mobility, it invites contributions that redefine flight mechanics,
        orbital trajectories, and sustainable aviation. Researchers are
        encouraged to address challenges in materials science, AI-driven design,
        and the next generation of space exploration technologies
      </>
    ),
  },
  {
    title: "Satellite Technology",
    description: (
      <>
        Delve into the innovations transforming satellite systems, from
        nanosatellites and CubeSats to next-generation communication
        constellations. This track highlights advancements in satellite
        autonomy, quantum communication technologies, and resilient satellite
        networks. Contributions are invited on topics such as sustainable
        satellite manufacturing, AI and machine learning in satellite
        operations, and emerging applications like lunar relay systems and
        blockchain-based data processing.
      </>
    ),
  },
  {
    title: "Positioning, Navigation & Timing",
    description: (
      <>
        This track invites groundbreaking research on the latest PNT systems,
        including advanced guidance and navigation systems, multi-sensor fusion,
        and resilient timing technologies. Topics include navigation for lunar
        and planetary missions, autonomous navigation for drones and spacecraft,
        and quantum navigation systems. Researchers can also explore AI- driven
        real-time positioning and cybersecurity measures for navigation systems
        in extreme environments.
      </>
    ),
  },
  {
    title: "Remote Sensing & Geographic Information Science",
    description: (
      <>
        Focus on the integration of remote sensing and GIS technologies to
        address critical societal challenges. Topics include advancements in
        Earth observation, 3D mapping, and geospatial AI. Contributions are
        welcomed on applications in smart agriculture, urban analytics, and
        climate monitoring, alongside innovative methods like LiDAR and IoT-
        enabled remote sensing for sustainable development.
      </>
    ),
  },
  {
    title: "Environmental Science & Climate Change",
    description: (
      <>
        This track emphasizes space-based approaches to monitor, mitigate, and
        adapt to climate change. Researchers are invited to contribute to topics
        such as biodiversity conservation, carbon cycle monitoring, and disaster
        risk reduction. Additional focus areas include the role of satellite
        technology in climate modeling, sustainable agriculture, and the
        development of eco-friendly energy solutions for a sustainable future.
      </>
    ),
  },
  {
    title: "Information & Communication Technologies",
    description: (
      <>
        Contribute to the evolving role of ICT in space science, from AI-powered
        data analytics to quantum computing. Topics include cybersecurity for
        autonomous space operations, next- generation communication networks,
        and blockchain applications in space technologies. Submissions are
        encouraged on space-based IoT systems, edge computing, and virtual
        reality applications for mission planning and human-computer
        interactions in space exploration.
      </>
    ),
  },
  {
    title: "Astronomy & Astrophysics",
    description: (
      <>
        Explore the universe’s mysteries through contributions on exoplanet
        exploration, dark matter detection, and gravitational wave astronomy.
        This track focuses on multi-messenger astronomy, AI-driven astronomical
        data analysis, and the future of interstellar travel. Researchers are
        also invited to delve into planetary habitability, astroecology, and the
        impact of space weather on planetary environments.
      </>
    ),
  },
  {
    title: "Space Law, Management & Outreach",
    description: (
      <>
        This track focuses on the governance and ethical considerations of space
        exploration. Contributions are invited on topics such as international
        space treaties, commercialization of space, and debris mitigation.
        Researchers can also address the role of public engagement, STEM
        education, and policies shaping sustainable and inclusive space
        exploration.
      </>
    ),
  },
];

export default CallForPapers;
