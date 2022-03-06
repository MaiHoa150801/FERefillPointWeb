import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets

export default function Contact() {


  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <StyleP to="home" smooth={true} offset={-80}>
              <ul className="flexCenter">
                {/* <LogoImg /> */}
                <h1 className="font20 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                  RefillPoint
                </h1>
              </ul>
            </StyleP>
            <StyleP className="whiteColor font13">              
              <h3> Giới Thiệu </h3>
              <h3> Liên Hệ </h3> 
              <h3> Tin Tức </h3>
              {/* © {getCurrentYear()} - <span className="purpleColor font13">RefillPonit</span> All Right Reserved */}
            </StyleP>
            <StyleP className="whiteColor font13">              
              <h3> Theo dõi </h3>
              <ul className="flexCenter " smooth={true} offset={-80}>
                <i className="fa-brands fa-facebook" style={{ marginRight: "15px" }}></i>
                <i className="fa-brands fa-youtube" style={{ marginRight: "15px" }}></i> 
                <i className="fa-brands fa-instagram" style={{ marginRight: "15px" }}></i>
              </ul>
              
              {/* © {getCurrentYear()} - <span className="purpleColor font13">RefillPonit</span> All Right Reserved */}
            </StyleP>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Lên đầu trang
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;