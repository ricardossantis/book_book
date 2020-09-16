import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

function CarouselComponent({ children }) {
  return <StyledCarousel showArrows={true}>{children}</StyledCarousel>;
}

export default CarouselComponent;

const StyledCarousel = styled(Carousel)`
  width: 80%;
  margin: 0 auto;
`;
