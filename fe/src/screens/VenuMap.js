import React from 'react';
import { Card, Row, Col, Grid, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import IcastHeader from '../Layouts/IcastHeader';
import Footer from '../Layouts/IcastFooter';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
};

const center = {
  lat: 33.519404573362294, // Latitude for IST
  lng: 73.17496607549269, // Longitude for IST
};
const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

const VenuMap = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
  ? "48px"
  : screens.lg
  ? "48px"
  : screens.md
  ? "46px"
  : "36px";
  const paragraphFontSize = screens.xl
  ? "16px"
  : screens.lg
  ? "16px"
  : screens.md
  ? "15px"
  : "15px";
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAo1viD-Ut0TzXTyihevwuf-9tv_J3dPa0', // Use your API key here
  });

  if (loadError) {
    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        Error loading map. Please check the API key and restrictions.
      </div>
    );
  }

  return (
    <>
      <IcastHeader />
      <div>
        <Title
          style={{
            fontSize: titleFontSize,
            fontWeight: 'bold',
            textAlign: 'left', // Align title to the left
          }}
          className="call-for-content-title"
        >
          Event Venue Map
        </Title>
      </div>
      <Card className="venue-map-card">
        <Row gutter={[16, 16]} justify="start" align="top">
          <Col xs={24} md={10} className="info-column">
         
              <div className="contact-info">
                <Paragraph style={{ color: 'black', fontSize: paragraphFontSize, textAlign: 'left' }}>
                  <PhoneOutlined /> +92-51-9075799
                </Paragraph>
                <Paragraph style={{ color: 'black', fontSize: paragraphFontSize, textAlign: 'left' }}>
                  <MailOutlined /> info@icast.pk
                </Paragraph>
                <Paragraph style={{ color: 'black', fontSize: paragraphFontSize, textAlign: 'left' }}>
                  <EnvironmentOutlined /> 1, Islamabad Expressway, Islamabad
                </Paragraph>
                <Paragraph style={{ color: 'black', fontSize: paragraphFontSize, textAlign: 'left' }}>
                  <EnvironmentOutlined /> G59H+P2 Islamabad
                </Paragraph>
              </div>
            
          </Col>
          <Col xs={24} md={12} className="map-column">
            <div className="map-container">
              {!isLoaded ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>Loading map...</div>
              ) : (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                  options={{
                    disableDefaultUI: true, // Disables default map controls
                    clickableIcons: false, // Disables POI icons
                  }}
                >
                  <Marker position={center} />
                </GoogleMap>
              )}
            </div>
          </Col>
        </Row>
      </Card>
      <Footer />
      <style jsx>{`
        .venue-map-card {
          max-width: 90%; /* Increase flexibility for smaller screens */
          margin: 20px auto;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: left; /* Align content to the left */
        }

        .contact-info {
          padding: 20px;
          border-radius: 8px;
          height: 100%;
          text-align: left; /* Align text to the left */
        }

        .contact-info p {
          font-size: 16px;
          margin: 10px 0;
          display: flex;
          align-items: flex-start;
          color: #4a4a4a;
        }

        .contact-info p .anticon {
          margin-right: 8px;
          color: #1890ff;
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 400px; /* Set a fixed height for map container */
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default VenuMap;
