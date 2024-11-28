import React from "react";
import { Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  PinterestOutlined,
  YoutubeOutlined,
  SnapchatOutlined,
  TikTokOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "../Styles/Subfooter.css";
import { Link } from "react-router-dom";


const SubFooter = () => {
  return (
    <div className="subfooter">
      <Space size="middle" className="icon-container">
      <Link to="https://www.facebook.com/ICAST.Pakistan" target="_blank">
                <FacebookOutlined className="social-icon fb" />
              </Link>
        <TwitterOutlined />
        <Link
                to="https://www.linkedin.com/company/icast-pakistan/"
                target="_blank"
              >
                <LinkedinOutlined className="social-icon linkedin" />
              </Link>
        <InstagramOutlined />
        <PinterestOutlined />
        <YoutubeOutlined />
        <TikTokOutlined />
        <MessageOutlined />
      </Space>
    </div>
  );
};

export default SubFooter;
