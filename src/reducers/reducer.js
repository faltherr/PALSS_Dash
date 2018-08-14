
import {GET_EVENTS, CREATE_EVENT} from '../Actions/api_index'

let initialState = {
    //Events is an array that contains all of the events
    events: [],
    //singleEvent will hold the currently selected event
    singleEvent: null

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
        
        //Create new event
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