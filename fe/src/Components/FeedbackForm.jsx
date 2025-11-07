// File: src/components/FeedbackForm.jsx
import React, { useState } from "react";
import {
  Form,
  Input,
  Radio,
  Button,
  Typography,
  Row,
  Col,
  message,
  Card,
  Space,
  Divider,
  Spin,
} from "antd";
import "../Styles/feedBack.css";
import {
  UserOutlined,
  MailOutlined,
  BankOutlined,
  GlobalOutlined,
  CalendarOutlined,
  CommentOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const radioOptionsOpinion = [
  "Excellent",
  "Very Good",
  "Good",
  "Satisfactory",
  "Poor",
];

const radioOptionsExtent = [
  "Very Significantly",
  "Significantly",
  "Moderately",
  "Unimportantly",
  "Not at all",
];

const FeedbackForm = ({
  endpoint = "https://icast.pk/backend/api/saveFeedback.php",
}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Send JSON to backend
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const text = await res.text();

      // Try parse JSON safely
      let result = {};
      try {
        result = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse JSON:", text);
        result = {
          success: res.ok,
          message: text || (res.ok ? "OK" : "Server error"),
        };
      }

      if (res.ok && (result.success === true || result.success === undefined)) {
        message.success({
          content:
            result.message ||
            "Feedback submitted successfully! Thank you for your response.",
          duration: 5,
          icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
        });
        form.resetFields();
        setSubmitted(true);

        // Scroll to top after successful submission
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Reset submitted state after 10 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      } else {
        message.error({
          content:
            result.message || "Failed to submit feedback. Please try again.",
          duration: 5,
        });
        console.error("Server response:", result);
      }
    } catch (err) {
      console.error("Network error:", err);
      message.error({
        content: "Network error — please check your connection and try again.",
        duration: 5,
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
    message.warning({
      content: "Please fill in all required fields correctly.",
      duration: 4,
    });

    // Scroll to first error
    const firstErrorField = errorInfo.errorFields[0];
    if (firstErrorField) {
      form.scrollToField(firstErrorField.name[0], {
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const validateEmail = (rule, value) => {
    if (!value) {
      return Promise.reject("E-mail is required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return Promise.reject("Please enter a valid email address");
    }
    return Promise.resolve();
  };

  const validateSelection = (rule, value) => {
    if (!value || value === undefined) {
      return Promise.reject("Please select an option");
    }
    return Promise.resolve();
  };

  return (
    <>
      <IcastHeader />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#EFF0F2",
          padding: "40px 20px",
        }}
      >
        <Card
          style={{
            maxWidth: 980,
            margin: "0 auto",
            borderRadius: 16,
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Success Message */}
          {submitted && (
            <div
              style={{
                background: "#f6ffed",
                border: "1px solid #b7eb8f",
                borderRadius: 8,
                padding: 16,
                marginBottom: 24,
                textAlign: "center",
              }}
            >
              <CheckCircleOutlined
                style={{ fontSize: 24, color: "#52c41a", marginRight: 8 }}
              />
              <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 600 }}>
                Thank you! Your feedback has been submitted successfully.
              </span>
            </div>
          )}

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Title
              level={2}
              className="title-main"
              style={{
                marginBottom: 8,
                backgroundClip: "text",
                fontSize: 32,
              }}
            >
              ICAST 2025 — Conference Feedback Form
            </Title>
            <Paragraph
              style={{ color: "black", fontSize: 16, marginBottom: 8 }}
            >
              We value your feedback! Please take a moment to share your
              conference experience.
            </Paragraph>
            <Paragraph style={{ color: "black", fontSize: 14 }}>
              Fields marked with <span style={{ color: "#ff4d4f" }}>*</span> are
              required.
            </Paragraph>
          </div>

          <Spin
            spinning={loading}
            indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                conference: "ICAST 2025",
              }}
              scrollToFirstError={{
                behavior: "smooth",
                block: "center",
              }}
            >
              {/* Personal Information Section */}
              <Title
                className="sub-title"
                level={2}
                style={{
                  marginTop: 0,
                  color: "#055EDD",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                📋 Personal Information
              </Title>
              <Divider style={{ marginTop: 12, marginBottom: 24 }} />

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    tooltip="Your full name (optional)"
                    rules={[
                      {
                        max: 255,
                        message: "Name cannot exceed 255 characters",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined style={{ color: "#999" }} />}
                      placeholder="Enter your full name"
                      size="large"
                      maxLength={255}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12}>
                  <Form.Item
                    label={
                      <span>
                        E-mail <span style={{ color: "#ff4d4f" }}>*</span>
                      </span>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "E-mail is required" },
                      {
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                      { validator: validateEmail },
                      {
                        max: 255,
                        message: "Email cannot exceed 255 characters",
                      },
                    ]}
                    tooltip="We'll use this to send you conference updates"
                  >
                    <Input
                      prefix={<MailOutlined style={{ color: "#999" }} />}
                      placeholder="you@example.com"
                      size="large"
                      maxLength={255}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Affiliation"
                    name="affiliation"
                    tooltip="Your institution or organization"
                    rules={[
                      {
                        max: 255,
                        message: "Affiliation cannot exceed 255 characters",
                      },
                    ]}
                  >
                    <Input
                      prefix={<BankOutlined style={{ color: "#999" }} />}
                      placeholder="Institution / Organization"
                      size="large"
                      maxLength={255}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Relevant Conference Track(s)"
                    name="track"
                    tooltip="e.g., AI, Climate, Education"
                    rules={[
                      {
                        max: 255,
                        message: "Track cannot exceed 255 characters",
                      },
                    ]}
                  >
                    <Input
                      placeholder="e.g., AI, Climate, Education"
                      size="large"
                      maxLength={255}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Country"
                    name="country"
                    rules={[
                      {
                        max: 100,
                        message: "Country cannot exceed 100 characters",
                      },
                    ]}
                  >
                    <Input
                      prefix={<GlobalOutlined style={{ color: "#999" }} />}
                      placeholder="Your country"
                      size="large"
                      maxLength={100}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Conference"
                    name="conference"
                    rules={[
                      {
                        max: 255,
                        message: "Conference name cannot exceed 255 characters",
                      },
                    ]}
                  >
                    <Input
                      prefix={<CalendarOutlined style={{ color: "#999" }} />}
                      placeholder="ICAST 2025"
                      size="large"
                      maxLength={255}
                    />
                  </Form.Item>
                </Col>
              </Row>

              {/* Conference Experience Section */}
              <Title
                className="sub-title"
                level={4}
                style={{
                  marginTop: 32,
                  color: "#055EDD",
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                💭 Conference Experience
              </Title>
              <Divider style={{ marginTop: 12, marginBottom: 24 }} />

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    Your overall opinion about the conference?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="overall_opinion"
                rules={[
                  {
                    required: true,
                    message: "Please select your overall opinion",
                  },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    To what extent did the conference increase your knowledge
                    about your relevant track / area of interest?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="knowledge_increase"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsExtent.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    To what extent has the conference confirmed or changed your
                    perspective about the concepts of your area of interest?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="perspective_change"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsExtent.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    To what extent you expect to use the knowledge obtained
                    through ICAST 2025 in your work?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="knowledge_use"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal " style={{ width: "100%" }}>
                    {radioOptionsExtent.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              {/* Keynote and Sessions Section */}
              <Title
                className="sub-title"
                level={4}
                style={{
                  marginTop: 32,
                  color: "#055EDD",
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                🎤 Keynote Talks and Panel Discussions & Allied Sessions
              </Title>
              <Divider style={{ marginTop: 12, marginBottom: 24 }} />

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    How would you rate the quality of keynote speakers and their
                    talks? <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="keynote_quality"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    How would you rate the quality of Panel Discussions and
                    Forum 360 held during the conference?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="panel_quality"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    How would you rate the structure and format of conference
                    sessions (speakers, length, time for discussion,
                    representation)? <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="session_structure"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    How would you rate the material provided and their
                    usefulness? <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="materials_usefulness"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    How would you rate the overall conference management?{" "}
                    <span style={{ color: "#ff4d4f" }}>*</span>
                  </span>
                }
                name="conference_management"
                rules={[
                  { required: true, message: "Please select an option" },
                  { validator: validateSelection },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Space direction="horizontal" style={{ width: "100%" }}>
                    {radioOptionsOpinion.map((opt) => (
                      <Radio
                        key={opt}
                        value={opt}
                        style={{
                          display: "block",
                          height: "auto",
                          lineHeight: "1.5",
                          padding: "12px 16px",
                          border: "2px solid #f0f0f0",
                          borderRadius: 8,
                          marginBottom: 8,
                          transition: "all 0.3s",
                        }}
                        className="custom-radio"
                      >
                        <span style={{ fontSize: 15 }}>{opt}</span>
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>

              {/* Comments Section */}
              <Title
                className="sub-title"
                level={4}
                style={{
                  marginTop: 32,
                  color: "#055EDD",
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                💬 Additional Feedback
              </Title>
              <Divider style={{ marginTop: 12, marginBottom: 24 }} />

              <Form.Item
                label={
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    Comments / Suggestions
                  </span>
                }
                name="comments"
                tooltip="Share any additional thoughts, suggestions, or comments"
                rules={[
                  {
                    max: 5000,
                    message: "Comments cannot exceed 5000 characters",
                  },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Please provide any comments or suggestions you may have about the conference..."
                  maxLength={5000}
                  showCount
                  style={{
                    fontSize: 15,
                    borderRadius: 8,
                    border: "2px solid #f0f0f0",
                  }}
                />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item style={{ marginTop: 32, marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  size="large"
                  style={{
                    height: 50,
                    fontSize: 16,
                    fontWeight: 600,
                    backgroundColor: "#006814",
                    border: "none",
                    borderRadius: 8,
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  }}
                  icon={loading ? <LoadingOutlined /> : null}
                >
                  {loading ? "Submitting..." : "Submit Feedback"}
                </Button>
              </Form.Item>

              <div
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  color: "#999",
                  fontSize: 13,
                }}
              >
                <p>
                  Your feedback is confidential and will be used to improve
                  future conferences.
                </p>
              </div>
            </Form>
          </Spin>

          {/* Custom CSS for Radio Hover Effects */}
          <style>{`
          .custom-radio:hover {
            border-color: #667eea !important;
            background: #f0f5ff;
          }
          .ant-radio-wrapper-checked.custom-radio {
            border-color: #667eea !important;
            background: #f0f5ff;
          }
          .ant-radio-checked .ant-radio-inner {
            border-color: #667eea !important;
            background-color: #667eea !important;
          }
          .ant-radio:hover .ant-radio-inner {
            border-color: #667eea !important;
          }
          .ant-input:focus, .ant-input:hover {
            border-color: #667eea !important;
          }
          .ant-input-focused {
            border-color: #667eea !important;
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2) !important;
          }
        `}</style>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackForm;
