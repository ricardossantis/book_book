import React from "react";
import { Form, Input, Button, Rate } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postFeedback } from "../../redux/actions/feedback.js";

export default function Feedback({ book }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session);

  const onFinish = ({ review, grade }) => {
    console.log("Success:", { review, grade });
    const feedback = {
      book: { review, grade },
    };
    dispatch(postFeedback(feedback, user, book));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledModal>
      <ShadowBox />
      <div>
        <h1>Feedback</h1>
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Comment"
          name="review"
          rules={[{ required: true, message: "Please input your comment!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Grade"
          name="grade"
          rules={[{ required: true, message: "Please input your grade!" }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledModal>
  );
}

const ShadowBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0002;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledModal = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  padding: 30px;
`;
