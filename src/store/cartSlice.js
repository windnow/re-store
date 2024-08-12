import { createSlice } from '@reduxjs/toolkit';

import { fetchCart, addBookToCart, removeBookFromCart } from './reducers';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addBookToCart.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(removeBookFromCart.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    }
});

export default cartSlice.reducer;

