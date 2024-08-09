import React from "react";

const {
    Privider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer 
} = React.createContext();

export {
    BookstoreServiceConsumer, BookstoreServiceProvider
}