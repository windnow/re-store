import { createAsyncThunk } from "@reduxjs/toolkit";

const mockBooks = [
    {id: 1, title: "1984", author: "George Orwell", price: 4500.0},
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 5525.0},
    {id: 3, title: "The Great Gitsby", author: "F. Scott Fitzgerland", price: 3200.0},
];

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(mockBooks);
        }, 1000);
    });
});

export default fetchBooks;