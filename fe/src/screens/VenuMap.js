import React from 'react';
import { Card, Row, Col } from 'antd';
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
  lng: 73.17496607549269,  // Longitude for IST
};

const VenuMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAo1viD-Ut0TzXTyihevwuf-9tv_J3dPa0' // Use your API key here
  });

  if (loadError) {
    return <div style={{ textAlign: 'center', margin: '20px 0' }}>Error loading map. Please check the API key and restrictions.</div>;
  }

  return (
    <>
      <IcastHeader />
      <Card title="Event Venue Map" className="venue-map-card">
        <Row gutter={[16, 16]} justify="start" align="top">
          <Col xs={24} md={10} className="info-column">
            <Card bordered={true} className="contact-card">
              <div className="contact-info">
                <p><PhoneOutlined /> +92-51-9075100</p>
                <p><PhoneOutlined /> +92-51-9273310</p>
                <p><MailOutlined /> info@ist.edu.pk</p>
                <p><EnvironmentOutlined /> 1, Islamabad Expressway, Islamabad</p>
                <p><EnvironmentOutlined /> G59H+P2 Islamabad</p>
              </div>
            </Card>
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
          max-width: 80%;
          margin: 20px auto;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

        .venue-map-card .ant-card-head-title {
          font-size: 24px; /* Adjust font size as desired */
          font-weight: bold;
          color: #333; /* Customize color if needed */
        }

        .contact-card {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          height: 100%; /* Ensures it aligns with the map card */
        }

        .contact-info p {
          font-size: 16px;
          margin: 10px 0;
          display: flex;
          align-items: center;
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
