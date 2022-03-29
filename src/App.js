import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './screens/Homepage';
import TopNavbar from './components/Nav/TopNavbar';
import Login from './components/Sections/Login/Login';
import Register from './components/Sections/Register/Register';
import ForgotPassword from './components/Sections/Login/forgot-password';
import ResetPassword from './components/Sections/Login/reset-password';
import NotFound from './components/Sections/NotFound';
import Footer from './components/Sections/Footer';
import ProtectedRoute from './Routes/ProtectedRoute';
import AdminLayout from './screens/AdminLayout';
import { loadUser } from './actions/userAction';
import { useDispatch } from 'react-redux';
import Account from './components/Sections/Account';
import UpdateProfile from './components/Sections/UpdateProfile';
import UpdatePassword from './components/Sections/UpdatePassword';
import RegisterStore from './components/Sections/RegisterStore';
import Dashboard from './components/Admin/Dashboard';
import MainData from './components/Admin/MainData';
import Profile from './components/Sections/Profile';
import ShopRoute from './components/Sections/ShopRoute';
import ProductTable from './components/Sections/ProductTable';
import Order from './components/Sections/Order';
import Voucher from './components/Sections/Voucher';
import Shop from './components/Sections/Register/Shop';
import AddProduct from './components/Sections/AddProduct';
import ShopAdmin from './components/Sections/ShopAdmin';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path="/register/store" element={<RegisterStore />}></Route>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/password/forgot" element={<ForgotPassword />}></Route>
        <Route
          path="/shop/register"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }></Route>
        <Route
          path="/password/reset/:token"
          element={<ResetPassword />}
        ></Route>
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account activeTab="profile">
                <Profile />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/shop/dashboard"
          element={
            <ProtectedRoute>
              <Account activeTab="shop/dashboard">
                <ShopAdmin />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/shop/order"
          element={
            <ProtectedRoute >
              <Account activeTab="shop/order">
                <Order />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/shop/voucher"
          element={
            <ProtectedRoute>
              <Account activeTab="shop/voucher">
                <Voucher />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/shop/product/add"
          element={
            <ProtectedRoute >
              <Account activeTab="shop/product/add">
                <AddProduct />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/account/update"
          element={
            <ProtectedRoute>
              <Account activeTab="account/update">
                <UpdateProfile />
              </Account>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/password/update"
          element={
            <ProtectedRoute>
              <Account activeTab="password/update">
                <UpdatePassword />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute >
              <Dashboard activeTab={0}>
                <MainData />
              </Dashboard>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/shop/product"
          element={
            <ProtectedRoute  >
              <Account activeTab="shop/product">
                <ProductTable />
              </Account>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/saler/dashboard"
          element={
            <ProtectedRoute >
              <AdminLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
