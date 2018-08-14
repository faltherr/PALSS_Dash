import {GET_EVENTS} from '../Actions/api_index'

let initialState = {
    events: []
}

const FULFILLED = '_FULFILLED'
const PENDING = '_PENDING'
const REJECTED = '_REJECTED'

export default function reducer(state=initialState, action){
    switch (action.type){
        case GET_EVENTS + PENDING:
            return {...state};
        case GET_EVENTS + FULFILLED:
            return{
                ...state,
                events: action.payload.data,
                errorMessage:''
            }
        case GET_EVENTS + REJECTED:
            return{
                ...state,
                events: [],
                errorMessage: action.payload
            }
        default:
            return state;
    }
}