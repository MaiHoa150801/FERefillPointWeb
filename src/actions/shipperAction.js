import {
    NEW_SHIPPER_REQUEST,
    NEW_SHIPPER_SUCCESS,
    CLEAR_ERRORS,
    NEW_SHIPPER_FAIL,
    LOAD_SHIPPER_SUCCESS,
    LOAD_SHIPPER_FAIL,
    LOAD_SHIPPER_REQUEST,
} from '../constants/shipperConstants';
// import { getShop } from '../Service/ShopService';
import axios from 'axios';
import Cookies from 'js-cookie';

// Register User
export const createShipper = (shipperData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_SHIPPER_REQUEST });

        const token = await Cookies.get('token');
        const header = token ? { Authorization: `Bearer ${token}` } : null;

        const { data } = await axios.post(
            'https://be-refill-x8j5d.ondigitalocean.app/admin/shipper/register',
            shipperData,
            { headers: header }
        );
        console.log(data);
        dispatch({
            type: NEW_SHIPPER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: NEW_SHIPPER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Register User
export const userRegister = (shipperData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_SHIPPER_REQUEST });

        const token = await Cookies.get('token');
        const header = token ? { Authorization: `Bearer ${token}` } : null;

        const { data } = await axios.post(
            'https://be-refill-x8j5d.ondigitalocean.app/admin/shipper/register',
            shipperData,
            { headers: header }
        );
        console.log(data);
        dispatch({
            type: NEW_SHIPPER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: NEW_SHIPPER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
