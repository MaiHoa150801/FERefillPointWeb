import React from "react";
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";
import { clearErrors, resetPass } from '../../../actions/userAction';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

export default function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const email = localStorage.getItem("email");

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!password) {
            enqueueSnackbar("Hãy nhập mật khẩu của bạn", { variant: "error" });
            return;
        }
        if (!cpassword) {
            enqueueSnackbar("Hãy nhập xác thực mật khẩu của bạn", { variant: "error" });
            return;
        }
        if (password != cpassword) {
            enqueueSnackbar("2 mật khẩu không giống nhau", { variant: "error" });
            return;
        }
        dispatch(resetPass(email, password));
    }

    return (

        <div>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
            <form onSubmit={handleResetPassword}>
                <div className="form-img">
                    <span> <img className="image" src={ImageLogin} alt="imagereset"/></span>
                    <h4>Đổi mật khẩu mới</h4>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" id="password" placeholder="Mật khẩu mới" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="c-password" placeholder="Xác thực mật khẩu mới" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account"> Đăng nhập</button>
                </div>
                <div className="Sign-up">
                    <p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
                </div>
          </form>
        </div>
      </div>
    );
}


