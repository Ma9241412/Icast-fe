import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import '../Styles/Linkages.css'; 


const { Title, Paragraph } = Typography;

const ManuscriptSubmission = () => {
  return (
    <div className="manuscript-submission-container">
      <Row gutter={[18, 14]} justify="center" align="middle">
        <Col xs={24} md={12}>
          <Title style={{ fontSize: '48px', fontWeight: 'bold', }} className="title">Manuscript Submissions</Title>
          <Divider className="ncgsa-divider" />
          <Paragraph className="description">
            “Researchers, Scientists, Engineers, Academicians, Private and Public Industry Professionals, 
            Entrepreneurs and Students are invited to submit the <strong>Manuscripts (Full Papers)</strong> of latest, 
            unpublished research findings relevant to ICASE 2021 themes and topics by <strong>August 31, 2021</strong>. 
            Accepted papers will be submitted for inclusion into <strong>IEEE Xplore</strong> subject to meeting IEEE Xplore’s 
            scope and quality requirements.”
          </Paragraph>
          <Button className="submit-button" style={{ width: 'fit-content', padding: '0 20px', background: 'linear-gradient(to right, #1e90ff, #00bfff)', color: '#fff' }}>
            SUBMIT HERE
          </Button>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={require('../Assets/icase-banner.jpeg')} // Adjust the path to the image
            alt="ICASE Conference Poster"
            className="poster-image"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ManuscriptSubmission;
