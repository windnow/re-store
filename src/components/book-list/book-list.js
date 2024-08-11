import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux"

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

const mapStateToProps = ({books}) => {
  return {books};
}

export default connect(mapStateToProps)(BookList);

