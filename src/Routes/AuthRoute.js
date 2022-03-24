import React from 'react';
import Login from '../components/Sections/Login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminLayout from '../screens/AdminLayout';
import Homepage from '../screens/Homepage';
import Register from '../components/Sections/Register/Register';
import ForgotPassword from '../components/Sections/Login/forgot-password';
import ResetPassword from '../components/Sections/Login/reset-password';
export default function AuthRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin" element={<AdminLayout />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/password/forgot" element={<ForgotPassword />}></Route>
      <Route path="/password/reset/:token" element={<ResetPassword />}></Route>
    </Routes>
  );
}
