import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  message,
  Space,
  Grid,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/ContactStyles.css"; // Import the CSS file
import { Link } from "react-router-dom";

const { Title, Paragraph,Text } = Typography;
const { useBreakpoint } = Grid;

const ContactForm = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
  ? "35px"
  : screens.lg
  ? "40px"
  : screens.md
  ? "35px"
  : "28px";
  const titleMedium = screens.xl
  ? "18px"
  : screens.lg
  ? "30px"
  : screens.md
  ? "20px"
  : "20px";
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      message: values.messageContent,
    };

    try {
      const response = await fetch("https://icast.pk/backend/sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        message.success("Thank you for contacting us!");
        form.resetFields();
      } else {
        if (result && result.errors && Array.isArray(result.errors)) {
          const errors = result.errors;
          Object.keys(errors).forEach((err) => message.error(errors[err]));
          return;
        }
        message.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IcastHeader />
      <div>
      <Title
            style={{ fontSize: titleFontSize, fontWeight: "bold" }}
            className="call-for-content-title"
          >
           Contact Us
          </Title>
      </div>
      <div className="contact-form-container">
    
        <div className="content-wrapper">
          
          <Row  className="contact-content">
            {/* Left Column: Contact Information */}
            <Col xs={24} md={10} className="contact-info">
  <Title style={{ fontSize: titleFontSize, fontWeight: "bold" ,textAlign:"left"}} className="info-title">
    Contact Information
  </Title>


  {/* Add vertical spacing between sections */}
  <Space direction="vertical" size={20} style={{ width: "100%",textAlign:"left" }}>
  <Text style={{ fontSize: titleMedium,color:"#666673",textAlign:"start" }} className="info-description">
    Say something to start a live chat!
  </Text>
    <Space align="center">
      <PhoneOutlined style={{ fontSize: titleMedium }} className="info-icon" />
      <span style={{ fontSize: titleMedium, color: "black" }}>+92-51-9075799</span>
    </Space>
    <Space align="center">
      <MailOutlined className="info-icon" />
      <span style={{ fontSize: titleMedium, color: "black" }}>info@icast.pk</span>
    </Space>
    <Space size={0} align="start">
      <EnvironmentOutlined className="info-icon" />
      <span style={{ fontSize: titleMedium, color: "black" }}>
        Institute of Space Technology, <br />
        <span style={{ fontSize: titleMedium, color: "black" }}>
          1 Islamabad Highway, Islamabad, 44000
        </span>
      </span>
    </Space>

    <Space style={{ marginTop: "20px" }}>
      <Link to="https://www.facebook.com/ICAST.Pakistan">
        <FacebookOutlined size={10} className="social-icon" />
      </Link>
      <Link to="https://www.linkedin.com/company/icast-pakistan/">
        <LinkedinOutlined className="social-icon" />
      </Link>
    </Space>
  </Space>
</Col>

            {/* Right Column: Contact Form */}
            <Col xs={24} md={14}>
              <div className="form-container">
                <Title style={{fontSize:titleFontSize,fontWeight:"bold",textAlign:"start"}} className="form-title">
                  Contact Us
                </Title>
              
                <Form layout="vertical" onFinish={onFinish} form={form}>
                <Paragraph style={{fontSize:titleMedium,textAlign:"start"}} className="form-description">
                  Any question or remarks? Just write us a message!
                </Paragraph>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your first name",
                          },
                        ]}
                      >
                        <Input
                        style={{
                          border: "none",
                          borderBottom: "2px solid #1F5223",
                          borderRadius: "0",
                          boxShadow: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottom = "2px solid #0D3B16")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottom = "2px solid #1F5223")
                        }
                        placeholder=" Enter First Name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label=" Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your last name",
                          },
                        ]}
                      >
                        <Input
                        style={{
                          border: "none",
                          borderBottom: "2px solid #1F5223",
                          borderRadius: "0",
                          boxShadow: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottom = "2px solid #0D3B16")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottom = "2px solid #1F5223")
                        }
                        placeholder="Enter Last Name" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email",
                          },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <Input
                        style={{
                          border: "none",
                          borderBottom: "2px solid #1F5223",
                          borderRadius: "0",
                          boxShadow: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottom = "2px solid #0D3B16")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottom = "2px solid #1F5223")
                        }
                        placeholder="Enter Your Email" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your phone number",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            border: "none",
                            borderBottom: "2px solid #1F5223",
                            borderRadius: "0",
                            boxShadow: "none",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderBottom = "2px solid #0D3B16")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderBottom = "2px solid #1F5223")
                          }
                          placeholder="Enter Phone with Country Code"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    label="Message"
                    name="messageContent"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <Input.TextArea
                    bordered={false}
                      style={{
                          borderBottom: "2px solid #1F5223",
                        }}
                      rows={4}
                      placeholder="Write your message.."
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="default"
                      htmlType="submit"
                      loading={loading}
                      style={{
                        backgroundColor: "#1F5223",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "8px 16px",
                        fontSize: "16px",
                      }}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
