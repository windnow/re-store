import { useContext } from "react";
import { BookstoreServiceContext } from "../../bookstore-service-context";

import './simpleCtx.css';

const SimpleCtx = () => {
    const bookstoreService = useContext(BookstoreServiceContext);
    const { getBooks:b } = bookstoreService;

    const list = b().map( (v) => <li>{v}</li>);

    return (
        <div className="ctx">
            <h1>Using context to get value from context</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}
export default SimpleCtx;