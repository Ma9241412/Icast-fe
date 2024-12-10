import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Typography, Row, Col, Card, Space, Grid, Button } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import m1 from "../Assets/m8.jpg";
import m2 from "../Assets/m9.jpg";
import m3 from "../Assets/m10.jpg";
import { Link } from "react-router-dom";

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const themes = [
  {
    title: "Aeronautics & Astronautics",
    description: `This track explores the foundational and advanced principles of aerospace science,
addressing the design, development, and optimization of flight systems. From traditional
aerodynamics to cutting-edge propulsion technologies, it focuses on innovations that are
driving the future of aviation, space exploration, and sustainable aerospace solutions.`,
    content: [
      "Aero and Astro-dynamics",
      "Aerospace Structures",
      "Flight Mechanics",
      "Aircraft Vehicle Design & Operations",
      "Aerospace Design Organization",
      "Aeroacoustics",
      "Avionics Systems",
      "Guidance, Navigation & Control",
      "Propulsion and Power Systems",
      "Rocket physics and Rocket Propulsion",
      "Electric Aircrafts and Electric Engines",
      "Advanced Propulsion Concepts and Space Propulsion Technologies",
      "Hypersonic and Supersonic Aerodynamics and Technologies",
      "Thermo-physics and Thermodynamics",
      "Aviation Management",
      "Space Missions, Systems and Architecture",
      "Unmanned Aerial Vehicle Systems and Technologies",
      "Autonomous Aerospace Vehicles",
      "Lighter Than Air Aerospace Systems",
      "Space Exploration and Future Space Mission",
      "Orbital Mechanics and Spacecraft Trajectories",
      "Aerospace Materials and Advanced Manufacturing Techniques",
      "Sustainable Aerospace Technologies",
      "Urban Air Mobility (UAM) and Electric Vertical Take-Off and Landing (eVTOL)",
      "Advanced Air Traffic Management and Autonomous Systems",
      "Sustainable Propulsion Technologies and Hybrid Engines",
      "AI-Driven Design and Optimization in Aerospace",
      "Space-Based Solar Power Systems and Energy Solutions",
      "Additive Manufacturing and 3D Printing for Aerospace",
      "Hypersonic Propulsion and Materials",
      "Space Tourism and Commercial Human Spaceflight",
      "Lunar Rover and Robotic Exploration",
      "Advanced Propulsion Systems for Lunar Missions",
    ],
  },
  {
    title: "Satellite Technology",
    description: `Dedicated to the study and advancement of satellite systems, this track encompasses the
design, manufacture, and application of satellites. Topics range from nanosatellites to
complex satellite constellations, highlighting their critical role in communication, Earth
observation, and planetary exploration.`,
    content: [
      "Satellites Technology and Applications",
      "Electrical and Electronic Systems for Space Applications",
      "Peripheral Electronics, Data Handling and Signal Processing",
      "Communication Systems and Technologies",
      "Antennas, RF/Microwave Systems, and Propagation",
      "Space Missions, Systems and Architecture",
      "Systems Engineering and Subsystem Design",
      "Satellite Development and Manufacturing",
      "Assembly and Integration Technologies",
      "Space Operations and Ground Support",
      "Satellite Software and Autonomy",
      "Satellite Constellation Design and Management",
      "Emerging Concepts in Electrical and Electronics Engineering",
      "Cybersecurity for Space Systems",
      "Frequency Spectrum Allocation Management",
      "Satellite Technology Regulations",
      "Systems and Technologies for Cube-Sats",
      "Small Satellite Technologies and Nanosatellites",
      "Artificial Intelligence and Machine Learning in Satellite Systems",
      "Quantum Technologies for Satellite Applications",
      "Next-Generation Communication Satellites and Constellations",
      "Satellite-based Planetary Observation",
      "Quantum Key Distribution and Quantum Internet via Satellites",
      "Earth Observation and Environmental Sensing Constellations",
      "Blockchain Technology in Satellite Data Processing",
      "High-Throughput Satellites for Next-Gen Communication",
      "Satellite Swarming and Autonomous Coordination",
      "Sustainable Satellite Manufacturing and Disposal",
      "Resilient and Secure Satellite Networks",
      "Lunar Relay Satellites for Far-Side Communication",
    ],
  },
  {
    title: "Information & Communication Technologies",
    description: `This track focuses on the transformative role of ICT in space science, including AI, quantum
computing, and blockchain technologies. It highlights innovations in data analytics,
cybersecurity, and next-generation communication networks essential for modern space
operations and beyond.`,
    content: [
      "Computer Theory and Algorithms",
      "Networking Theory & Technologies",
      "Wireless Communications",
      "Knowledge Management & Decision Making",
      "Big Data and Cloud Computing",
      "Data Mining and Data Fusion",
      "Parallel and Distributed Computing",
      "Information & Data Security",
      "Cryptography",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer and Mission Vision",
      "Neural Networks",
      "Robotics and Automation",
      "Internet of Things (IoT)",
      "Smart and Safe Cities",
      "Virtual and Augmented Reality",
      "Systems & Software Engineering",
      "E-Commerce and E-Governance",
      "Space-based Communication Networks and Protocols",
      "Quantum Computing & Applications",
      "Quantum Technologies and Quantum Information Science",
      "5G and Beyond: Next-Generation Communication Technologies",
      "Edge Computing and Edge AI",
      "Blockchain and Distributed Ledger Technologies for Space Applications",
      "Human-Computer Interaction in Space Missions",
      "Cyber-Physical Systems in Space Technologies",
      "Computational Materials Science and Engineering",
      "Information and Communication Technologies for Sustainable Development",
      "Edge AI and Computing for Space Applications",
      "Digital Twins for Space Systems and Mission Planning",
      "Secure Satellite-Based Blockchain Networks",
      "Human-Computer Interaction in Space Robotics",
      "Quantum Communications and Networking",
      "Cybersecurity for Autonomous Space Operations",
      "AI-Powered Satellite Data Analytics",
      "Cybersecurity for Lunar Data Systems",
    ],
  },
  {
    title: "Positioning, Navigation & Timing",
    description: `This track delves into the science and technology behind navigation and timing systems,
such as GNSS and inertial navigation. It covers the integration of multi-sensor systems,
quantum technologies, and AI to enhance precision in terrestrial, aerial, and space
applications.`,
    content: [
      "Navigation, Estimation and Tracking Methods",
      "Ranging and Positioning Techniques",
      "Aircraft and Spacecraft Navigation Systems",
      "Interplanetary Missions and Navigation",
      "Navigation in Urban Environment",
      "Guidance, Navigation and Controls",
      "Control Theory, Analysis and Design",
      "Control System Design and Implementation",
      "Command and Control Systems for Space",
      "Sensors and Embedded System Design",
      "Autonomous Control and Unmanned Systems",
      "Global Navigation Satellite Systems (GNSS)",
      "Position Determination Using GNSS",
      "Software and Hardware GNSS Receivers",
      "GNSS Performance and Integrity Measures",
      "GNSS Augmentation Systems",
      "Applications of GNSS (Space Weather, Aviation, etc.)",
      "Interference and Spoofing Technologies and Countermeasures",
      "Inertial and Integrated Navigation Systems",
      "Multi-Sensor Fusion for Navigation",
      "Precision Agriculture",
      "Smart Transportation Systems",
      "Applications of Precise Timing",
      "Aerospace Robotics and Unmanned/Autonomous Systems",
      "Quantum Navigation and Quantum Timing",
      "High-Precision Timekeeping and Atomic Clocks",
      "Navigation Challenges in Lunar and Planetary Missions",
      "Secure and Resilient Navigation and Timing",
      "Autonomous Navigation for Spacecraft and Drones",
      "Augmented Reality and Navigation",
      "Quantum Sensing and Quantum Clocks for Navigation",
      "Resilient PNT (Position, Navigation, and Timing) Systems",
      "Space-Based Augmented Reality for Navigation",
      "Navigation Systems for Extreme Environments",
      "Artificial Intelligence in Real-Time Positioning and Tracking",
      "Cybersecurity in PNT Systems",
      "Multi-Constellation GNSS for Precision Agriculture",
    ],
  },
  {
    title: "Remote Sensing & Geographic Information Science",
    description: `Exploring the integration of remote sensing and GIS technologies, this track addresses
advancements in Earth observation, data processing, and geospatial analysis. It focuses on
their applications in urban planning, environmental monitoring, and disaster management,
enabling smarter and more sustainable decision-making.`,
    content: [
      "Remote Sensing Instruments, Sensors and Systems",
      "Image and Signal Processing for Remote Sensing",
      "Data Acquisition and Information Extraction",
      "Optical and Radar Remote Sensing",
      "Multispectral / Hyperspectral Remote Sensing",
      "Geometric Enhancement and Spatial Filtering and Masking Techniques",
      "Airborne Sensors and Systems for Remote Sensing",
      "Advancements in Remote Sensing",
      "Remote Sensing of Clouds, Atmosphere and Oceans",
      "Photogrammetry and Its Applications",
      "Photogrammetric Procedures, Instruments and Sensors",
      "Applications and Advancements in Photogrammetry",
      "Coordinate Systems in Photogrammetry",
      "Earth Observation, Atmosphere and Environment",
      "Cartography & Geo-visualization",
      "Topography, Geology & Geomorphology",
      "Spatial & Spatiotemporal Modeling and Surveying",
      "Spatial Data Structures & Algorithms",
      "Spatial Decision Support System",
      "Image Processing and Information Extraction",
      "GIS Innovations for Sustainable Development",
      "Web GIS, Open-Source GIS and Geospatial Web Services",
      "Climate Changes and Global Environment",
      "Urban Analytics & Smart Cities",
      "Big Data, IoT and Machine Learning in Geoinformatics",
      "Advances in Geoinformatics",
      "Geostatistics",
      "Applications of Geoinformatics",
      "LiDAR and 3D Point Cloud Processing",
      "Unmanned Aerial Systems (UAS) for Remote Sensing",
      "Earth Observation for Environmental Monitoring and Conservation",
      "Geospatial AI and Deep Learning in Remote Sensing",
      "Fusion of Remote Sensing and GIS Data for Decision-Making",
      "Remote Sensing Applications in Planetary Exploration",
      "AI-Driven Image Analysis and Data Interpretation",
      "Automated Change Detection and Analysis for Environmental Monitoring",
      "Remote Sensing for Smart Agriculture and Food Security",
      "5G-Enabled Remote Sensing and IoT Integration",
      "Digital Twin Technology in Earth Observation",
      "Real-Time Monitoring of Climate Change Indicators",
      "High-Resolution 3D Mapping with LiDAR",
      "Lunar Surface Imaging and Topography",
    ],
  },
  {
    title: "Environmental Science & Climate Change",
    description: `This track emphasizes the role of space science and technology in understanding and
mitigating climate change. It covers topics such as carbon monitoring, biodiversity
conservation, and sustainable energy, showcasing how satellite technologies can support
global environmental resilience and sustainability.`,
    content: [
      "Environmental Chemistry",
      "Biodiversity, Conservation & Management",
      "Biomass & Carbon Cycle",
      "Pollution Monitoring and Management",
      "Climate Change Monitoring and Mitigation",
      "Disaster Risk Reduction",
      "Waste Management",
      "Water Resource Dynamics",
      "Meteorology, Precipitation & Clouds",
      "Alternate Energy Methods",
      "Green Initiative and Products",
      "Consumption, Human Needs, and Climate Change",
      "Climate Change and Sustainable Development",
      "Remote Sensing for Environmental Monitoring",
      "Climate Adaptation Strategies and Resilience",
      "Urbanization and Climate Effects",
      "Environmental Justice and Social Equity",
      "Circular Economy and Sustainable Consumption",
      "Climate Finance and Green Investments",
      "Eco-friendly Transportation and Sustainable Mobility",
      "Climate Data Analysis and Climate Modeling",
      "Climate and Health Interactions",
      "Sustainable Agriculture and Food Security",
      "Climate Resilience in Coastal and Marine Environments",
      "Climate Change Adaptation and Resilience Planning",
      "Carbon Capture and Sequestration Monitoring",
      "Remote Sensing of Ecosystem Health and Biodiversity",
      "Ocean Acidification Monitoring and Marine Conservation",
      "Climate Modelling with Big Data and Machine Learning",
      "Role of Space Technology in Sustainable Urban Development",
      "Impact of Space Weather on Climate",
    ],
  },
  {
    title: "Astronomy and Astrophysics",
    description: `Dedicated to exploring the universe, this track covers the study of celestial phenomena,
planetary systems, and cosmology. From exoplanet research to gravitational wave
astronomy, it invites contributions that unravel the mysteries of the cosmos using advanced
observation and computational tools.`,
    content: [
      "Galaxies and Star Clusters",
      "Variable Stars & Exoplanets",
      "Black holes, White Dwarfs & Neutron Stars",
      "Planets, Ionospheres, and Magnetospheres",
      "Solar System",
      "Cosmology",
      "Celestial Mechanics",
      "Gravitational, Computational, Observational and Theoretical Astrophysics",
      "Solar and Stellar Physics",
      "Plasma Astrophysics",
      "Cosmic Rays and High Energy Astronomy",
      "Dark Matter and Dark Energy",
      "Interstellar Matter",
      "Artificial Intelligence and Data Mining in Astronomy",
      "Scientific Instruments to Astronomical Instruments: Tools & Techniques",
      "Astrostatistics",
      "Microgravity Science & Applications",
      "Astrogeology",
      "Origin and Evolution of Life in Universe",
      "Space Life and Habitability",
      "Life Beyond Earth",
      "New Technologies for Life Detection",
      "Future of Life",
      "Bioinformatics and Biomedical Engineering",
      "Gravitational Wave Astronomy",
      "Multi-Messenger Astronomy",
      "Exoplanet Atmospheres and Biosignatures",
      "Astrochemistry and Prebiotic Molecules",
      "Extreme Environments and Astrobiology",
      "Search for Extraterrestrial Intelligence",
      "Astroecology and Ecological Perspectives in Space Exploration",
      "Astrophysical Simulations and Numerical Modeling",
      "Time Domain Astronomy and Transient Events",
      "High-Energy Astrophysics and Gamma-Ray Astronomy",
      "Extragalactic Astronomy and Large-Scale Structure",
      "Stellar Populations and Galactic Archaeology",
      "Space Telescopes and Observatories",
      "Space Weather and Its Effects on Planetary Environments",
      "Astrobiology and Extreme Life Forms",
      "Planetary Habitability and Biosignatures",
      "Interstellar Travel and the Future of Human Space Exploration",
      "Exoplanet Detection and Biosignature Research",
      "Multi-Messenger Astronomy: Neutrinos, Gravitational Waves, and Photons",
      "Astrobiology and Habitability on Moons and Planets",
      "AI in Astronomical Data Analysis and Simulations",
      "High-Energy Astrophysics and Cosmic Ray Studies",
      "Exploration of Planetary Atmospheres and Climate",
      "Dark Matter Detection and Mapping",
    ],
  },
  {
    title: "Space Law, Management & Outreach",
    description: `This track addresses the ethical, legal, and managerial aspects of space exploration. It
focuses on international treaties, governance frameworks, and public engagement,
fostering discussions on ensuring sustainability, cooperation, and inclusivity in the peaceful
use of outer space.`,
    content: [
      "International Space Laws, Policies and Treaties",
      "National Space Laws and Regulatory Issues",
      "Space Policy Conflicts and Challenges",
      "International Cooperation for Space",
      "Space Security, Stability and Sustainability",
      "Peaceful Uses of Space",
      "Space for All: Space Education and Awareness",
      "Space Technology Planning, Management and Infusion",
      "Space Governance and Project Management",
      "Space Technology Applications and Economic Benefits",
      "STEAM (Science, Technology, Engineering, Arts & Mathematics) for Space",
      "Technology Transfer and Spinoffs",
      "Industry and Academia Collaborations",
      "Space Commercialization: Space Tourism and Recreation",
      "Enabling the Future: Space Capacity Building",
      "Space Culture: Innovative Approaches for Public Engagement in Space",
      "Space Ethics and Ethical Considerations",
      "Space Diplomacy",
      "Space Law and Artificial Intelligence",
      "Legal Aspects of Space Mining and Resource Utilization",
      "Space Sustainability and Debris Mitigation",
      "Space Outreach and Education for Developing Countries",
      "Space Innovation and Startups",
      "Legal Framework for Space Debris Mitigation and Removal",
      "Space Traffic Management and Coordination",
      "AI and Ethical Considerations in Space Operations",
      "Commercialization of Low Earth Orbit (LEO) and Beyond",
      "Policies for Lunar and Martian Resource Utilization",
      "Public-Private Partnerships in Space Exploration",
      "STEM Education Initiatives and Global Space Awareness",
    ],
  },
];

