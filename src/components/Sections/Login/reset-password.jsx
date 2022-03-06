import React from "react";
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";

export default function ResetPassword() {
    return (

        <div>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
            <form>
                <div className="form-img">
                    <span> <img className="image" src={ImageLogin} alt="imagereset"/></span>
                    <h4>Đổi mật khẩu mới</h4>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" id="password" placeholder="Mật khẩu mới" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="c-password" placeholder="Xác thực mật khẩu mới" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account"> Đăng nhập</button>
                </div>
                <div className="Sign-up">
                    <p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
                </div>
          </form>
        </div>
      </div>
    );
}


