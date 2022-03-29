import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import { MDBFooter } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-white ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Refill Point
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
    // <Wrapper>
    //   <div className="darkBg">
    //     <div className="container">
    //       <InnerWrapper
    //         className="flexSpaceCenter"
    //         style={{ padding: "30px 0" }y
    //       >
    //         <StyleP to="home" smooth={true} offset={-80}>
    //           <ul className="flexCenter">
    //             {/* <LogoImg /> */}
    //             <h1
    //               className="font20 extraBold whiteColor"
    //               style={{ marginLeft: "15px" }}
    //             >
    //               RefillPoint
    //             </h1>
    //           </ul>
    //         </StyleP>
    //         <StyleP className="whiteColor font13">
    //           <h4> Giới Thiệu </h4>
    //           <hr></hr>
    //           <h4> Liên Hệ </h4>
    //           <hr></hr>
    //           <h4> Tin Tức </h4>
    //           {/* © {getCurrentYear()} - <span className="purpleColor font13">RefillPonit</span> All Right Reserved */}
    //         </StyleP>
    //         <StyleP className="whiteColor font13">
    //           <ul className="flexCenter " smooth={true} offset={-80}>
    //             <i
    //               className="fa-brands fa-facebook fa-2x"
    //               style={{ marginRight: "15px" }}
    //             ></i>
    //             <i
    //               className="fa-brands fa-youtube fa-2x"
    //               style={{ marginRight: "15px" }}
    //             ></i>
    //             <i
    //               className="fa-brands fa-instagram fa-2x"
    //               style={{ marginRight: "15px" }}
    //             ></i>
    //           </ul>

    //           {/* © {getCurrentYear()} - <span className="purpleColor font13">RefillPonit</span> All Right Reserved */}
    //         </StyleP>
    //         <Link
    //           className="whiteColor animate pointer font13"
    //           to="home"
    //           smooth={true}
    //           offset={-80}
    //         >
    //           <i class="fa fa-sort-asc fa-5x" aria-hidden="true"></i>
    //         </Link>
    //       </InnerWrapper>
    //     </div>
    //   </div>
    //   <div className="whiteColor font13">
    //     <ul className="flexCenter " smooth={true} offset={-80}>
    //       <i
    //         className="fa-brands fa-facebook fa-2x"
    //         style={{ marginRight: "10px" }}
    //       ></i>
    //       <i
    //         className="fa-brands fa-youtube fa-2x"
    //         style={{ marginRight: "10px" }}
    //       ></i>
    //       <i
    //         className="fa-brands fa-instagram fa-2x"
    //         style={{ marginRight: "10px" }}
    //       ></i>
    //     </ul>
    //   </div>
    // </Wrapper>
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
