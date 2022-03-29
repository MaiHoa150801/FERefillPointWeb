import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopAdmin from './ShopAdmin';
import Shop from './Register/Shop';

const ShopRoute = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  return <>{user.role == 'salesperson' ? <ShopAdmin /> : <Shop />}</>;
};
export default ShopRoute;
