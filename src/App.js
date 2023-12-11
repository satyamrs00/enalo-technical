import "./index.css";
import { Col, Row, Form, Input, Button, message } from "antd";

export default function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log("Success:", values);
    messageApi.open({
      type: 'success',
      content: 'Form submitted successfully',
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    messageApi.open({
      type: 'error',
      content: 'Failed to submit',
    });

  };

  return (
    <div className="App">
      {contextHolder}
      <Form
        name="basic"
        style={{
          maxWidth: 750,
          backgroundColor: "#28313C",
          border: "5px solid white",
          padding: "2rem",
          color: "#E8EFEF",
        }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "1rem",
          }}
        >
          <div style={{ padding: "0.25rem", backgroundColor: "#53AD8A" }}>
            Sign Up
          </div>
          <div style={{ padding: "0.25rem", backgroundColor: "#475257" }}>
            Sign In
          </div>
        </div>
        <div style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          Sign Up for free
        </div>
        <Row gutter={16}>
          <Col lg={12} xs={24}>
            <Form.Item
              label=""
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "First Name is required",
                },
              ]}
            >
              <Input placeholder="First Name*" />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label=""
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Last Name is required",
                },
              ]}
            >
              <Input placeholder="Last Name*" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label=""
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Not a valid email'
                }
              ]}
            >
              <Input placeholder="Email Address*" type="email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label=""
              name="password"
              rules={[
                {
                  required: true,
                  message: "Set a password",
                }
              ]}
            >
              <Input placeholder="Set a password*" type="password" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              style={{
                backgroundColor: "#53AD8A",
                borderRadius: "0px",
                width: "100%",
                fontSize: '1.5rem',
                fontWeight: '600',
                height: 'auto'
              }}
              htmlType="submit"
            >
              GET STARTED
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
