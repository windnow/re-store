import types from '../actions/types'
const initialState = {
    books: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.BOOKS_LOADED:
            return {
                books: action.payload
            };
        default:
            return state;
    }
}
export default reducer;