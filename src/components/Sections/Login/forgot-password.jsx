import React from "react";
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { clearErrors, forgotPassword } from '../../../actions/userAction';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [email, setEmail] = useState("");

    const { error, message, loading } = useSelector((state) => state.forgotPassword);

    const handleForgot = (e) => {
        e.preventDefault();
        if (!email) {
            enqueueSnackbar("Email không được để trống", { variant: "error" });
            return;
        }
        localStorage.setItem("email", email)
        dispatch(forgotPassword(email));
    }

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (message) {
            enqueueSnackbar(message, { variant: "success" });
            navigate("/password/code", { });
        }
    }, [dispatch, error, message, enqueueSnackbar]);

    return (
        <div>
            {/* {loading} */}
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

            </Helmet>
            <div className="registration-form">
                <form onSubmit={handleForgot}>
                    <div className="form-img">
                        <span> <img className="image" src={ImageLogin} alt="imageforgot" /></span>
                        <h4>Quên mật khẩu</h4>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="email" placeholder="Nhập email của bạn" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block create-account"> Tiếp tục </button>
                    </div>
                    <div className="Sign-up">
                        <p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}


