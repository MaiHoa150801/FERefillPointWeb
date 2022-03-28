import axios from 'axios';
import Cookies from 'js-cookie';
const prefixUrl = 'http://localhost:8080/api/v1';
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
