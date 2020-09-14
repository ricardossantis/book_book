import React from "react";
import { Form, Input, Button, Rate } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { updateBook } from "../../redux/actions/books.js";
import { useParams } from "react-router-dom";

const Feedback = ({ book, setModal }) => {
  const dispatch = useDispatch();
  const user = useParams();

  const onFinish = ({ review, grade }) => {
    const feedback = { book: { review, grade } };
    console.log({ review, grade });
    dispatch(updateBook(feedback, user, book));
    setModal(false);
  };

  return (
    <StyledModal>
      <ShadowBox />
      <div>
        <h1>Feedback</h1>
      </div>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label="Review"
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
};

export default Feedback;

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
