import React from "react";
import { Form, Input, Button } from "antd";
import { StyledModal, ShadowBox } from "../styled.js";

const Feedback = ({ setModal }) => {
  const onFinish = () => {
    setModal(false);
  };

  return (
    <StyledModal>
      <Button onClick={() => setModal(false)}>X</Button>
      <ShadowBox />
      <div>
        <h1>Edit Profile</h1>
      </div>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

export default Feedback;
