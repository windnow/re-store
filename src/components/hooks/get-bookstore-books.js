import { useContext } from "react";
import { BookstoreServiceContext } from "../bookstore-service-context";

const useBookstoreBooks = () => {
    return useContext(BookstoreServiceContext).getBooks;
}
export default useBookstoreBooks;