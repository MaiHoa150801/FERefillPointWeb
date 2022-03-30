import axios from 'axios';
import Cookies from 'js-cookie';
const prefixUrl = 'https://be-refill-x8j5d.ondigitalocean.app/api/v1';
export default async function CallAPI(endpoint, method = 'GET', body) {
  const token = await Cookies.get('token');
  const header = token ? { Authorization: `Bearer ${token}` } : null;
  return axios({
    method,
    url: `${prefixUrl}/${endpoint}`,
    data: body,
    headers: header,
  });
}
