import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { StyledModal, ShadowBox, StyledSelect } from "../styled.js";
import { useSelector } from "react-redux";
import Api from "../../../services/api.js";
import profilePicMale from "../../../assets/img/cardProfile.svg";
import profilePicFemale from "../../../assets/img/cardProfile.svg";

const Feedback = ({ setModal }) => {
  const userInfo = useSelector((state) => state.session);
  const imageOptions = [
    {
      value: "male",
      label: (
        <div>
          <img style={{ width: "50px", height: "50px" }} src={profilePicMale} />
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
        console.log(res);
        setModal(false);
      })
      .catch((err) => {
        console.log("Edit failed");
      });
  };

  return (
    <StyledModal>
      <Button onClick={() => setModal(false)}>X</Button>
      <ShadowBox />
      <div>
        <h1>Edit Profile</h1>
      </div>

      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <div>Select your avatar</div>
        <Form.Item name="image_url">
          <StyledSelect
            value={selectedOption}
            options={imageOptions}
            onChange={handleSelectChange}
          />
        </Form.Item>

        <Form.Item name="about" label="Bio">
          <Input.TextArea allowClear={true} rows={3} />
        </Form.Item>

        <Form.Item name="name" label="Name">
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

        <Form.Item name="user" label="Username">
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

        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input
            type="text"
            rules={[
              {
                message: "Email must be example@example.com",
              },
            ]}
          />
        </Form.Item>

        <Form.Item name="password" label="Password">
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

        <Form.Item name="confirmPassword" label="Confirm password">
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
