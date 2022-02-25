import React from "react";
// CSS
import '../style/login.css';
import ImageLogin from "../assets/img/ImageLogin.png";
import TopNavbar from "../components/Nav/TopNavbar";
import { Helmet } from "react-helmet";

export default function Login() {
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
                        <h4>ĐĂNG NHẬP</h4>
                    </div>
                    <div className="form-group">
                        <label id="icon" htmlFor="name" />
                        <input type="text" className="form-control item" id="username" placeholder="Tên đăng nhập / Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Mật khẩu" />
                        
                    </div>
                    <div className="form-group">
                        <p> <a href ="/"> Quên mật khẩu ?</a></p>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-block create-account"> Đăng nhập</button>
                    </div>
                    <div className=" register">
                    <p> <a href="/register"> Bạn chưa có tài khoản? Đăng Kí </a></p>
                    </div>
                </form>
                <div className="social-media">
                    <h5>Sign up with social media</h5>
                    <div className="social-icons">
                        <a href="#"><i className="icon-social-facebook" title="Facebook" /></a>
                        <a href="#"><i className="icon-social-google" title="Google" /></a>
                        <a href="#"><i className="icon-social-twitter" title="Twitter" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}


