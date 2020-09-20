import React from "react";
import { Form, Input, Button, Rate } from "antd";
import { useDispatch } from "react-redux";
import { updateBook } from "../../../redux/actions/books";
import { useParams } from "react-router-dom";
import { StyledModal, ShadowBox, Title, StyledButton, BoxClose } from "../styled.js";

const Feedback = ({ book, setModal }) => {
  const dispatch = useDispatch();
  const user = useParams();

  const onFinish = ({ review, grade }) => {
    const feedback = { book: { review, grade } };
    dispatch(updateBook(feedback, user, book));
    setModal(false);
  };

  return (
    <StyledModal>
      <Button onClick={() => setModal(false)}>X</Button>
      <ShadowBox />
      <div>
        <Title>Feedback</Title>
      </div>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Title>Avaliação</Title>
        <Form.Item
          name="review"
          rules={[{ required: true, message: "Please input your comment!" }]}
        >
          <Input />
        </Form.Item>
        <Title>Nota</Title>

        <Form.Item
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
