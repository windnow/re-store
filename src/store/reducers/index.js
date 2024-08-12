const loadReducers = (isReal) =>  isReal ? {...require('./real-reducers')} : {...require('./mocks-reducers')};

export const {
    fetchBooks,
    fetchCart,
    addBookToCart,
    removeBookFromCart
} = loadReducers(process.env.REACT_APP_USE_REAL === 'true');
