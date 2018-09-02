
import { GET_EVENTS, CREATE_EVENT, DELETE_EVENT, EDIT_EVENT, GET_EVENT_BY_MONTHS } from '../Actions/api_index'
import { FETCH_WEATHER } from '../Actions/weather_fetcher'
import { GET_USER, LOGOUT_USER } from '../Actions/authentication'
import { FILTER_EVENTS } from '../Actions/event_handlers'

let initialState = {
    //Events is an array that contains all of the events
    eventsTruth: [],
    events: [],
    errorMessage: '',
    //singleEvent will hold the currently selected event
    singleEvent: null,
    latitude: '',
    longitude: '',
    id: '',
    date: '',
    tabuildingFilter: '',
    descriptionFiler: '',
    jobtitleFilter: '',
    factors1Filter: '',
    bodyparts: '',
    forecast: [],
    user_data: null,
    initialValues: ''
}

const FULFILLED = '_FULFILLED'
const PENDING = '_PENDING'
const REJECTED = '_REJECTED'
// const ADD_DATE = 'ADD_DATE'
// const ADD_TABLDG = 'ADD_TABLDG'
// const ADD_DESCRP = 'ADD_DESCRP'
// const ADD_JOB = 'ADD_JOB'
// const ADD_FACTOR1 = 'ADD_FACTOR1'
// const ADD_FACTOR2 = 'ADD_FACTOR2'
// const ADD_BODYPARTS = 'ADD_BODYPARTS'

export default function reducer(state = initialState, action) {
    // console.log(11111112312321, action)
    // console.log('The action', action.type)
    console.log('action.payload', action.payload)
    // console.log('action', action)
    switch (action.type) {

        //API Endpoint Events

        //Read all events

        case GET_EVENTS + PENDING:
            return { ...state };
        case GET_EVENTS + FULFILLED:
            return {
                ...state,
                eventsTruth: action.payload.data,
                events: action.payload.data,
                errorMessage: ''
            }
        case GET_EVENTS + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Read events by time before current date

        case GET_EVENT_BY_MONTHS + PENDING:
            return { ...state };
        case GET_EVENT_BY_MONTHS + FULFILLED:
            return {
                ...state,
                eventsTruth: action.payload.data,
                events: action.payload.data,
                errorMessage: ''
            }
        case GET_EVENT_BY_MONTHS + REJECTED:
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

        // GET WEATHER FORECAST
        case FETCH_WEATHER + PENDING:
            return { ...state };

        case FETCH_WEATHER + FULFILLED:
            return {
                ...state,
                forecast: action.payload.data.list,
                errorMessage: ''
            }

        case FETCH_WEATHER + REJECTED:
            return {
                ...state,
                forecast: [],
                errorMessage: action.payload
            }

        // Authentication

        case GET_USER + FULFILLED:
            // console.log('This is the authentication payload', action.payload)
            return { ...state, user_data: action.payload.data }

        case LOGOUT_USER + FULFILLED:
            return { ...state, user_data: null }

        default:
            return state;

        // Event Array Filtera

        case FILTER_EVENTS:
            return { ...state, events: action.payload }
    }
}