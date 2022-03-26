import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
import React from 'react';
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
      <div className="wrapper">
        {/* Sidebar Holder */}
        <nav id="sidebar">
          <div className="sidebar-header flex">
            <h3>{user.name}</h3>
          </div>
          <ul className="list-unstyled components">
            <li className="">
              <Link to="/account" className={`${activeTab === 'profile'} `}>
                <i className="fa fa-home" />
                Tài khoản
              </Link>
            </li>
            <li>
              <Link to="/shop" className={`${activeTab === 'shop'} `}>
                <i className="fa fa-home" />
                Bán hàng
              </Link>
            </li>
            <li>
              <Link
                to="/shop/product"
                className={`${activeTab === 'shop/product'} `}
              >
                <i className="fa fa-link" />
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link
                to="/shop/order"
                className={`${activeTab === 'shop/order'} `}
              >
                <i className="fa fa-paperclip" />
                Đơn đặt hàng
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-send" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
