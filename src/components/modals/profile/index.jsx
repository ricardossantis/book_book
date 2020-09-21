import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { StyledModal, ShadowBox, StyledSelect, Title, StyledButton, BoxClose } from "../styled.js";
import { useSelector } from "react-redux";
import Api from "../../../services/api.js";
import profilePicMale from "../../../assets/img/cardProfile.svg";
import profilePicFemale from "../../../assets/img/cardProfile.svg";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Feedback = ({ setModal }) => {
  const userInfo = useSelector((state) => state.session);
  const imageOptions = [
    {
      value: "male",
      label: (
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src={profilePicMale}
            alt="profile-icon"
          />
        </div>
      ),
    },
    {
      value: "female",
      label: (
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src={profilePicFemale}
            alt="profile-icon"
          />
        </div>
      ),
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  const onFinish = (values) => {
    let apiObject = { user: values };
    if (values.image_url) apiObject.user.image_url = values.image_url.value;
    Api.put(
      `users/${userInfo.user.id}`,
      { ...apiObject },
      {
        headers: { Authorization: userInfo.token },
      }
    )
      .then((res) => {
        console.warn("Edit User Status:", res);
        setModal(false);
      })
      .catch((err) => {
        console.error("Edit failed", err);
      });
  };

  return (
    <StyledModal>
      <BoxClose>
        <StyledButton onClick={() => setModal(false)}>
          <AiOutlineCloseCircle />
        </StyledButton>
      </BoxClose>

      <ShadowBox />
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Title>Select your avatar</Title>
        <Form.Item name="image_url">
          <StyledSelect
            value={selectedOption}
            options={imageOptions}
            onChange={handleSelectChange}
          />
        </Form.Item>
        <Title>About</Title>

        <Form.Item name="about" >
          <Input.TextArea allowClear={true} rows={3} />
        </Form.Item>
        <Title>Name</Title>

        <Form.Item name="name" >
          <Input
            type="text"
            rules={[
              {
                pattern: /[A-Z][a-z]* [A-Z][a-z]*/,
                message: "Your name must be (Name Last-name)",
              },
            ]}
          />
        </Form.Item>
        <Title>User name</Title>

        <Form.Item name="user">
          <Input
            type="text"
            rules={[
              {
                min: 6,
                message: "Username must be at least 6 characters long",
              },
            ]}
          />
        </Form.Item>
        <Title>Adress</Title>

        <Form.Item name="address">
          <Input />
        </Form.Item>
        <Title>Email</Title>

        <Form.Item name="email">
          <Input
            type="text"
            rules={[
              {
                message: "Email must be example@example.com",
              },
            ]}
          />
        </Form.Item>
        <Title>Password</Title>

        <Form.Item name="password">
          <Input
            type="password"
            rules={[
              {
                min: 6,
                message: "Password must be at least 6 characters long",
              },
              {
                pattern: /(?=.*[}{,^?~=+\-_*\-+|!])/,
                message: "Must contain at least on special character",
              },
            ]}
          />
        </Form.Item>
        <Title>Confirm password</Title>

        <Form.Item name="confirmPassword">
          <Input
            type="password"
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          />
        </Form.Item>

        <Button type="submit" htmlType="submit">
          Confirm
        </Button>
      </Form>
    </StyledModal>
  );
};

export default Feedback;


