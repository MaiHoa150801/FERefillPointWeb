import {
  NEW_SHOP_REQUEST,
  NEW_SHOP_SUCCESS,
  CLEAR_ERRORS,
  NEW_SHOP_FAIL,
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP_FAIL,
  LOAD_SHOP_REQUEST,
} from '../constants/shopConstants';
import { getShop } from '../Service/ShopService';
import axios from 'axios';

// Register User
export const createShop = (shopData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SHOP_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(
      'https://be-refill-x8j5d.ondigitalocean.app/api/v1/salesperson/new',
      shopData,
      config
    );

    dispatch({
      type: NEW_SHOP_SUCCESS,
      payload: data.shop,
    });
  } catch (error) {
    dispatch({
      type: NEW_SHOP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register User
export const LoadShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_SHOP_REQUEST });

    const { data } = await getShop(id);
    dispatch({
      type: LOAD_SHOP_SUCCESS,
      payload: data.salesperson,
    });
  } catch (error) {
    dispatch({
      type: LOAD_SHOP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
