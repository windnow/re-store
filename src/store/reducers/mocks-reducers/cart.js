import { createAsyncThunk } from "@reduxjs/toolkit";

let mockCart = [];

const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(mockCart);
        }, 1000);
    });
});

const addBookToCart = createAsyncThunk('cart/addBookToCart', async (book) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            mockCart.push(book);
            resolve(book);
        }, 1000);
    })
});

const removeBookFromCart = createAsyncThunk('cart/removeBookFromCart', (bookId) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            mockCart = mockCart.filter( book => book.id !== bookId);
            resolve(bookId);
        }, 1000);
    });
});

export {
    fetchCart,
    addBookToCart,
    removeBookFromCart
};