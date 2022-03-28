import CallAPI from './CallApiService';

const getOrder = () => {
  return CallAPI('orders/saler');
};
const updateOrderAsyn = (orderId, data) => {
  return CallAPI(`orders/${orderId}`, 'put', data);
};
export { getOrder, updateOrderAsyn };
