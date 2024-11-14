import React from 'react';
import { Card, Row, Col, Typography, Grid } from 'antd';
import {
  DesktopOutlined,
  RocketOutlined,
  FileTextOutlined,
  ProfileOutlined,
  SyncOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  CameraOutlined,
} from '@ant-design/icons';
import '../Styles/Icastforum.css';

const data = [
  {
    icon: <DesktopOutlined style={{ fontSize: '24px',color:"white" }} />,
    value: '18',
    label: 'Technical Session',
  },
  {
    icon: <ScheduleOutlined style={{ fontSize: '24px',color:"white" }} />,
    value: '03',
    label: 'Thematic Plenary Session',
  },
  {
    icon: <RocketOutlined style={{ fontSize: '24px',color:"white" }} />,
    value: '03',
    label: 'Astronauts Meet',
  },
  {
    icon: <FileTextOutlined style={{ fontSize: '24px' ,color:"white"}} />,
    value: '03',
    label: 'Symposium / Seminars',
  },
  {
    icon: <SyncOutlined style={{ fontSize: '24px' ,color:"white"}} />,
    value: '06',
    label: 'Panel Discussions / Forums',
  },
  {
    icon: <ProfileOutlined style={{ fontSize: '24px',color:"white" }} />,
    value: '05',
    label: 'Workshops & Trainings',
  },
  {
    icon: <SolutionOutlined style={{ fontSize: '24px' ,color:"white"}} />,
    value: '03',
    label: 'Product Exhibition & Technology Demonstration Seminars',
  },
  {
    icon: <CameraOutlined style={{ fontSize: '24px' ,color:"white"}} />,
    value: '02',
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
      <Title style={{ fontSize: titleFontSize, fontWeight: "bold" }}>ICAST By Numbers</Title>
      <Card bordered={false} className="icast-card">
        <Row gutter={[16, 16]} justify="center">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={index}>
              <Card bordered={false} size='small' className="icast-item-card">
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