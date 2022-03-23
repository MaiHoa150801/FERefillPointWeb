import {
    NEW_SHOP_REQUEST,
    NEW_SHOP_SUCCESS,
    CLEAR_ERRORS,
    NEW_SHOP_FAIL,
} from '../constants/shopConstants';
import axios from 'axios';

// Register User
export const createShop = (shopData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SHOP_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

        const { data } = await axios.post(
            'http://localhost:8080/api/v1/shop/new',
            shopData,
            config
        );
        console.log(data);

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

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};