
import { GET_EVENTS, CREATE_EVENT, DELETE_EVENT, EDIT_EVENT } from '../Actions/api_index'

let initialState = {
    //Events is an array that contains all of the events
    events: [],
    //singleEvent will hold the currently selected event
    singleEvent: null

}

const FULFILLED = '_FULFILLED'
const PENDING = '_PENDING'
const REJECTED = '_REJECTED'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        
        //API Endpoint Events

        //Read all events

        case GET_EVENTS + PENDING:
            return { ...state };
        case GET_EVENTS + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: ''
            }
        case GET_EVENTS + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Create new event
        case CREATE_EVENT + PENDING:
            return { ...state };
        case CREATE_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: ''
            }
        case CREATE_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Delte event
        case DELETE_EVENT + PENDING:
            return { ...state };
        case DELETE_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: ''
            }
        case DELETE_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Edit event
        case EDIT_EVENT + PENDING:
            return { ...state };
        case EDIT_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: ''
            }
        case EDIT_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        default:
            return state;
    }
}