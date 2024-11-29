import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Space } from "antd";
import "../Styles/SliderStyles.css";

const calculateTimeLeft = () => {
  const eventDate = new Date("November 18, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      }
    : { days: 0, hours: 0, minutes: 0 };
};

const DeadlineTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container">
      <Row justify="space-between" align="middle" className="timer-header-row">
        <Col className="timer-header" span={12} style={{ textAlign: "left" }}>
          TIME REMAINING
        </Col>
        <Col className="timer-header" span={12} style={{ textAlign: "right" }}>
          DEADLINE
        </Col>
      </Row>
      <Row align="middle" justify="center" className="timer-row">
        <Col className="time-section">
          <Space  align="center" direction="vertical">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">DAYS</span>
          </Space>
        </Col>
        <Divider type="vertical" className="ant-divider" />
        <Col className="time-section">
          <Space align="center" direction="vertical">
          <span className="time-value">{timeLeft.hours}</span>
          <span className="time-label">HOURS</span>
          </Space>
        </Col>
        <Divider type="vertical" className="ant-divider" />
        <Col className="time-section">
          <Space direction="vertical" align="center">
          <span className="time-value">{timeLeft.minutes}</span>
          <span className="time-label">MINUTES</span>
          </Space>
        </Col>
        <Divider type="vertical" className="ant-divider" />
        <Col className="deadline-section">
          <div className="deadline-date">1</div>
          <div className="deadline-label">SEPTEMBER 2025</div>
        </Col>
      </Row>
    </div>
  );
};

export default DeadlineTimer;
