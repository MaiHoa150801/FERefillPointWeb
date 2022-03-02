import React from "react";
// Sections
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "../components/Sections/Login/Login";
import AdminLayout from "./AdminLayout";
import Register from "../components/Sections/Register/Register";
import CodeEmail from "../components/Sections/Login/code-email";
import ReferenceRegister from "../components/Sections/Register/Reference-register";
import ForgotPassword from "../components/Sections/Login/forgot-password";
import CodeForgotPassword from "../components/Sections/Login/code-reset-password";
import ResetPassword from "../components/Sections/Login/reset-password";
import ProtectedRoute from "../components/Routes/ProtectedRoute";

export default function Landing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/code-email" element={<CodeEmail />}>
        </Route>
        <Route path="/reference-register" element={<ReferenceRegister />}>
        </Route>
        <Route path="/password/forgot" element={< ForgotPassword />}>
        </Route>
        <Route path="/code-reset-password" element={< CodeForgotPassword />}>
        </Route>
        <Route path="/password/reset/:token" element={< ResetPassword />}>
        </Route>
        {/* <Route path="/admin" element={<AdminLayout />}>
        </Route> */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <AdminLayout />
          </ProtectedRoute>
        } ></Route>
      </Routes>
    </BrowserRouter>
  );
}


