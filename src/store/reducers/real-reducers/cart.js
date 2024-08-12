import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const response = await fetch('/api/cart'); // замените на ваш URL
    const cart = await response.json();
    return cart;
});

const addBookToCart = createAsyncThunk('cart/addBookToCart', async (book) => {
    const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('Failed to add book to cart');
    }
    return book;
});

const removeBookFromCart = createAsyncThunk('cart/removeBookFromCart', async (bookId) => {
    const response = await fetch(`/api/cart/${bookId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to remove book from cart');
    }
    return bookId;
});

export {
    fetchCart,
    addBookToCart,
    removeBookFromCart
}