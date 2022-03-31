import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forgotPasswordReducer, profileReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';
import { newShopReducer, AllShopsReducer, shopDetailsReducer, shopReducer } from './reducers/shopReducer';
import { newProductReducer, productsReducer} from './reducers/productReducer';
import { newShipperReducer, shipperReducer} from './reducers/shipperReducer';

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    newProduct: newProductReducer,
    shop: shopReducer,
    products: productsReducer,
    shipper: shipperReducer,
    newShipper: newShipperReducer,
    shops: AllShopsReducer,
});

let initialState = {
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;