import React from "react"
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper"
import 'swiper/swiper.scss';
import SearchCard from "../searchCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Book from "../book";



const Carousel = ({ books }) => {

    books = books ? books : [];
    SwiperCore.use([Navigation, Pagination])

    return (
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={3}
            pagination
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={({ slides }) => console.log(slides)}
        >
            <BoxButton>
                <Button>
                    <IoIosArrowBack />
                </Button>
                <Button>
                    <IoIosArrowForward />
                </Button>
            </BoxButton>
            {books.map((book, i) => {
                return (<SwiperSlide

                    key={i}>
                    <Book
                        book={book} />
                </SwiperSlide>)
            })}
        </StyledSwiper>

    )
}

export default Carousel

const BoxButton = styled.div`
position:absolute;
width: 100%;
height: 100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Button = styled.button`
width: 30px;
display:flex;
align-items:center;
justify-content:center;
height: calc(100% - 35px);
background:rgba(0,0,0,0.2);
text-decoration:none;
border:none;

svg{
    width: 50px;
    height: 50px;
}
`


const StyledSwiper = styled(Swiper)`
width: 100vw;
height: 275px;
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
}

`
const Slide = styled.div`
width: 100%;
height: 100%;
display:flex;
align-items:center;
justify-content:center;
transition:0.3s;

`

