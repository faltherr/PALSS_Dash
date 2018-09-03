
import { GET_EVENTS, CREATE_EVENT, DELETE_EVENT, EDIT_EVENT, GET_EVENT_BY_MONTHS } from '../Actions/api_index'
import { FETCH_WEATHER, FETCH_DARK_SKY } from '../Actions/weather_fetcher'
import { GET_USER, LOGOUT_USER } from '../Actions/authentication'
import { FILTER_EVENTS, CHART_SELECT, FORM_SUBMIT, RESET_FORM_SUBMIT } from '../Actions/event_handlers'

let initialState = {
    //Events truth is an array that contains all of the events
    eventsTruth: [],
    //Events is directly modified when filtering
    events: [],
    errorMessage: '',
    //Forecast holds the OpenWeatherApi data
    forecast: [],
    //Dark_Sky holds the dark sky api data
    dark_sky: [],
    //User data holds login credentials for registered users
    user_data: null,
    initialValues: '',
    //active chart is used for conditional rendering of the charts in the dashboard
    activeChart: 'stacked_bar',
    //This handles the loading state of my requests to conditionally render a spinner in each component that depends on this data
    pendingRequest: true,
    formSubmited: ''
}

const FULFILLED = '_FULFILLED'
const PENDING = '_PENDING'
const REJECTED = '_REJECTED'

export default function reducer(state = initialState, action) {
    // console.log(11111112312321, action)
    // console.log('The action', action.type)
    console.log('action.payload', action.payload)
    // console.log('action', action)

    switch (action.type) {

        //API Endpoint Events

        //Read all events

        case GET_EVENTS + PENDING:
            return { ...state, pendingRequest: true};
        case GET_EVENTS + FULFILLED:
            return {
                ...state,
                eventsTruth: action.payload.data,
                events: action.payload.data,
                errorMessage: '',
                pendingRequest:false 
            }
        case GET_EVENTS + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Read events by time before current date

        case GET_EVENT_BY_MONTHS + PENDING:
            return { ...state, pendingRequest: true };
        case GET_EVENT_BY_MONTHS + FULFILLED:
            return {
                ...state,
                eventsTruth: action.payload.data,
                events: action.payload.data,
                errorMessage: '',
                pendingRequest:false
            }
        case GET_EVENT_BY_MONTHS + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }


        //Create new event
        case CREATE_EVENT + PENDING:
            return { ...state, pendingRequest: true };
        case CREATE_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: '',
                pendingRequest:false 
            }
        case CREATE_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Delte event
        case DELETE_EVENT + PENDING:
            return { ...state, pendingRequest: true };
        case DELETE_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: '',
                pendingRequest:false 
            }
        case DELETE_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        //Edit event
        case EDIT_EVENT + PENDING:
            return { ...state, pendingRequest: true };
        case EDIT_EVENT + FULFILLED:
            return {
                ...state,
                events: action.payload.data,
                errorMessage: '',
                pendingRequest:false 
            }
        case EDIT_EVENT + REJECTED:
            return {
                ...state,
                events: [],
                errorMessage: action.payload
            }

        // GET WEATHER FORECAST
        case FETCH_WEATHER + PENDING:
            return { ...state, pendingRequest: true };

        case FETCH_WEATHER + FULFILLED:
            return {
                ...state,
                forecast: action.payload.data.list,
                errorMessage: '',
                pendingRequest: false 
            }

        case FETCH_WEATHER + REJECTED:
            return {
                ...state,
                forecast: [],
                errorMessage: action.payload
            }

        // GET DARK SKY FORECAST
            case FETCH_DARK_SKY + PENDING:
                return { ...state, pendingRequest: true };
    
            case FETCH_DARK_SKY + FULFILLED:
                return {
                    ...state,
                    dark_sky: action.payload.data.daily.data,
                    errorMessage: '',
                    pendingRequest:false 
                }
    
            case FETCH_DARK_SKY + REJECTED:
                return {
                    ...state,
                    dark_sky: [],
                    errorMessage: action.payload
                }

        // Authentication

        case GET_USER + FULFILLED:
            // console.log('This is the authentication payload', action.payload)
            return { ...state, user_data: action.payload.data }

        case LOGOUT_USER + FULFILLED:
            return { ...state, 
                    user_data: null,
                    pendingRequest:false  }
        default:
            return state;

        // Event Array Filters

        case FILTER_EVENTS:
            return { ...state, events: action.payload }

        // Chart selection
        case CHART_SELECT:
                return {...state, activeChart: action.payload}

        //Form submit for loading
        case FORM_SUBMIT:
                return {...state, formSubmited:action.payload }
        //RESET submit for loading
        case RESET_FORM_SUBMIT:
                return {...state, formSubmited:action.payload }
    }
}