import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import FooterComponent from "../Layouts/FooterComponent";
import Footer from "../Layouts/IcastFooter";

const ContactForm = () => {
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
      console.log(result);

      if (result.status === "success") {
        message.success("Thank you for contacting us!");
        form.resetFields();
      } else {
        if (result && result.errors && Array.isArray(result.errors)) {
          const errros = result.errors;
          Object.keys(errros).forEach((err) => message.error(errros[err]));
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
      <div className="contact-form-container">
        <Card title="Contact Us" className="contact-card">
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="messageContent"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <Footer />
      <style jsx>{`
        .contact-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          padding: 20px;
        }
        .contact-card {
          width: 100%;
          max-width: 600px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default ContactForm;
