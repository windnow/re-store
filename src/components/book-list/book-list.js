import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../store/reducers";

import BookListItem from "../book-list-item";
import Spinner from "../spinner"; 
import ErrorIndicator from "../error-indicator";
import './book-list.css';


const BookList = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector( (state) => state.books)

    useEffect( () => {
        if (status === 'idle') {
            dispatch(fetchBooks());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Spinner />
    }

    if (status === 'failed') {
        return <ErrorIndicator error={"Error..."} errorInfo={error}/>
    }

    const bookList = items.map( (book) => {
        const {id, ...bookInfo} = book;
        return <li key={id}><BookListItem book={bookInfo}/></li>
    });
    return (
        <ul className="book-list">
            {bookList}
        </ul>
    )
}
export default BookList;