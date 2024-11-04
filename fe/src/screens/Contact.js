import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
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
      } else {
        message.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
        messageContent: "Hello, this is a sample message.",
      }}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter your first name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter your last name" }]}
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
        rules={[{ required: true, message: "Please enter your phone number" }]}
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
  );
};

export default ContactForm;
