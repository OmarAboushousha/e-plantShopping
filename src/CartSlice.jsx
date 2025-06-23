import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({...item, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        const item = action.payload;
        const newArray = state.items.filter(i => i.name !== item.name);
        state.items = newArray;
    },
    updateQuantity: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity = item.quantity;tem
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
