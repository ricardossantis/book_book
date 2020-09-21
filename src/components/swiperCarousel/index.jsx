import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useLocation } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";
import CardExplorer from "./bookExplorer";
import CardSearch from "./bookSearch";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);
const Carousel = ({
  books = [],
  user,
  carousel = [],
  setCurrentBooks = () => {},
  getMoreBooks = () => {},
}) => {
  const { pathname } = useLocation();
  const [loadedBooks, setLoadedBooks] = useState(0);
  const [totalBooks, setTotalBooks] = useState(books.length);

  useEffect(() => {
    getMoreBooks(
      loadedBooks,
      carousel,
      totalBooks,
      setTotalBooks,
      setCurrentBooks
    );
  }, [loadedBooks]);

  const setSlidesPerView = () => {
    if (window.innerWidth <= 732) {
      return [2, 20];
    } else {
      return [8, 10];
    }
  };

  return (
    <StyledSwiper
      spaceBetween={setSlidesPerView()[1]}
      slidesPerView={setSlidesPerView()[0]}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(evt) => setLoadedBooks(evt.activeIndex)}
    >
      {books.map((book, index) => {
        return (
          <SwiperSlide key={index}>
            {pathname.match("explorar") ? (
              <CardExplorer book={book} friends={user.config} user={user} />
            ) : (
              <CardSearch book={book} />
            )}
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default Carousel;

const StyledSwiper = styled(Swiper)`
  width: 95vw;
  margin-left: 4vw;
  height: 300px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  .swiper-slide {
    transition: 0.3s;
    &:hover ~ div {
      transform: translate(-25%);
    }
    &:hover {
      transform: scale(1.2);
      z-index: 10;
      border-radius: 2px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    height: calc(100% - 98px);
    width: 60px;
    color: white;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    height: calc(100% - 98px);
    width: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-button-next {
    transform: translateY(-43%) translateX(20%);
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .swiper-button-prev {
    transform: translateY(-43%) translateX(-20%);
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  @media (min-width: 532px) {
    //começo
    height: 410px;
    .swiper-button-prev,
    .swiper-button-next {
      height: calc(100% - 98px);
      width: 60px;
      color: white;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      height: calc(100% - 98px);
      width: 60px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .swiper-button-next {
      transform: translateY(-43%) translateX(20%);
      background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .swiper-button-prev {
      transform: translateY(-43%) translateX(-20%);
      background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  } //fim

  @media (min-width: 731px) {
  }
`;
