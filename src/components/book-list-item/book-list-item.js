import React from "react";
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {title, author, price } = book;
    return (
        <React.Fragment>
            <span>{title}</span>
            <span>{author}</span>
            {price && <span>{price}</span>}
        </React.Fragment>
    )
}

export default BookListItem;
