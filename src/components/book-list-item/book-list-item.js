import React from "react";
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {title, author, price, coverImage} = book;
    console.log(coverImage);
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img alt="Book cover" src={coverImage} />
            </div>
            <div className="book-details">
                <button className="btn btn-link book-title">{title}</button>
                <div className="book-author">{author}</div>
                {price && <div className="boo-price">₸: {price}</div>}
                <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;
