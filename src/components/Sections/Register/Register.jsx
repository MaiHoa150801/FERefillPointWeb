import React from "react";
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, registerUser } from '../../../actions/userAction';
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { isAuthenticated, error } = useSelector((state) => state.user);

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    const { name, email, phone, password, cpassword } = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("preview.png");

    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            enqueueSnackbar("Password length must be atleast 8 characters", { variant: "warning" });
            return;
        }
        if (password !== cpassword) {
            enqueueSnackbar("Password Doesn't Match", { variant: "error" });
            return;
        }
        if (!avatar) {
            enqueueSnackbar("Select Avatar", { variant: "error" });
            return;
        }

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("phone", phone);
        formData.set("password", password);
        formData.set("avatar", avatar);

        dispatch(registerUser(formData));
    }

    const handleDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);

        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    }

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate('/')
        }
    }, [ dispatch, error, isAuthenticated, navigate, enqueueSnackbar]);
    
    return (

        <div>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
                <form onSubmit={handleRegister} encType="multipart/form-data">
                    <div className="form-img">
                        <span> <img className="image" src={ImageLogin} alt="imageregister" /></span>
                        <h4>ĐĂNG KÍ</h4>
                    </div>
                    <div className="form-group">
                        <Avatar
                            alt="Avatar Preview"
                            src={avatarPreview}
                            sx={{ width: 56, height: 56 }}
                        />
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleDataChange}
                            className="hidden"
                        />
                        Choose File
                    </div>

                    <div className="form-group">
                        <input type="text" name="name" className="form-control item" id="full-name" value={name} onChange={handleDataChange} required placeholder="Name " />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email"  className="form-control item" id="email" value={email} onChange={handleDataChange} placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" className="form-control item" id="phone-number" value={phone} onChange={handleDataChange} required placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control item" id="password" value={password} onChange={handleDataChange} required placeholder="Mật khẩu" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="cpassword" className="form-control item" id="confirm-password"  value={cpassword} onChange={handleDataChange} required placeholder="Xác thực mật khẩu" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block create-account"> Đăng kí</button>
                    </div>
                    <div className="Sign-up">
                        <p> <a href="/login"> Bạn đã có tài khoản? Đăng nhập </a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}


