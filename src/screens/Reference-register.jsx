import React from "react";
// CSS
import '../style/login.css';
import ImageLogin from "../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";

export default function ReferenceRegister() {
    return (

        <div>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

            </Helmet>
            <div className="registration-form">
						<form>
							<div className="form-img">
								<span> <img className="image" src={ImageLogin} /></span>
								<h5 className="Title">Tham khảo đăng kí</h5>
							</div>
							<div className="form-group">
								<input type="text" className="form-control item" id="username" placeholder="Tên đăng nhập" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control item" id="email" placeholder="Email" />
							</div>
							<div className="form-group">
								Tỉnh / thành:
								<select className=" drop-down ">
									<option value="Đà Nẵng">Đà Nẵng</option>
									<option value="Khác">Khác</option>
								</select>
							</div>
							<div className="form-group">
								<input type="text" className="form-control item" id="address-detail" placeholder="Địa chỉ cụ thể" />
							</div>
							<div className="form-group">
								Bạn là ai?
								<select className=" drop-down ">
									<option value="Buyer">Người Mua</option>
									<option value="Seller">Người bán</option>
								</select>
							</div>
							<div className="form-group">
								<button type="button" className="btn btn-block create-account"> Tiếp tục</button>
							</div>
						</form>
						<div className="Sign-in">
							<p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
						</div>
					</div>
			</div>
    );
}


