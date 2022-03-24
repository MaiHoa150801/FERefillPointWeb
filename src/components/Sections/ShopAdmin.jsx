import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSnackbar } from 'notistack';
import Avatar from '@mui/material/Avatar';
import { clearErrors, createShop } from '../../actions/shopAction';

const ShopAdmin = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.shop);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const [logo, setLogo] = useState('');
  const [logoPreview, setLogoPreview] = useState('preview.png');

  const [shop, setShop] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    latitude: '',
    longitude: '',
    description: '',
  });

  const { name, email, phone, address, latitude, longitude, description } =
    shop;

  const newShop = (e) => {
    e.preventDefault();

    // required field checks
    if (!name) {
      enqueueSnackbar('Vui lòng nhập tên', { variant: 'warning' });
      return;
    }
    if (!phone) {
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

    formData.set('name', name);
    formData.set('phone', phone);
    formData.set('email', email);
    formData.set('address', address);
    formData.set('latitude', latitude);
    formData.set('longitude', longitude);
    formData.set('description', description);
    formData.set('logo', logo);

    dispatch(createShop(formData));
  };

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
      setShop({ ...shop, [e.target.name]: e.target.value });
    }
  };

  console.log(user + 'account');

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Cửa hàng của bạn đã được tạo.', { variant: 'success' });
      navigate('/shop/product');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      {isAuthenticated}
      <div id="content" className="flex">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8 col-lg-10 col-xl-8 mx-auto">
              <div>
                <h2>Cửa hàng</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAdmin;
