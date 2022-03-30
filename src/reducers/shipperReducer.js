import {
    NEW_SHIPPER_REQUEST,
    NEW_SHIPPER_SUCCESS,
    CLEAR_ERRORS,
    NEW_SHIPPER_RESET,
    NEW_SHIPPER_FAIL,
    ADMIN_SHIPPERS_FAIL,
    ADMIN_SHIPPERS_REQUEST,
    ADMIN_SHIPPERS_SUCCESS,
    ALL_SHIPPERS_FAIL,
    ALL_SHIPPERS_REQUEST,
    ALL_SHIPPERS_SUCCESS,
    DELETE_SHIPPER_FAIL,
    DELETE_SHIPPER_REQUEST,
    DELETE_SHIPPER_RESET,
    DELETE_SHIPPER_SUCCESS,
    SHIPPER_DETAILS_REQUEST,
    SHIPPER_DETAILS_SUCCESS,
    SHIPPER_DETAILS_FAIL,
    REMOVE_SHIPPER_DETAILS,
    UPDATE_SHIPPER_REQUEST,
    UPDATE_SHIPPER_SUCCESS,
    UPDATE_SHIPPER_FAIL,
    UPDATE_SHIPPER_RESET,
    LOAD_SHIPPER_REQUEST,
    LOAD_SHIPPER_SUCCESS,
    LOAD_SHIPPER_FAIL
} from '../constants/shipperConstants';

// New Product Reducer
export const shipperReducer = (state = { shipper: {} }, { type, payload }) => {
    switch (type) {
        case NEW_SHIPPER_REQUEST:
        case LOAD_SHIPPER_REQUEST:
        case NEW_SHIPPER_SUCCESS:
        case LOAD_SHIPPER_SUCCESS:
            return {
                loading: false,
                shipper: payload,
            };
        case NEW_SHIPPER_FAIL:
            return {
                ...state,
                loading: false,
                shipper: null,
                error: payload,
            };
        case LOAD_SHIPPER_FAIL:
            return {
                loading: false,
                shipper: null,
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

// New Product Reducer
export const newShipperReducer = (state = { shipper: {} }, { type, payload }) => {
    switch (type) {
        case NEW_SHIPPER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_SHIPPER_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                shipper: payload.user,
                
            };
        case NEW_SHIPPER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case NEW_SHIPPER_RESET:
            return {
                ...state,
                success: false,
                loading: true,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
