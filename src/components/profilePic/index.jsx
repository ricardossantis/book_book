import React from "react";
import styled from "styled-components";
import profilePicMale from "../../assets/img/cardProfile.svg";
import profilePicFemale from "../../assets/img/cardProfile.svg";

function ProfilePic({ userInfo }) {
  return (
    <PictureDiv>
      <img
        src={
          userInfo.user.image_url === "female"
            ? profilePicFemale
            : profilePicMale
        }
        alt="profile-pic"
      />
    </PictureDiv>
  );
}

export default ProfilePic;

const PictureDiv = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: inline-block;
  img {
    width: 100%;
  }
`;
