import React from "react";
// CSS
import '../style/code-email.css';
import ImageLogin from "../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";

export default function CodeForgotPassword() {
    return (

        <div>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
							<form>
								<div className="form-img">
									<span> <img className="image" src={ImageLogin}/></span>
								</div>
								<div className="form-top-content">
									<h4>Nhập mã xác thực</h4>
								</div>
								<div>
									<div className="form-group">
										<input type="text" className="form-control item" id="code-email" placeholder=" Mã xác thực" />
									</div>
									<div className="form-group">
										<div className="form-group">
											<button type="button" className="btn btn-block continue">Tiếp tục</button>
										</div>
									</div>
								</div>
								<div className="Sign-up">
								<p><a href="/login">Đã có tài khoản! Đăng nhập</a> </p>
							</div>
							</form>
          </div>
        </div>
    );
}


