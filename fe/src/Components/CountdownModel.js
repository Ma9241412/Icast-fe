import React from "react";
import { Modal, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import DeadlineTimer from "./DeadlineTimer"; // <-- make sure your timer component is imported

const { Title } = Typography;

const CountdownModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  isMobile,
}) => {
  return (
    <Modal
      title={null}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={isMobile ? "95%" : 720}
      centered
      footer={null}
      closeIcon={
        <CloseOutlined
          style={{
            color: "#ffffff",
            fontSize: "22px",
            background: "rgba(0,0,0,0.3)",
            borderRadius: "50%",
            padding: "6px",
            boxShadow: "0 0 8px rgba(255,255,255,0.6)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.5)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(0,0,0,0.3)";
            e.target.style.transform = "scale(1)";
          }}
        />
      }
      bodyStyle={{
        padding: isMobile ? "20px" : "40px",
        background: "linear-gradient(135deg, #e3f2fd, #306ba6ff)",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 30%, rgba(24,144,255,0.1), transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,43,92,0.1), transparent 50%)",
          zIndex: 0,
          animation: "pulse 6s ease-in-out infinite",
        }}
      />

      {/* Modal Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Title
          level={2}
          style={{
            color: "#0a59b4ff",
            marginBottom: 0,
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            letterSpacing: "0.5px",
          }}
        >
          Countdown to{" "}
          <span style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
            ICAST 2025
          </span>
        </Title>

        <Title
          level={4}
          style={{
            color: "#006814",
            marginTop: 6,
            fontWeight: 800,
            lineHeight: 1.4,
            fontFamily: "Inter, sans-serif",
            opacity: 0.9,
          }}
        >
          🚀 The 3-Day Journey into Innovation Begins Soon!
        </Title>

        {/* Custom Divider */}
        <div
          style={{
            height: "3px",
            width: "80%",
            margin: "24px auto",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",
            borderRadius: "6px",
            opacity: 1,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        ></div>

        {/* Timer Card */}
        <div
          style={{
            display: "inline-block",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            animation: "glow 3s ease-in-out infinite",
          }}
        >
          <DeadlineTimer />
        </div>
      </div>

      {/* Inline keyframe styles */}
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(24,144,255,0.2); }
            50% { box-shadow: 0 0 25px rgba(24,144,255,0.5); }
            100% { box-shadow: 0 0 10px rgba(24,144,255,0.2); }
          }
          @keyframes pulse {
            0% { opacity: 0.9; }
            50% { opacity: 1; }
            100% { opacity: 0.9; }
          }
        `}
      </style>
    </Modal>
  );
};

export default CountdownModal;
