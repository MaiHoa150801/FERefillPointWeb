import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact1.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Liên hệ</h1>
            <p className="font13">
              Chào mừng bạn đến với website chúng tôi!
              <br />
              Hãy liên hệ với chúng tôi nếu bạn có bất kì thắc mắc nào.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Họ và tên:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Tiêu đề:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="font13">Nội dung:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Gửi tin nhắn" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <div >
                  <img src={ContactImg1} alt="office" className="radius6" />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #1f78c7;
  background-color: #1f78c7;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #11436e;
    border: 1px solid #1f78c7;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;