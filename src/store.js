import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forgotPasswordReducer, profileReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';
import { newShopReducer, shopsReducer, shopDetailsReducer, shopReducer } from './reducers/shopReducer';

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    // newShop: newShopReducer,
    // shops: shopsReducer,
    // shopDetails: shopDetailsReducer,
    shop: shopReducer,
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