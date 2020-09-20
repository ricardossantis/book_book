import React from "react"
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper"
import 'swiper/swiper.scss';
import { useLocation } from "react-router-dom"
import 'swiper/components/navigation/navigation.scss';
import CardExplorer from "./bookExplorer"
import Book from "../book";
SwiperCore.use([Navigation]);
const Carousel = ({ books = [], friends, user }) => {

    const { pathname } = useLocation()
    return (
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={4}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={({ slides }) => console.log(slides)}
        >


            {books.map((book, i) => {
                return (
                    <SwiperSlide key={i}>
                        {/* <CardExplorer book={book} friends={friends} user={user} /> */}
                        <Book book={book}></Book>
                    </SwiperSlide>)
            })}
        </StyledSwiper>

    )
}

export default Carousel

const StyledSwiper = styled(Swiper)`
width: 95vw;
margin-left:5vw;
height: 330px;
padding:35px;
display:flex;
align-items:center;
justify-content:center;
transition:0.2s;
.swiper-slide{
transition:0.3s;

 &:hover ~div{
 transform:translate(-25%)
}
&:hover{
    transform:scale(1.3);
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.3);
    z-index:2;
    border-radius: 2px;
}
}`
