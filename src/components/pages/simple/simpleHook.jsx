import React from "react";
import { useBookstoreBooks } from "../../hooks";

const BookInfoLi = ({book:{name, author}}) => {
    return <li>{name} (<strong>{author}</strong>)</li>
}

const SimpleHook = () => {
    console.log(useBookstoreBooks);
    const getBooks = useBookstoreBooks();

    const list = getBooks().map(
        ({id, ...details}) => <BookInfoLi key={id} book={details}/>
    );

    return (
        <div>
            <h1>Using Custom hooks to get value from context</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default SimpleHook;