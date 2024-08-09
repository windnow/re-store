import React, { useContext } from "react";
import { BookstoreServiceContext } from "../bookstore-service-context";

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        const bookstoreService = useContext(BookstoreServiceContext);
        return (
            <React.Fragment>
                <Wrapped {...props} bookstoreService={bookstoreService} />
            </React.Fragment>
        )
    }
};

export default 
    withBookstoreService