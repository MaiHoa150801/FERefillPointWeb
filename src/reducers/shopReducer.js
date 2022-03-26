import {
    NEW_SHOP_REQUEST,
    NEW_SHOP_SUCCESS,
    CLEAR_ERRORS,
    NEW_SHOP_RESET,
    NEW_SHOP_FAIL,
    ADMIN_SHOPS_FAIL,
    ADMIN_SHOPS_REQUEST,
    ADMIN_SHOPS_SUCCESS,
    ALL_SHOPS_FAIL,
    ALL_SHOPS_REQUEST,
    ALL_SHOPS_SUCCESS,
    DELETE_SHOP_FAIL,
    DELETE_SHOP_REQUEST,
    DELETE_SHOP_RESET,
    DELETE_SHOP_SUCCESS,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    REMOVE_SHOP_DETAILS,
    UPDATE_SHOP_REQUEST,
    UPDATE_SHOP_SUCCESS,
    UPDATE_SHOP_FAIL,
    UPDATE_SHOP_RESET,
    LOAD_SHOP_REQUEST,
    LOAD_SHOP_SUCCESS,
    LOAD_SHOP_FAIL
} from '../constants/shopConstants';



// New Product Reducer
export const shopReducer = (state = { shop: {} }, { type, payload }) => {
    switch (type) {
        case NEW_SHOP_REQUEST:
        case LOAD_SHOP_REQUEST:
        case NEW_SHOP_SUCCESS:
        case LOAD_SHOP_SUCCESS:
            return {
                loading: false,
                shop: payload,
            };
        case NEW_SHOP_FAIL:
            return {
                ...state,
                loading: false,
                shop: null,
                error: payload,
            };
        case LOAD_SHOP_FAIL:
            return {
                loading: false,
                shop: null,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
