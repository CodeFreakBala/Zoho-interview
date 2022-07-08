import { createSlice } from '@reduxjs/toolkit';

const initialOrderState = { 
    orderItems: [], 
};

const orderSlice = createSlice({
  name: 'orderItems',
  initialState: initialOrderState,
  reducers: {
    add(state,action) {
        const newItem = {
            order_id:Math.floor( Math.random()*999 ) + 100,
            order_date:new Date().toLocaleDateString(),
            order_time:new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            order_price:action.payload.totalPrice,
            items:[...action.payload.cartItems],
        }
        state.orderItems.push(newItem)
    },
   
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;