import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets

import ClientLogo01 from "../../assets/img/clients/logo01.jpg"
import ClientLogo02 from "../../assets/img/clients/logo02.jpg";
import ClientLogo03 from "../../assets/img/clients/logo03.jpg";
import ClientLogo04 from "../../assets/img/clients/logo04.jpg";
import ClientLogo05 from "../../assets/img/clients/logo05.jpg";
import ClientLogo06 from "../../assets/img/clients/logo06.jpg";
import ClientLogo07 from "../../assets/img/clients/logo07.jpg";
import ClientLogo08 from "../../assets/img/clients/logo08.jpg";
import ClientLogo09 from "../../assets/img/clients/logo09.jpg";
import ClientLogo10 from "../../assets/img/clients/logo10.jpg";


export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo07} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo08} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo09} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo10} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;