import React, { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from "./screens/Homepage";
import TopNavbar from "./components/Nav/TopNavbar";
import Login from "./components/Sections/Login/Login";
import Register from "./components/Sections/Register/Register";
import ForgotPassword from "./components/Sections/Login/forgot-password";
import ResetPassword from "./components/Sections/Login/reset-password";
import NotFound from "./components/Sections/NotFound";
import Footer from "./components/Sections/Footer";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminLayout from "./screens/AdminLayout";
import { loadUser } from './actions/userAction';
import { useDispatch } from 'react-redux';
import Account from "./components/Sections/Account";
import UpdateProfile from "./components/Sections/UpdateProfile";
import UpdatePassword from "./components/Sections/UpdatePassword";
import RegisterStore from "./components/Sections/RegisterStore";
import Dashboard from "./components/Admin/Dashboard";
import MainData from "./components/Admin/MainData";
import ProductTable from "./components/Admin/ProductTable";
import Setting from "./components/Sections/Setting";
import Shop from "./components/Sections/Shop";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path="/register/store" element={<RegisterStore />}>
        </Route>
        <Route exact path="/" element={<Homepage />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/password/forgot" element={< ForgotPassword />}>
        </Route>
        <Route path="/password/reset/:token" element={< ResetPassword />}>
        </Route>
        <Route path="/account" element={
          <ProtectedRoute>
            <Account activeTab={0}>
              <Setting />
            </Account>
          </ProtectedRoute>
        } ></Route>
        <Route path="/shop" element={
          <ProtectedRoute>
            <Account activeTab={1}>
              <Shop />
            </Account>
          </ProtectedRoute>
        } ></Route>
        <Route path="/account/update" element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        } ></Route>

        <Route path="/password/update" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } ></Route>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={0}>
              <MainData />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>
        <Route path="/admin/products" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <ProductTable />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>
        <Route path="/saler/dashboard" element={
          <ProtectedRoute isSaler={true}>
            <AdminLayout />
          </ProtectedRoute>
        } ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

