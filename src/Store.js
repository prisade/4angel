import { combineReducers } from 'redux';
import login from 'modules/login/slices/LoginSlice';
import products from 'modules/ecommerce/stores/slices/ProductsSlice';
import cart from 'modules/ecommerce/basket/slices/ItemSlice';
import orders from 'modules/ecommerce/orders/slices/OrderSlice';
import sample1 from 'modules/anothermodule1/slices/SampleComponentSlice';
import sample2 from 'modules/anothermodule2/slices/SampleComponentSlice2';

export const rootReducer = combineReducers({
    login,
    products,
    cart,
    orders,
    sample1,
    sample2
});

