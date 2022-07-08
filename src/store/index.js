import { configureStore } from '@reduxjs/toolkit';

import foodReducer from './food';
import orderReducer from './order';
import cartReducer from './cart';


const store = configureStore({
  reducer: { food: foodReducer, order: orderReducer, cart:cartReducer },
});

export default store;
