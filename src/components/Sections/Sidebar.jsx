import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
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
      <Col md="2" >
        <Nav style={{ display: "block", height: "500px", background: "DarkTurquoise", color: "white" }} >
          <NavLink to="/account" className={`nav-link ${activeTab === 'profile'} `}>
            <span><i className="fa fa-home" /></span>
            <span><b> Tài khoản </b></span>
          </NavLink>
          {user.role === 'user' && (
            <NavLink to="/shop/register" className={`nav-link  ${activeTab === 'shop/register'} `}>
              <span> <i className="fas fa-money-check" /></span>
              <span><b> ĐK Bán hàng</b></span>
            </NavLink>
          )}
          {user.role === "salesperson" ? (
            <>
              <NavLink to="/shop/dashboard" className={`nav-link  ${activeTab === 'shop/dashboard'} `}>
                <i className="fa fa-home" />
                <span><b> Quản lý </b></span>
              </NavLink>
              <NavLink to="/shop/product" className={`nav-link  ${activeTab === 'shop/product'} `}>
                <i className="fa fa-home" />
                <span><b> Sản phẩm </b></span>
              </NavLink>
              <NavLink to="/shop/product/add" className={`nav-link  ${activeTab === 'shop/product/add'} `}>
                <i className="fa fa-home" />

                <span><b> Thêm Sản phẩm </b></span>
              </NavLink>
              <NavLink to="/shop/order" className={`nav-link  ${activeTab === 'shop/order'} `}>
                <span> <i className="fas fa-gift" /></span>
                <span> <b> Đơn hàng</b></span>
              </NavLink>
              <NavLink to="/shop/voucher" className={`nav-link  ${activeTab === 'shop/voucher'} `}>
                <i className="fa fa-home" />
                <span><b> Mã giảm giá </b></span>
              </NavLink>
            </>
          ) : (<></>)}
          {user.role === "admin" ? (
            <>
              <NavLink to="/admin/dashboard" className={`nav-link  ${activeTab === 'admin/dashboard'} `}>
                <i className="fa fa-home" />
                <span><b> Trang quản lý </b></span>
              </NavLink>
              <NavLink to="/admin/shippers" className={`nav-link  ${activeTab === 'admin/shippers'} `}>
                <i className="fa fa-home" />
                <span><b> Quản lý  </b></span>
              </NavLink>
              <NavLink to="/admin/shipper/add" className={`nav-link  ${activeTab === 'admin/shipper/add'} `}>
                <i className="fa fa-home" />
                <span><b> Thêm Shipper </b></span>
              </NavLink>
            </>
          ) : (<></>)}
        </Nav>
      </Col>
    </>
  );
};

export default Sidebar;
