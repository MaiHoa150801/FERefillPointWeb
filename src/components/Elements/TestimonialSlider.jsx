import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Đây là một dự án tuyệt vời mà tôi đã cống hiến và tạo ra để bảo vệ môi trường tốt hơn."
            author="Nguyễn Thị Thu"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Hãy luôn đồng hành cùng chúng tôi để cùng nhau tạo ra những lợi ích cho xã hội này."
            author="Lê Thị Mai Hoa"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text=" Bảo vệ môi trường là nghĩa vụ của mỗi công dân và trách nhiệm của toàn xã hội, chúng tôi đang tạo ra một dự án giúp mọi người có thể tái chế nhiều sản phẩm."
            author="Hồ Thị Hươu"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Hãy tham gia với chúng tôi để bảo vệ bản thân và cuộc sống xung quanh bạn. Hãy sử dụng đồ dùng từ vật liệu tái chế bạn nhé. "
            author="Nguyễn Văn Sỷ"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Tiết kiệm và tái sử dụng vật liệu để tránh lãng phí, cải thiện môi trường nơi ta sinh sống."
            author="Lê Ngọc Vĩ"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
