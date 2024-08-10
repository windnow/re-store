import React from "react";
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {name, author } = book;
    return (
        <React.Fragment>
            <span>{name}</span>
            <span>{author}</span>
        </React.Fragment>
    )
}

export default BookListItem;