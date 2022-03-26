import CallAPI from './CallApiService';

const getShop = (id) => {
  return CallAPI(`salesperson/`+ id);
};

export { getShop };