import React from "react"
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper"
import 'swiper/swiper.scss';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from "react-icons/bs"

import Book from "../book";
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const Carousel = ({ goBookInfo }) => {

    let { totalItems, items } = goBookInfo

    items = items ? items : [];
    console.log(items)
    return (
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={({ slides }) => console.log(slides)}
        >


            {totalItems !== 0 && items.map((book, i) => {
                return (
                    <SwiperSlide key={i}>
                        <Card>
                            <BoxInfos>
                                <Infos>
                                    <TextBox>
                                        <Title>LIVRO</Title>

                                        <Description>algumas coisas nunca mudam</Description>
                                    </TextBox>
                                    <ButtonBox>
                                        <Button>
                                            <BsBookmarkPlus />
                                        </Button>
                                        <Button>
                                            <BsBookmarkFill />
                                        </Button>
                                        <Button>
                                            <BsBookmarkCheck />
                                        </Button>

                                    </ButtonBox>
                                </Infos>
                                <Arrow>
                                    <button></button>
                                </Arrow>
                            </BoxInfos>

                            <Book book={book} />
                        </Card>
                    </SwiperSlide>)
            })}
        </StyledSwiper>

    )
}

export default Carousel

const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
width: 40px;
height: 20px;
color:black;
background:rgba(200,0,0,0.7);
border:none;
svg{
width: 100%;
height: 100%;
&:hover{
    transform:translate(-40%)
}
}
&:hover{
    width: 60px;
}
`

const Infos = styled.div`
display:flex;
align-items:center;
width:100%
`

const Title = styled.div`
`
const Description = styled.div`

`
const TextBox = styled.div`
flex: 5;
height: 100%;
background:rgba(255,10,200,0.5);
`
const ButtonBox = styled.div`
flex: 1;
background:rgba(200,120,200,0.5);
height: 100%;
display:flex;
align-items:center;
justify-content:center;
flex-flow: column;
`
const Arrow = styled.div`
display:flex;
align-items:center;
justify-content:center;
background:rgba(20,10,200,0.5);
width: 100%;
height: 20px;

`

const Card = styled.div`
position:relative;
border-radius: 2px;
width: 100%;
height: 100%;
background: radial-gradient(rgba(20,20,50,1),rgba(0,0,0,0.8))
`
const BoxInfos = styled.div`
pointer-events:none;
position:absolute;
display:flex;
align-items:center;
justify-content:flex-end;
flex-flow:column;
width: 100%;
height: 100%;
background: rgba(0,120,0,0.2);
z-index:2;
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
