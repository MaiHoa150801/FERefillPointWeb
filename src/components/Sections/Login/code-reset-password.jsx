import React from "react";
// CSS
import '../../../style/code-email.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { clearErrors, sendCode } from '../../../actions/userAction';

export default function CodeForgotPassword() {
	const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

	const [code, setCode] = useState("");
	const { error, message, loading } = useSelector((state) => state.forgotPassword);

	const email = localStorage.getItem("email");
	
	console.log(email);
    // const { error, message, loading } = useSelector((state) => state.forgotPassword);

    const handleCode = (e) => {
        e.preventDefault();
        if (!code) {
            enqueueSnackbar("Mã xác thực không được để trống", { variant: "error" });
            return;
        }
        dispatch(sendCode(email, code));
    }


	return (

		<div>
			<Helmet>
				<link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
			</Helmet>
			<div className="registration-form">
				<form onSubmit={handleCode}>
					<div className="form-img">
						<span> <img className="image" src={ImageLogin} alt="imagecoderesets" /></span>
					</div>
					<div className="form-top-content">
						<h4>Nhập mã xác thực</h4>
					</div>
					<div>
						<div className="form-group">
							<input type="text" className="form-control item" id="code" placeholder=" Mã xác thực" value={code} onChange={(e) => setCode(e.target.value)} />
						</div>
						<div className="form-group">
							<div className="form-group">
								<button type="submit" className="btn btn-block continue">Tiếp tục</button>
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


