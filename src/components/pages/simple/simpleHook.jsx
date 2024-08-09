import React from "react";
import { useBookstoreBooks } from "../../hooks";

const SimpleHook = () => {
    console.log(useBookstoreBooks);
    const getBooks = useBookstoreBooks();

    const list = getBooks().map( (v) => <li>{v}</li>)

    return (
        <div>
            <h1>Using Custom hooks to get value from context</h1>
            <li>
                {list}
            </li>
        </div>
    )
}

export default SimpleHook;