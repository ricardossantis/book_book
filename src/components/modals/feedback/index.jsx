import React from "react";
import { Form, Input, Button, Rate } from "antd";
import updateBook from "../../../utils/updateBook";
import { useParams } from "react-router-dom";
import { StyledModal, ShadowBox } from "../styled.js";

const Feedback = ({ book, setModal }) => {
  const { id } = useParams();

  const onFinish = ({ review, grade }) => {
    const feedback = { book: { review, grade } };
    updateBook(feedback, id, book);
    setModal(false);
  };

  return (
    <StyledModal>
      <Button onClick={() => setModal(false)}>X</Button>
      <ShadowBox />
      <div>
        <h1>Feedback</h1>
      </div>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
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
};

export default Feedback;
