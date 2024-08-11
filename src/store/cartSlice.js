import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный метод для получения списка книг в корзине с сервера
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const response = await fetch('/api/cart'); // замените на ваш URL
    const cart = await response.json();
    return cart;
});

// Асинхронный метод для добавления книги в корзину
export const addBookToCart = createAsyncThunk('cart/addBookToCart', async (book) => {
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

// Асинхронный метод для удаления книги из корзины
export const removeBookFromCart = createAsyncThunk('cart/removeBookFromCart', async (bookId) => {
    const response = await fetch(`/api/cart/${bookId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to remove book from cart');
    }
    return bookId;
});

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

