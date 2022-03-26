import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forgotPasswordReducer, profileReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';
import { newShopReducer, shopsReducer, shopDetailsReducer, shopReducer } from './reducers/shopReducer';
import { newProductReducer, productsReducer} from './reducers/productReducer';
const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    newProduct: newProductReducer,
    // shops: shopsReducer,
    // shopDetails: shopDetailsReducer,
    shop: shopReducer,
    products: productsReducer,
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