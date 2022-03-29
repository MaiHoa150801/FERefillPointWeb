import React from "react";
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import '../../../style/login.css';
import ImageLogin from "../../../assets/img/ImageLogin.png";
import { Helmet } from "react-helmet";
import Footer from "../../Sections/Footer";
import TopNavbar from "../../Nav/TopNavbar";
import { clearErrors, createShop } from '../../../actions/shopAction';

export default function Shop() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const { loading, success, error } = useSelector((state) => state.shop);

    const { user, isAuthenticated } = useSelector((state) => state.user);
    console.log(user);

    const [logo, setLogo] = useState();
    const [logoPreview, setLogoPreview] = useState('preview.png');

    const [shop, setShop] = useState({
        name: '',
        phone_number: '',
        email: '',
        address: '',
        latitude: '',
        longitude: '',
        description: '',
        account_id: '',
        role: '',
    });

    const { name, email, phone_number, address, latitude, longitude, description } = shop;

    const handleDataChange = (e) => {
        if (e.target.name === 'logo') {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setLogoPreview(reader.result);
                    setLogo(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            // console.log(shop);
            setShop({ ...shop, [e.target.name]: e.target.value });
        }
    };

    const newShop = (e) => {

        e.preventDefault();

        // required field checks
        if (!name) {
            enqueueSnackbar('Vui lòng nhập tên', { variant: 'warning' });
            return;
        }
        if (!phone_number) {
            enqueueSnackbar('Vui lòng nhập số điện thoại', { variant: 'warning' });
            return;
        }
        if (!email) {
            enqueueSnackbar('Vui lòng nhập email', { variant: 'warning' });
            return;
        }
        if (!address) {
            enqueueSnackbar('Vui lòng nhập địa chỉ', { variant: 'warning' });
            return;
        }
        if (!latitude) {
            enqueueSnackbar('Vui lòng nhập kinh độ', { variant: 'warning' });
            return;
        }
        if (!longitude) {
            enqueueSnackbar('Vui lòng nhập vĩ độ', { variant: 'warning' });
            return;
        }
        if (!description) {
            enqueueSnackbar('Vui lòng nhập mô tả', { variant: 'warning' });
            return;
        }
        if (!logo) {
            enqueueSnackbar('Chọn hình ảnh', { variant: 'warning' });
            return;
        }

        const formData = new FormData();
        formData.set('role', user.role);
        formData.set('account_id', user._id);
        formData.set('name', name);
        formData.set('phone_number', phone_number);
        formData.set('email', email);
        formData.set('address', address);
        formData.set('latitude', latitude);
        formData.set('longitude', longitude);
        formData.set('description', description);
        formData.set('logo', logo);
        console.log(formData);

        dispatch(createShop(formData));
    };
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: 'error' });
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar('Cửa hàng của bạn đã được tạo.', { variant: 'success' });
            navigate('/shop/product');
        }
    }, [error, success, dispatch, enqueueSnackbar]);

    return (

        <>
            {/* <TopNavbar /> */}
            {loading}
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="registration-form">
                <form id="frm-register" onSubmit={newShop} encType="multipart/form-data">
                    <div className=" form-img" style={{ "line-height": "0px"}}>
                        <h4>ĐĂNG KÍ SHOP </h4>
                    </div>
                    <div className="form-group" style={{ display: "flex" }}>
                        <Avatar
                            alt="Logo Preview"
                            src={logoPreview}
                            sx={{ width: 56, height: 56 }}
                        />
                        <div className="avatarfield">
                            Chọn hình đại diện
                            <input type="file" name="logo" onChange={handleDataChange} className="hide_file"></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" name="name" className="form-control item" value={name} onChange={handleDataChange} placeholder="Tên trạm refill " />
                    </div>
                    <div className="form-group">
                        <input name="email" className="form-control item" value={email} onChange={handleDataChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input name="address" className="form-control item" value={address} onChange={handleDataChange} placeholder="Địa chỉ" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone_number" className="form-control item" value={phone_number} onChange={handleDataChange} placeholder="Số điện thoại" />
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input type="number" name="latitude" className="form-control item" id="latitude" value={latitude} onChange={handleDataChange} placeholder="Kinh độ" />
                        </div>
                        <div className="form-group">
                            <input type="number" name="longitude" className="form-control item" id="longitude" value={longitude} onChange={handleDataChange} placeholder="Vĩ độ" />
                        </div>
                    </div>
                    <div >
                        <textarea type="text" name="description"  className="item" style={{width: "100%", height: "100px"}} value={description} onChange={handleDataChange} placeholder="Mô tả shop" />
                    </div>
                    <div className="form-group">
                        <button id="btn-register" type="submit" className="btn btn-block create-account"> Đăng kí</button>
                    </div>
                </form>
            </div>
        </>
    );
}


