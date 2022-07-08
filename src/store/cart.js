import { createSlice } from '@reduxjs/toolkit';
import {serachItem} from '../helper/search'
const initialFoodState = { 
    cartItems: [], 
    totalPrice:null
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: initialFoodState,
  reducers: {
    increment(state,action) {
        const newItem = {
            ...action.payload,
            quantity:1
        }
        state.cartItems.push(newItem)
    },
    decrement(state,action) {
        console.log(action.payload)
        for(let i=0;i<state.cartItems.length;i++){
            if(state.cartItems[i].id == action.payload.id){
                state.cartItems.splice(i,1)
            }
        }
    },
    addQuantity(state,action){
        let item =  serachItem(state.cartItems,'id',action.payload)
        if(item.quantity){
            item.quantity++;
        }
    },
    
    removeQuantity(state,action){
        let item =  serachItem(state.cartItems,'id',action.payload)
        if(item.quantity > 1){
            item.quantity--;
        }
   },
   
   getTotalPrice(state,action){
        let total = 0
        for(let i=0;i<state.cartItems.length;i++){
            total += state.cartItems[i].quantity * state.cartItems[i].price
        }
        state.totalPrice = total
    },
    clear(state,action){
        state.cartItems = []
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;