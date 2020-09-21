import React from "react";
import renderer from "react-test-renderer";
import ProfilePic from "../index.jsx";

const userInfo = {
  user: { image_url: "female" },
};

describe("Render Test", () => {
  it("renders a picture", () => {
    const tree = renderer.create(<ProfilePic userInfo={userInfo} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
