import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import TOKEN_URL from "../../../utils/token";

const MovieLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    console.log("Success:", values);
    // Replace this with your actual authentication logic
    if (values.username === "admin" && values.password === "123") {
      fetch(`${TOKEN_URL}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("Token", data.request_token);
          navigate("/");
        });
    } else {
      setError("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Login</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now!
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MovieLogin;
