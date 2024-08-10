import React from "react";
import BookListItem from "../book-list-item";

import './book-list.css';

const BookList = ({books}) => {
    const bookList = books.map( (book) => {
        const {id, ...bookInfo} = book;
        return <li key={id} ><BookListItem book={bookInfo} /></li>
    });
    return (
        <ul>
            {bookList}
        </ul>
    )
}
export default BookList;