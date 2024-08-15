import { createAsyncThunk } from "@reduxjs/toolkit";

const mockBooks = [
    {id: 1, title: "1984", author: "George Orwell", price: 4500.0, coverImage:"https://m.media-amazon.com/images/I/71eWYP9G57L._SL1500_.jpg"},
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 5525.0, coverImage:"https://m.media-amazon.com/images/I/81aY1lxk+9L._SL1500_.jpg"},
    {id: 3, title: "The Great Gitsby", author: "F. Scott Fitzgerland", price: 3200.0, coverImage:"https://m.media-amazon.com/images/I/71Z-sqUZwOL._SL1499_.jpg"},
];

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(mockBooks);
        }, 1000);
    });
});

export default fetchBooks;