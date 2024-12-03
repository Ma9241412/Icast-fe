import React from 'react';
import { Card, Typography, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import IcastHeader from '../Layouts/IcastHeader';
import Footer from '../Layouts/IcastFooter';

const { Title, Paragraph } = Typography;

const ScreenInProgress = () => {
  return (
    <>
      <IcastHeader />
      <div className="in-progress-container">
        <Card className="in-progress-card">
          <ClockCircleOutlined className="in-progress-icon" />
          <Title level={3} className="in-progress-title">
            We're working on this Page!
          </Title>
          <Paragraph className="in-progress-description">
            This feature is under development and will be live soon. Stay tuned for ICAST updates!
          </Paragraph>
          {/* Add a button for user interaction */}
          
        </Card>
      </div>
      <Footer />
      <style jsx>{`
        .in-progress-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f2f5;
          padding: 20px;
        }

        .in-progress-card {
          max-width: 500px;
          text-align: center;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .in-progress-icon {
          font-size: 60px; /* Larger icon size */
          color: #1890ff;
          margin-bottom: 20px;
        }

        .in-progress-title {
          font-size: 26px; /* Larger title size */
          font-weight: 600;
          margin-bottom: 12px;
          color: #333;
        }

        .in-progress-description {
          font-size: 18px;
          color: #555;
          margin-bottom: 30px;
        }

        .notify-button {
          font-size: 16px;
          padding: 10px 20px;
          background-color: #1890ff;
          border-color: #1890ff;
          color: white;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .notify-button:hover {
          background-color: #40a9ff;
          border-color: #40a9ff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default ScreenInProgress;
