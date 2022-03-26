import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// Components
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';
// Assets
import BurgerIcon from '../../assets/svg/BurgerIcon';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../actions/userAction';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const TopNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [y] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
    enqueueSnackbar('Đăng xuất thành công', { variant: 'success' });
    setTogglePrimaryDropDown(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: '60px' } : { height: '80px' }}
      >
        <NavInner className="container flexSpaceCenter">
          <a className="pointer flexNullCenter" href="/">
            {/* <LogoIcon /> */}
            <h1 style={{ marginLeft: '15px' }} className="font20 extraBold">
              RefillPoint
            </h1>
          </a>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a
                activeClass="active"
                style={{ padding: '10px 15px' }}
                href="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Trang chủ
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                activeClass="active"
                style={{ padding: '10px 15px', color: 'black' }}
                href="#services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Vì sao đong đầy?
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                activeClass="active"
                style={{ padding: '10px 15px', color: 'black' }}
                href="/#projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Chúng tôi
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                activeClass="active"
                style={{ padding: '10px 15px', color: 'black' }}
                href="/#blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Chia sẻ
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                activeClass="active"
                style={{ padding: '10px 15px', color: 'black' }}
                href="/#contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Liên hệ
              </a>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {isAuthenticated === false ? (
              <span>
                <li className="semiBold font15 pointer">
                  <a href="/login" style={{ padding: '10px 30px 10px 0' }}>
                    Đăng nhập
                  </a>
                </li>
              </span>
            ) : (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {user.name && user.name.split(' ', 1)}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {/* {user.role === 'admin' && (
                    <MenuItem onClick={handleClose}> Quản trị viên </MenuItem>
                  )}
                  {user.role === 'saler' && (
                    <MenuItem onClick={handleClose}> Quản lý bán hàng</MenuItem>
                  )} */}
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px', color: 'black' }}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    to="/account"
                  >
                    Tài khoản
                  </Link>
                  <MenuItem onClick={handleClose}>Đơn hàng</MenuItem>
                  <MenuItem onClick={handleClose}>Cửa hàng của bạn</MenuItem>
                  <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
};

export default TopNavbar;

const Wrapper = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
