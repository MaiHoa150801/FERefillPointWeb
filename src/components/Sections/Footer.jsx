import React from "react";
import styled from "styled-components";

// Assets
import { MDBFooter } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <MDBFooter style={{background: "#0b093b"}} className="text-center text-white ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Hãy kết nối với chúng tôi nếu bạn cần</span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://accounts.google.com/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/github" className="me-4 text-reset">
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
                Có thể kết nối những người yêu môi trường là vinh hạnh của chúng tôi. 
                "Hãy chung tay góp sức để bảo vệ môi trường, 
                Bảo vệ môi trường chính là bảo vệ cuộc sống, sức khỏe của chúng ta"
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Về chúng tôi</h6>
              <p>
                <a href="#!" className="text-reset">
                  Giới thiệu
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Đối tác
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dự án
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Giúp đỡ
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="fas fa-home me-3"></i> Đà Nẵng, 01/04
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                condongrefill@gmail.com
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
    
  );
}

