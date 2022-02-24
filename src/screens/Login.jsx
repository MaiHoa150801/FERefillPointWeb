import React from "react";
// CSS
import './login.css';
import ImageLogin from "../assets/img/ImageLogin.png";

export default function Login() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>The Easiest Way to Add Input Masks to Your Forms</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            <link rel="stylesheet" href="register.css" />
            <div className="registration-form">
                <form>
                    <div className="form-img">
                        <span> <img className="image" src={ImageLogin} /></span>
                        <h2>ĐĂNG KÍ</h2>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-block create-account">Create Account</button>
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


