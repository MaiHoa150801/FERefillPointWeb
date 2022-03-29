import CallAPI from './CallApiService';

const getVouchers = () => {
  return CallAPI('vouchers/saler');
};
const createVouchers = (data) => {
  return CallAPI('vouchers', 'post', data);
};
const updateVoucher = (voucherId, data) => {
  return CallAPI(`vouchers/${voucherId}`, 'put', data);
};
const deleteVoucherAsyn = (voucherId) => {
  return CallAPI(`vouchers/${voucherId}`, 'delete');
};
export { getVouchers, createVouchers, updateVoucher, deleteVoucherAsyn };
