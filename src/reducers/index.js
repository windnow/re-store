import types from '../actions/types'
const initialState = {
    books: [
            {
                id:1,
                title:"Чиполино",
                author:"Джанни Родари"
            },
            {
                id:2,
                title:"Незнайка на Луне",
                author:"Николай Носов"
            },
            {
                id:3,
                title:"Карик и Валя",
                author:"Ян Ларри"
            },
            {
                id:4,
                title:"Стальные пещеры",
                author:"Айзек Азимов"
            }
        ]
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
