import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useLocation } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";
import CardExplorer from "./bookExplorer";
import CardSearch from "./bookSearch"

const Carousel = ({
  books = [],
  friends,
  user,
  carousel = [],
  setCurrentBooks = () => { },
  getMoreBooks = () => { },
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
  return (
    <StyledSwiper
      spaceBetween={0}
      slidesPerView={pathname.match("explorar") ? 8 : 3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(evt) => setLoadedBooks(evt.activeIndex)}
      onSwiper={({ slides }) => { }}
    >
      {books.map((book, index) => {
        return (
          <SwiperSlide key={index}>
            {/* {pathname.match("explorar")
              ? <CardExplorer book={book} friends={friends} user={user} />
              : <CardExplorer book={book}  />
            } */}
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};
export default Carousel;
const StyledSwiper = styled(Swiper)`
  width: 95vw;
  margin: auto 0;
  margin-left: 5vw;
  height: 360px;
  padding-top: 50px;
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
      transform: scale(1.3);
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
      z-index: 10;
      border-radius: 2px;
    }
  }
`;