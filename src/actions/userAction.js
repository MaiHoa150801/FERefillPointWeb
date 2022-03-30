import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  CLEAR_ERRORS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  ALL_USERS_FAIL,
  ALL_USERS_SUCCESS,
  ALL_USERS_REQUEST,
  CONTACT_LANDING_REQUEST,
  CONTACT_LANDING_SUCCESS,
  CONTACT_LANDING_FAIL,
} from '../constants/userConstants';
import axios from 'axios';
import Cookies from 'js-cookie';
import { getMe } from '../Service/UserService';
// Contact Landing page

export const contactLanding = (name, email, subject, message) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LANDING_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/contact',
      { name, email, subject, message },
      config
    );
    // console.log(data);
    dispatch({
      type: CONTACT_LANDING_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_LANDING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Login User
export const loginUser = (email, password) => async (dispatch) => {
  try {
    var date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    console.log(date);
    dispatch({ type: LOGIN_USER_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/login',
      { email, password },
      config
    );

    await Cookies.set('token', data.token, { expires: date, path: '' });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/register',
      userData,
      config
    );
    Cookies.set('token', data.token, { expires: 900000000, path: '' });
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const token = await Cookies.get('token');
    const header = token ? { Authorization: `Bearer ${token}` } : null;
    // const { data } = await getMe();
    const { data } = await axios.get('https://be-refill-x8j5d.ondigitalocean.app/me', { headers: header });

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: LOAD_USER_FAIL,
    //   payload: error.response.data.message,
    // });
  }
};

// Logout User
export const logoutUser = () => async (dispatch) => {
  try {
    await Cookies.remove('token');
    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User
export const updateProfile = (userData) => async (dispatch) => {
  try {
    const token = await Cookies.get('token');
    const header = token ? { Authorization: `Bearer ${token}` } : null;
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', header
      },
    };

    const { data } = await axios.put(
      'https://be-refill-x8j5d.ondigitalocean.app/me/update',
      userData,
      { headers: header }
    );
    // console.log(data + 'updateprofile');
    // Cookies.set('token', data.token, { expires: 900000000, path: '' });
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    const token = await Cookies.get('token');
    const header = token ? { Authorization: `Bearer ${token}` } : null;

    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      'https://be-refill-x8j5d.ondigitalocean.app/password/update',
      passwords,
      { headers: header }
    );

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    console.log(email);

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/password/forgot',
      { email }
      // config
    );

    console.log(data);
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const sendCode = (email, code) => async (dispatch) => {
  try {
    // dispatch({ type: RESET_PASSWORD_REQUEST });
    // const token = await Cookies.get('token');
    // const header = token ? { Authorization: `Bearer ${token}` } : null;

    // const config = {
    //   headers: header
    // };

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/password/sendcode',
      { email, code }
    );
    console.log(data);
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    // dispatch({
    //   type: RESET_PASSWORD_FAIL,
    //   payload: error.response.data.message,
    // });
  }
};

// Reset Password
export const resetPass = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/password/reset',
      {email, password}
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Users ---ADMIN
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const token = await Cookies.get('token');
    const header = token ? { Authorization: `Bearer ${token}` } : null;
    const { data } = await axios.get(
      'https://be-refill-x8j5d.ondigitalocean.app/admin/users', {headers: header}
    );
    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get User Details ---ADMIN
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://be-refill-x8j5d.ondigitalocean.app/admin/user/${id}`
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User Details ---ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `https://be-refill-x8j5d.ondigitalocean.app/admin/user/${id}`,
      userData,
      config
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User ---ADMIN
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    const { data } = await axios.delete(
      `https://be-refill-x8j5d.ondigitalocean.app/admin/user/${id}`
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
