import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
import styled from "styled-components";
import React from 'react';
import {
  Col,
  Nav,
} from "react-bootstrap";

const Sidebar = ({ activeTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.user);
  console.log(user + 'sidebar account');
  const handleLogout = () => {
    dispatch(logoutUser());
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    navigate('/login');
  };
  return (
    <>
    <Col md = "2">
        <Nav style={{ display: "block", paddingLeft: "10px" }}>
          <NavLink to="/account" className={`nav-link ${activeTab === 'profile'} `}>
            <i className="fa fa-home" />
            Tài khoản
          </NavLink>
          <NavLink to="/shop" className={`nav-link  ${activeTab === 'shop'} `}>
            <i className="fa fa-home" />
            Bán hàng
          </NavLink>
          <NavLink to="/shop/product" className={`nav-link  ${activeTab === 'shop/product'} `}>
            <i className="fa fa-home" />
            Sản phẩm
          </NavLink>
          <NavLink to="/shop/order" className={`nav-link  ${activeTab === 'shop/order'} `}>
            <i className="fa fa-home" />
            Đơn hàng
          </NavLink>
        </Nav>
      </Col>
    </>
  );
};

export default Sidebar;
