import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useLocation } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";
import CardExplorer from "./bookExplorer";
import CardSearch from "./bookSearch";
import SwiperCore, { Navigation } from "swiper";
import CardProfile from "./bookProfile";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation]);
const Carousel = ({
  books = [],
  friends,
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
              <CardExplorer book={book} friends={friends} user={user} />
            ) : pathname.match("pesquisa") ? (
              <CardSearch book={book} />
            ) : (
              <CardProfile book={book} />
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

  @media (min-width: 532px) {
    //começo
    height: 410px;
  } //fim

  @media (min-width: 731px) {
  }
`;
