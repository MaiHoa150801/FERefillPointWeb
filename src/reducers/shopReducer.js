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
    UPDATE_SHOP_RESET
} from '../constants/shopConstants';

// export const shopsReducer = (state = { shops: [] }, { type, payload }) => {

//     switch (type) {
//         case ALL_SHOPS_REQUEST:
//         case ADMIN_SHOPS_REQUEST:

//         case ALL_SHOPS_SUCCESS:
//             return {
//                 loading: false,
//                 shops: payload.shops,
//                 shopsCount: payload.shopsCount,
//                 resultPerPage: payload.resultPerPage,
//                 filteredProductsCount: payload.filteredProductsCount,
//             };
//         case ADMIN_SHOPS_SUCCESS:
//         case ALL_SHOPS_FAIL:
//         case ADMIN_SHOPS_FAIL:
//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null,
//             };
//         default:
//             return state;
//     }
// }

// export const shopDetailsReducer = (state = { shop: {} }, { type, payload }) => {

//     switch (type) {
//         case SHOP_DETAILS_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };
//         case SHOP_DETAILS_SUCCESS:
//             return {
//                 loading: false,
//                 shop: payload,
//             };
//         case SHOP_DETAILS_FAIL:
//             return {
//                 loading: false,
//                 error: payload,
//             };
//         case REMOVE_SHOP_DETAILS:
//             return {
//                 ...state,
//                 shop: {},
//             };
//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null,
//             };
//         default:
//             return state;
//     }
// }

// New Product Reducer
export const shopReducer = (state = { shop: {} }, { type, payload }) => {
    // switch (type) {
    //     case NEW_SHOP_REQUEST:
    //         return {
    //             ...state,
    //             loading: true,
    //         };
    //     case NEW_SHOP_SUCCESS:
    //         return {
    //             loading: false,
    //             success: payload.success,
    //             shop: payload.shop,
    //         };
    //     case NEW_SHOP_FAIL:
    //         return {
    //             ...state,
    //             loading: false,
    //             error: payload,
    //         };
    //     case NEW_SHOP_RESET:
    //         return {
    //             ...state,
    //             success: false,
    //         };
    //     case CLEAR_ERRORS:
    //         return {
    //             ...state,
    //             error: null,
    //         };
    //     default:
    //         return state;
    // }
    switch (type) {
        case NEW_SHOP_REQUEST:
        // case LOAD_SHOP_REQUEST:
        //     return {
        //         loading: true,
        //     };
        case NEW_SHOP_SUCCESS:
        // case LOAD_SHOP_SUCCESS:
            // return {
            //     success: payload.success
            // };
        case NEW_SHOP_FAIL:
            return {
                ...state,
                loading: false,
                shop: null,
                error: payload,
            };
        // case LOAD_SHOP_FAIL:
        //     return {
        //         loading: false,
        //         shop: null,
        //         error: payload,
        //     }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
