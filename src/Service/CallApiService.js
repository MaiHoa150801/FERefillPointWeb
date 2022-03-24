import axios from 'axios';
import Cookies from 'js-cookie';
const prefixUrl = 'http://192.168.56.1:8080/api/v1';
export default async function CallAPI(endpoint, method = 'GET', body) {
  const token = await Cookies.get('token');
  console.log(token);
  const header = { Authorization: `Bearer ${token}` };
  return axios({
    method,
    url: `${prefixUrl}/${endpoint}`,
    data: body,
    headers: header,
  });
}
