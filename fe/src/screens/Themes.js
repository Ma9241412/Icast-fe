import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Typography, Row, Col, Card, Grid } from 'antd';
import IcastHeader from '../Layouts/IcastHeader';
import Footer from '../Layouts/IcastFooter';

const { Panel } = Collapse;
const { Title , Paragraph } = Typography;
const { useBreakpoint } = Grid;

const themes = [
  {
    title: 'Aeronautics & Astronautics',
    content: [
      'Aero and Astro-dynamics',
      'Aerospace Structures',
      'Flight Mechanics',
      'Aircraft Vehicle Design & Operations',
      'Aerospace Design Organization',
      'Avionics Systems',
      'Guidance, Navigation & Control',
      'Propulsion and Power Systems',
      'Rocket physics and Rocket Propulsion',
      'Electric Aircrafts and Electric Engines',
      'Advanced Propulsion Concepts and Space Propulsion Technologies',
      'Hypersonic and Supersonic Aerodynamics and Technologies',
      'Thermo-physics and Thermodynamics',
      'Aviation Management',
    ],
  },
  { title: 'Satellite Technology', content: [] },
  { title: 'Positioning, Navigation & Timing', content: [] },
  { title: 'Environmental Science & Climate Change', content: [] },
  { title: 'Information & Communication Technologies', content: [] },
  { title: 'Astronomy & Astrophysics', content: [] },
  { title: 'Space Law, Management & Outreach', content: [] },
];

const ThemePage = () => {
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
      : "19px";
  return (
    <>
      <IcastHeader />
      <div style={{ padding: '20px', background: '#f9f9f9' }}>
      <div style={{ backgroundColor: "#EEF0F2" }}>
            <Title
              style={{
                textAlign: "start",
                marginBottom: "30px",
                backgroundColor: "#EFF0F2",
                padding: "20px 40px",
                fontWeight: "bold",
                fontSize: titleFontSize,
              }}
            >
             ICAST Themes
            </Title>
          </div>
        <div style={{ textAlign: 'start', marginBottom: '20px' }}>
        <Paragraph
              style={{
                textAlign: "start",
                marginBottom: "30px",
                fontSize: paragraphFontSize,
                color: "#595959",
                padding: "0px 40px",
                fontWeight: "bold",
              }}
            >
              ICAST Forum and Exposition / ICAST Themes
            </Paragraph>
        </div>

        <Card
          style={{
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            background: '#FFFFFF',
          }}
        >
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                style={{
                  fontSize: '16px',
                  color: isActive ? '#1890ff' : '#000', // Change color based on active state
                  textAlign:"center"
                }}
                rotate={isActive ? 90 : 0}
              />
            )}
            expandIconPosition="end"
            style={{ background: '#EFF0F2' }}
          >
            {themes.map((theme, index) => (
              <Panel
                key={index}
                header={<div style={{ backgroundColor: '#fff', color: '#000', padding: '10px', borderRadius: '5px' }}>{theme.title}</div>}
                style={{
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff', // Panel background
                }}
              >
                {theme.content.length > 0 ? (
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <ul>
                        {theme.content
                          .slice(0, Math.ceil(theme.content.length / 2))
                          .map((item, idx) => (
                            <li key={idx} style={{ color: 'black' }}>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </Col>
                    <Col span={12}>
                      <ul>
                        {theme.content
                          .slice(Math.ceil(theme.content.length / 2))
                          .map((item, idx) => (
                            <li key={idx} style={{ color: 'black' }}>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </Col>
                  </Row>
                ) : (
                  <p style={{ color: 'black' }}>No subtopics available for this theme.</p>
                )}
              </Panel>
            ))}
          </Collapse>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ThemePage;