const ThemePage = () => {
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
          margin: "0 auto",
          background: "white",
          overflowX: "hidden",
        }}
      >
        <div style={{ backgroundColor: "#EEF0F2" }}>
          <Title
            style={{
              textAlign: "justify",
              marginBottom: "30px",
              padding: "20px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: titleFontSize,
            }}
          >
            ICAST Theme
          </Title>
        </div>
        <Paragraph
          style={{
            textAlign: "justify",
            fontSize: paragraphFontSize,
            color: "#055EDD",
            padding: "0px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          <Link to={"/"}>ICAST</Link> / Theme & Tracks
        </Paragraph>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#EFF0F2",
            padding: "10px 40px",
            marginTop: "20px",
          }}
        >
          <Title
            style={{
              textAlign: "justify",
              marginBottom: "30px",
              fontSize: titleMedium,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Theme
          </Title>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize,
              color: "black",
              margin: 0, 
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
            }}
          >
            The theme of ICAST 2025,{" "}
            <strong style={{fontWeight:"bold"}}>“Space for Sustainable Development”</strong> 
            ,underscores the transformative potential of space science and
            technology in addressing global challenges. As nations strive for
            sustainability in a rapidly changing world, the role of space-based
            solutions in climate monitoring, disaster management, urban
            planning, and resource optimization has never been more critical.
            Aligned with Pakistan&#39;s aspirations to leverage space technology
            for societal benefit, ICAST 2025 offers a platform to explore
            innovative applications that contribute to sustainable development
            goals. Through its comprehensive tracks, ranging from Aeronautics
            and Astronautics to Environmental Science &amp; Climate Change and
            Space Law, the conference highlights how space technologies can
            empower communities, industries, and policymakers to build a more
            resilient and equitable future. By fostering collaboration across
            disciplines and borders, ICAST 2025 aims to position Pakistan as a
            regional leader in space innovation, while inspiring global dialogue
            on harnessing the cosmos for the sustainable development of
            humanity.
          </Paragraph>
        </div>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#EFF0F2",
            padding: "10px 40px",
            marginTop: "20px",
          }}
        >
          <Title
            style={{
              textAlign: "justify",
              marginBottom: "30px",
              fontSize: titleMedium,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            2. Tracks
          </Title>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize,
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
            }}
          >
            The tracks of ICAST 2025 are designed to encompass the vast and
            ever-expanding universe of space science and technology, from
            foundational research to cutting-edge advancements that are
            redefining humanity&#39;s exploration of the cosmos. Each track
            serves as a gateway to delve into interdisciplinary innovation,
            fostering collaborations that bridge gaps between theory,
            application, and policy.
          </Paragraph>
        </div>
        <Row gutter={[16, 16]} align="top">
          <Col xs={24} md={16}>
            <Card
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: "#EEF0F2",
                marginBottom: "20px",
              }}
            >
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    style={{
                      fontSize: "16px",
                      color: isActive ? "#1890ff" : "#000",
                      textAlign: "justify",
              fontFamily: "Inter, sans-serif",

                    }}
                    rotate={isActive ? 90 : 0}
                  />
                )}
                expandIconPosition="end"
                style={{ background: "#EFF0F2" }}
              >
                {themes.map((theme, index) => (
                  <Panel
                    key={index}
                    header={
                      <div
                        style={{
                          backgroundColor: "#fff",
                          color: "black",
                          padding: "10px",
                          borderRadius: "5px",
                          fontSize: titleMedium,
                          fontWeight: "700",
              fontFamily: "Inter, sans-serif",

                        }}
                      >
                        {theme.title}
                      </div>
                    }
                    style={{
                      border: "1px solid #f0f0f0",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* Render the description */}
                    <Paragraph
                      style={{
                        color: "black",
                        fontSize: paragraphFontSize,
                        fontWeight: "700",
                        marginBottom: "20px",
                        textAlign:"left",
              fontFamily: "Inter, sans-serif",

                      }}
                    >
                      {theme.description}
                    </Paragraph>

                    {/* Render the tracks */}
                    {theme.content.length > 0 ? (
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                          <ul style={{ padding: "0 16px" }}>
                            {theme.content
                              .slice(0, Math.ceil(theme.content.length / 2))
                              .map((item, idx) => (
                                <li
                                  key={idx}
                                  style={{
                                    color: "black",
                                    textAlign: "justify",
                                    fontSize: paragraphFontSize,
                                    fontFamily:"500",
              fontFamily: "Inter, sans-serif",

                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </Col>
                        <Col xs={24} sm={12}>
                          <ul style={{ padding: "0 16px" }}>
                            {theme.content
                              .slice(Math.ceil(theme.content.length / 2))
                              .map((item, idx) => (
                                <li
                                  key={idx}
                                  style={{
                                    color: "black",
                                    textAlign: "justify",
                                    fontSize: paragraphFontSize,
                                    fontWeight: "500",
              fontFamily: "Inter, sans-serif",

                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </Col>
                      </Row>
                    ) : (
                      <p style={{ color: "black" }}>
                        No subtopics available for this theme.
                      </p>
                    )}
                  </Panel>
                ))}
              </Collapse>
            </Card>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
                marginTop: "20px",
              }}
            >
              <Title
                style={{
                  textAlign: "justify",
                  marginBottom: "30px",
                  fontSize: titleMedium,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                3. Call for Contributions
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  margin: 0, // Remove top and bottom margin for Title
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  lineHeight:"2rem"
                }}
              >
                ICAST 2025 welcomes contributions that align with the tracks and
                their subtopics. Whether you are an academic researcher,
                industry expert, policymaker, or student, this is your
                opportunity to showcase your work, inspire innovation, and shape
                the future of space science and technology.
                <br/>
                <br/>
              <ul style={{
              fontSize: paragraphFontSize,
              color: "black",
              lineHeight: "1.8",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify",

              
            }}>
                <li><strong style={{fontWeight:"bold"}}>Call for Papers:</strong> Share your technical research for inclusion in the conference&#39;s
                technical sessions and proceedings.</li>
                <div style={{padding:"20px"}}>
               <Link to={"/screen-inprogress"}>
               <Button size="middle" type="default">Register Now</Button>
               </Link>
                </div>

                <li>
                <strong style={{fontWeight:"bold"}}>Propose a Session:</strong> Organize a panel discussion, workshop, or symposium to lead
                conversations on emerging trends.
                </li>
                <div style={{padding:"20px"}}>
                <Link to={"/screen-inprogress"}>
                <Button size="middle" type="default">Proposal Form</Button>
               </Link>

                </div>
              </ul>
              </Paragraph>
            
            </div>
          </Col>

          {/* Image Column */}
          <Col xs={24} md={6} lg={8}>
            <Space
              direction="vertical"
              style={{ width: "100%", textAlign: "justify" ,padding:"0px 20px"}}
            >
              <img
                src={m1}
                alt="Themes"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  marginBottom: "16px",
                }}
              />
              <img
                src={m2}
                alt="Themes"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  marginBottom: "16px",
                }}
              />
              <img
                src={m3}
                alt="Themes"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  marginBottom: "16px",
                }}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default ThemePage;
