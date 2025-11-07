import React from "react";
import { Card, Collapse, List, Typography, Button, Row, Col, Grid } from "antd";
import { DownloadOutlined, FolderOpenOutlined } from "@ant-design/icons";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Panel } = Collapse;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const downloadData = [
  {
    category: "Calls",
    files: [
      { name: "Call for Papers.pdf", url: "#" },
      { name: "Submission Guidelines.docx", url: "#" },
    ],
  },
  {
    category: "Guides",
    files: [
      { name: "Speaker Guide.pdf", url: "#" },
      { name: "Volunteer Guide.pdf", url: "#" },
    ],
  },
  {
    category: "Highlights",
    files: [
      { name: "Event Highlights 2024.pdf", url: "#" },
      { name: "Innovation Showcase.pdf", url: "#" },
    ],
  },
  {
    category: "Notifications",
    files: [
      { name: "Schedule Update.pdf", url: "#" },
      { name: "Venue Change Notice.pdf", url: "#" },
    ],
  },
  {
    category: "Partnership & Sponsorship",
    files: [
      { name: "Sponsorship Brochure.pdf", url: "#" },
      { name: "Partnership Proposal.docx", url: "#" },
    ],
  },
  {
    category: "Sub-Tracks",
    files: [
      { name: "AI Track Details.pdf", url: "#" },
      { name: "Climate Innovation Track.pdf", url: "#" },
    ],
  },
  {
    category: "Tracks",
    files: [
      { name: "Main Conference Tracks.pdf", url: "#" },
      { name: "Workshops Overview.pdf", url: "#" },
    ],
  },
  {
    category: "Workshops",
    files: [
      { name: "Workshop Schedule.pdf", url: "#" },
      { name: "Materials Checklist.pdf", url: "#" },
    ],
  },
];

const DownloadsSection = () => {
  const screens = useBreakpoint();
  const titleFont = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "36px"
    : "36px";
  const titleFontSize = screens.xl
    ? "26px"
    : screens.lg
    ? "26px"
    : screens.md
    ? "24px"
    : "24px";
  const titleMedium = screens.xl
  ? "16px"
  : screens.lg
  ? "16px"
  : screens.md
  ? "15px"
  : "15px";


  return (
    <>
      <IcastHeader />
      <Title
        style={{
          backgroundColor: "#EEF0F2",
          textAlign: "left",
          padding: "20px 40px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "800",
          fontSize: titleFont,
          color: "black",
          letterSpacing: "0.5px",
        }}
      >
        Downloads
      </Title>

      <div
        style={{
          padding: "20px 30px",
          backgroundColor: "#EEF0F2",
          minHeight: "80vh",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Row gutter={[24, 24]} justify="center">
          {downloadData.map((section, index) => (
            <Col xs={24} sm={22} md={11} lg={10} xl={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 20,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                  background:"white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                bodyStyle={{ padding: "20px" }}
            title={
  <div style={{ textAlign: "left" }}>
    <span
      style={{
        fontWeight: 700,
        color: "black",
        fontFamily: "Inter, sans-serif",
        fontSize: titleFontSize,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <FolderOpenOutlined style={{ color: "black" }} />
      {section.category}
    </span>
  </div>
}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0, 0, 0, 0.05)";
                }}
              >
              <Collapse ghost
               expandIcon={() => null} >
  <Panel
    header={
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          strong
          style={{
            color: "black",
            fontFamily: "Inter, sans-serif",
            fontSize: titleMedium,
            textAlign: "left",
          }}
        >
          View Files
        </Text>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            transform: "translateY(2px)",
            color: "black",
          }}
        >
          ❯
        </span>
      </div>
    }
    key="1"
  >
    <List
      dataSource={section.files}
      renderItem={(file) => (
        <List.Item
          style={{
            borderBottom: "1px dashed #e0e0e0",
            padding: "10px 0",
          }}
          actions={[
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
              href={file.url}
              target="_blank"
              style={{
                background: "#006814",
                borderRadius: "8px",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 2px 6px rgba(0, 91, 187, 0.3)",
              }}
            >
              Download
            </Button>,
          ]}
        >
          <Text
            style={{
              color: "#333",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {file.name}
          </Text>
        </List.Item>
      )}
    />
  </Panel>
</Collapse>

              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default DownloadsSection;
