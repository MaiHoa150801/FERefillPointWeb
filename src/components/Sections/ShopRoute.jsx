import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopAdmin from './ShopAdmin';
import ShopRigister from './ShopRegister';

const ShopRoute = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  return <>{user.role == 'salesperson' ? <ShopAdmin /> : <ShopRigister />}</>;
};
export default ShopRoute;
