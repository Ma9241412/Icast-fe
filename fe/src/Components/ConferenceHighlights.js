import React from "react";
import { Divider, Table, Typography } from "antd";
import "../Styles/Linkages.css";
import "../App.css"

const { Title } = Typography;

const columns = [
  {
    title: "Technical Session",
    dataIndex: "technicalSession",
    key: "technicalSession",
    width: "50%",
  },
  {
    title: "Poster Session",
    dataIndex: "posterSession",
    key: "posterSession",
    width: "50%",
  },
];

const data = [
  {
    key: "1",
    technicalSession: "Plenary Sessions",
    posterSession: "GSA Forum",
  },
  {
    key: "2",
    technicalSession: "Panel Discussions",
    posterSession: "Workshop / Trainings / Tutorials",
  },
  {
    key: "3",
    technicalSession: "Webinars",
    posterSession: "Forum 360",
  },
  {
    key: "4",
    technicalSession: "Technology Marketing Seminar",
    posterSession: "Policy Making Session",
  },
  {
    key: "5",
    technicalSession: "STEM / STEAM / STEP Session",
    posterSession: "",
  },
];

const ConferenceHighlights = () => {
  return (
    <div className="conference-highlights-container">
      <Title
        // style={{ fontSize: "48px", fontWeight: "bold", fontFamily: "Inter" }}
        className="title-imp"
      >
        Conference Highlights
      </Title>
      <Divider className="ncgsa-divider" />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="conference-highlights-table"
      />
    </div>
  );
};

export default ConferenceHighlights;
