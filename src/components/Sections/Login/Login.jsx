import React  from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../../../actions/userAction';
import { useSnackbar } from 'notistack';
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";
import Footer from "../../Sections/Footer";
import TopNavbar from "../../Nav/TopNavbar";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const location = useLocation();

    const {  loading, isAuthenticated, error } = useSelector((state) => state.user);
    console.log(isAuthenticated + "login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email && ! password) {
            enqueueSnackbar("Eamil và password không được để trống", { variant: "error" });
            return;
        }
        
        if (!email ) {
            enqueueSnackbar("Eamil không được để trống", { variant: "error" });
            return;
        }

        if (!password ) {
            enqueueSnackbar("Mật khẩu không được để trống", { variant: "error" });
            return;
        }

        dispatch(loginUser(email, password));
    }

    const redirect = location.search ? location.search.split("=")[1] : "account";

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate(`/${redirect}`)
        }
    }, [  isAuthenticated, redirect, navigate, enqueueSnackbar]);

    return (
        <>
            {loading}
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
                <form id="frm-login" onSubmit={handleLogin}>
                    <div className="form-img">
                        <span> <img className="image" src={ImageLogin} alt="imagelogo" /></span>
                        <h4>ĐĂNG NHẬP</h4>
                    </div>
                    <div className="form-group">
                        <label id="icon" htmlFor="name" />
                        <input id="email" type="email" className="form-control item" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </div>
                    <div className="form-group">
                        <p> <a href="/password/forgot"> Quên mật khẩu ?</a></p>
                    </div>
                    <div className="form-group">
                        <button id ="btn-login" type="submit" className="btn btn-block create-account"> Đăng nhập</button>
                    </div>
                    <div className="register">
                        <p> <a href="/register"> Bạn chưa có tài khoản? Đăng Kí </a></p>
                    </div>
                    <div className="social-media">
                        <h5>Đăng nhập với mạng xã hội</h5>
                        <div className="social-icons">
                            <a href="/"><i className="icon-social-facebook" title="Facebook" /></a>
                            <a href="/"><i className="icon-social-google" title="Google" /></a>
                            <a href="/"><i className="icon-social-twitter" title="Twitter" /></a>
                        </div>
                    </div>
                </form>
            </div>

        </>

    );
};

export default Login;
