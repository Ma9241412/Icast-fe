import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import IcastHeader from '../Layouts/IcastHeader';
import Footer from '../Layouts/IcastFooter';

const { Title, Text } = Typography;

const data = [
  {
    name: 'Vice Chancellor IST',
    title: 'Conference Patron-In-Chief',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Secretary SUPARCO',
    title: 'Conference Chair',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Registrar IST',
    title: 'Conference Co-Chair',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Head of Conference Secretariat Chairman NCGSA',
    title: 'Conference Secretary',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Registrar IST',
    title: 'Chair of Coordination Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dean IST',
    title: 'Chair of Technical Program Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Director Admin IST',
    title: 'Chair of Administration Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'CFO IST',
    title: 'Chair of Finance Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Director ORIC',
    title: 'Chair of Collaboration & Industrial Linkages Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Director IT',
    title: 'Chair of IT & Media Management Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Director Civil Works',
    title: 'Chair of Conference Facilities Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    name: 'Senior Faculty Member',
    title: 'Chair of Evaluation & Publication Committee',
    imgSrc: 'https://via.placeholder.com/150',
  },
];

const GovernancePage = () => {
  return (
  <>
  <IcastHeader/>
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        ICAST Governance
      </Title>
      <Text style={{ textAlign: 'center', display: 'block', marginBottom: '40px' }}>
        ICAST Forum and Exposition / About ICAST / ICAST Governance
      </Text>
      <Row gutter={[16, 16]}>
        {data.map((person, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
              cover={
                <img
                  alt={person.name}
                  src={person.imgSrc}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                />
              }
            >
              <Text strong>{person.title}</Text>
              <br />
              <Text type="secondary">{person.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <Footer/>
  </>
  );
};

export default GovernancePage;
