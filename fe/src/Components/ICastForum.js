import React from 'react';
import { Card, Row, Col, Typography, Grid } from 'antd';
import { DesktopOutlined, EnvironmentOutlined, FileTextOutlined, DatabaseOutlined, SyncOutlined, TeamOutlined } from '@ant-design/icons';
import '../Styles/Icastforum.css';

const data = [
  {
    icon: <DesktopOutlined style={{ fontSize: '24px' }} />,
    value: '18',
    label: 'Technical Session',
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: '24px' }} />,
    value: '03',
    label: 'Thematic Plenary Session',
  },
  {
    icon: <FileTextOutlined style={{ fontSize: '24px' }} />,
    value: '03',
    label: 'Astronauts Meet',
  },
  {
    icon: <DatabaseOutlined style={{ fontSize: '24px' }} />,
    value: '03',
    label: 'Symposium / Seminars',
  },
  {
    icon: <SyncOutlined style={{ fontSize: '24px' }} />,
    value: '06',
    label: 'Panel Discussions / Forums',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '24px' }} />,
    value: '11231',
    label: 'Workshops & Trainings',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '24px' }} />,
    value: '03',
    label: 'Product Exhibition & Technology Demonstration Seminars',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '24px' }} />,
    value: '11231',
    label: 'Cultural Visit & SightSeeing',
  },
];

const ICastForum = () => {
  const { Title, Text } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl ? "45px" : screens.lg ? "40px" : screens.md ? "35px" : "28px";

  return (
    <div className="icast-container">
      <Title style={{ fontSize: titleFontSize, fontWeight: "bold" }}>ICAST Forum Numbers</Title>
      <Card className="icast-card">
        <Row gutter={[16, 16]} justify="center">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} key={index}>
              <Card className="icast-item-card">
                <div className="icast-item">
                  {item.icon}
                  <Title level={3} className="icast-value">{item.value}</Title>
                  <Text className="icast-label">{item.label}</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default ICastForum;
