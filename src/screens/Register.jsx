import React from "react";
// CSS
import '../style/login.css';
import ImageLogin from "../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";

export default function Register() {
    return (

        <div>
            <Helmet>
                {/*  Link Login */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
            <form>
                <div className="form-img">
                    <span> <img className="image" src={ImageLogin} /></span>
                    <h4>ĐĂNG KÍ</h4>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="username" placeholder="Tên đăng nhập / Email " />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="phone-number" placeholder="Số điện thoại" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" id="password" placeholder="Mật khẩu" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="c-password" placeholder="Xác thực email" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account"> Đăng kí</button>
                </div>
          </form>
          <div className="Sign-up">
            <p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
          </div>
        </div>
      </div>
    );
}


