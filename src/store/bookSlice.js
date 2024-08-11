import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный метод для получения списка книг с сервера
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await fetch('/api/books'); // замените на ваш URL
    const books = await response.json();
    return books;
});

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default booksSlice.reducer;

