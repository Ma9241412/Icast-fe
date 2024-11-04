import React from 'react';
import { Card, Row, Col, Typography, Grid } from 'antd';
import { DesktopOutlined, EnvironmentOutlined, FileTextOutlined, DatabaseOutlined, SyncOutlined, TeamOutlined } from '@ant-design/icons';
import '../Styles/Icastforum.css';




const data = [
  {
    icon: <DesktopOutlined style={{ fontSize: '24px' }} />,
    value: '435',
    label: 'Research Impact Factor',
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: '24px' }} />,
    value: '286',
    label: 'Geographical Models and Maps',
  },
  {
    icon: <FileTextOutlined style={{ fontSize: '24px' }} />,
    value: '175',
    label: 'Research Publications',
  },
  {
    icon: <DatabaseOutlined style={{ fontSize: '24px' }} />,
    value: '28',
    label: 'Software and Hardware Solution',
  },
  {
    icon: <SyncOutlined style={{ fontSize: '24px' }} />,
    value: '20',
    label: 'Industry Academia Linkages',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '24px' }} />,
    value: '11231',
    label: 'Research Impact Factor',
  },
];

const ICastForum = () => {
  const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const screens = useBreakpoint();
const titleFontSize = screens.xl ? "45px" : screens.lg ? "40px" : screens.md ? "35px" : "28px";
  return (
    <div className="icast-container">
      <Title style={{fontSize:titleFontSize,fontWeight:"bold",textDecoration:"underline"}}>ICAST Forum Numbers</Title>
      <Card className="icast-card">
        <Row gutter={[16, 16]} justify="space-between">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={4} key={index} className="icast-col">
              <div className="icast-item">
                {item.icon}
                <Title level={3} className="icast-value">{item.value}</Title>
                <Text className="icast-label">{item.label}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default ICastForum;
