import React from "react";
import useBookstoreBooks from "../hooks/get-bookstore-books";
import BookList from '../book-list';

const HomePage = () => {
    const getBooks = useBookstoreBooks();
    const books = getBooks();
    return (
        <div>
            <BookList books={books} />
        </div>
    );
}

export default HomePage;