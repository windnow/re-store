import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await fetch('/api/books'); // замените на ваш URL
    const books = await response.json();
    return books;
});

export default fetchBooks;