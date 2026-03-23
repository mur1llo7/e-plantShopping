/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost} = action.payload; //Destructure product details from the action payload
      const existingItem = state.items.find(item => item.name === name);
      // Check if the item already exist i nthe cart by comparing names
      if (existingItem) {
        // If item alrey exists in the cart, increase its quantity +1 
        existingItem.quantity++;
      } else {
        // If does not exist, add it to the cart with quantity 1
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
      // Find the item in the cart that matches that given name
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;  // If the item is found, update its quantity to the new value
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
