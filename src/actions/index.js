import types from './types'

const booksLoaded = (newBooks) => {
    return {
        type: types.BOOKS_LOADED,
        payload: newBooks
    }
}

export {
    booksLoaded
};