import { Shop } from '@mui/icons-material';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { updatePassword } from '../actions/userAction';
import MainData from '../components/Admin/MainData';
import ProductTable from '../components/Admin/ProductTable';
import Account from '../components/Sections/Account';
import NotFound from '../components/Sections/NotFound';
import Setting from '../components/Sections/Setting';
import UpdateProfile from '../components/Sections/UpdateProfile';
import AdminLayout from '../screens/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/Admin/Dashboard';
import Homepage from '../screens/Homepage';
export default function ShopRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route
        path="/account"
        element={
          <Account activeTab={0}>
            <Setting />
          </Account>
        }
      ></Route>
      <Route
        path="/shop"
        element={
          <ProtectedRoute>
            <Account activeTab={1}>
              <Shop />
            </Account>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/account/update"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/password/update"
        element={
          <ProtectedRoute>
            <updatePassword />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={0}>
              <MainData />
            </Dashboard>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <ProductTable />
            </Dashboard>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/saler/dashboard"
        element={
          <ProtectedRoute isSaler={true}>
            <AdminLayout />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
