import { createSlice } from '@reduxjs/toolkit';

const initialFoodState = { 
    foodItems: [
        { 
        id:1,
        name: "Dosa", 
        type: "Veg",
        cuisine:"South Indian", 
        availability: ['BREAKFAST','LUNCH'],
        price:50,
        
        }, 
        { 
            id:2,
            name: "Chappathi", 
            type: "Veg",
            cuisine:"North Indian", 
            availability: ['BREAKFAST','LUNCH'],
            price:40,
            
        }, 
        { 
            id:3,
            name: " Chicken", 
            type: "Non-Veg",
            cuisine:" South Indian", 
            availability: ['BREAKFAST','LUNCH'],
            price:100,
        }, 
        { 
            id:4,
            name: "Kalaki", 
            type: "Non-Veg",
            cuisine:" South Indian", 
            availability: ['BREAKFAST','LUNCH'],
            price:20,
        }, 
       
    ],
    foodSelectedState: false 
};

const foodSlice = createSlice({
  name: 'foodItems',
  initialState: initialFoodState,
  reducers: {
    toggleSelectedState(state) {
      state.foodSelectedState = !state.foodSelectedState;
    },
  },
});

export const foodActions = foodSlice.actions;

export default foodSlice.reducer;