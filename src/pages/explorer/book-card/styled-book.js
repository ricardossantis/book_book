import styled from "styled-components";
import { motion } from "framer-motion";
import { Rate } from "antd";
import { Link } from "react-router-dom";

export const Book = styled(motion.div)`
  margin: 6px 5px;
  background-color: #000;
  display: flex;
  border-radius: 1px;

  @media (min-width: 550px) {
    max-width: 55%;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
    -webkit-align-items: flex-start;
  }
`;

export const BookImage = styled.img`
  width: 145px;
  height: 240px;
  box-shadow: 4px 4px 10px #363636;

  @media (min-width: 550px) {
    width: 134px;
    height: 210px;
  }

  @media (min-width: 768px) {
    width: 210px;
    height: 320px;
  }
`;

export const Content = styled(motion.div)`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-evenly;
`;

export const BookTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 12px 16px;
  margin-bottom: 1px;
  margin-left: 10px;
  align-self: flex-start;
`;

export const Rating = styled(Rate)`
  cursor: not-allowed;
  pointer-events: none;
  align-self: flex-start;
  margin-left: 10px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  .anticon svg {
    width: 14px;
  }

  .ant-rate-star:not(:last-child) {
    margin-right: 4px;
  }
`;

export const User = styled(Link)`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  margin-left: 10px;
  text-align: left;

  margin-top: 110px;
`;

export const UserImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const UserReview = styled.p`
  font-size: 0.7rem;
  line-height: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-bottom: 1px;
  margin-left: 10px;
`;

export const UserName = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;

  text-align: left;
  color: #fff;
  margin-left: 40px;

  p {
    font-size: 0.6rem;
    margin-right: 4px;
  }

  h2 {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const BookDescription = styled.p`
  font-size: 1rem;
`;

export const Button = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: 10px;

  button {
    font-family: "Scada", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: #000;
    border: none;
    border-radius: 2px;
    box-shadow: 4px 4xp 8px #fff8e5;
    background: #fff;
  }
`;
