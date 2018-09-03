import axios from 'axios'

const API_root = '/api/'

export const GET_EVENTS = "GET_EVENTS"
export const CREATE_EVENT = "CREATE_EVENTS"
export const DELETE_EVENT = "DELETE_EVENT"
export const EDIT_EVENT = "EDIT_EVENT"
export const GET_EVENT_BY_MONTHS  = "GET_EVENT_BY_MONTHS"

//Read all events in last 6 months

export function getEvents(){
    const url = API_root + 'incidents'
    const request = axios.get(url)
    // console.log('Request', request)

    return{
        type: GET_EVENTS,
        payload: request
    }
}

// Create an event

export function createEvent(props) {
    const url = API_root + 'incidents/new'
    const request = axios.post(url, props)

    return{
        type: CREATE_EVENT,
        payload: request
    }
}

// Delete an event

export function deleteEvent (id){
    const url = API_root + `incidents/${id}`
    const request = axios.delete(url)

    return{
        type: DELETE_EVENT,
        payload: request
    }
}

// Edit an event

export function editEvent (id, props){
    const url = API_root + `incidents/${id}`
    const request = axios.put(url, props)

    return{
        type: EDIT_EVENT,
        payload: request
    }
}

// Expand or shrink events array by user time input

export function getEventsByTime(months, label) {
    console.log('MONTHSSSSSSSS', months)
    console.log('LABEL!!!!!!', label)
    const url =  API_root + `incidents/?months=${encodeURI(months)}`
    const request = axios.get(url)
    return{
        type : GET_EVENT_BY_MONTHS,
        payload: request
    }
}

