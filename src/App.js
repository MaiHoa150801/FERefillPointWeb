import React from "react";
import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  



  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/password/forgot" element={< ForgotPassword />}>
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

