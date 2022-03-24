import CallAPI from './CallApiService';

const getMe = () => {
  return CallAPI('me');
};

export { getMe };
