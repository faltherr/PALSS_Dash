import axios from 'axios'

const API_root = 'http://localhost:4001/api/'

export const GET_EVENTS = "GET_EVENTS"
export const CREATE_EVENT = "CREATE_EVENTS"
// export const GET_EVENTS_FULFILLED = "GET_EVENTS_FULFILLED"
// export const GET_EVENTS_PENDING = "GET_EVENTS_PENDING"
// export const GET_EVENTS_REJECTED = "GET_EVENTS_REJECTED"

//Read all events

export function getEvents(){
    const url = API_root + 'incidents'
    const request = axios.get(url)
    // console.log('Request', request)

    return{
        type: GET_EVENTS,
        payload: request
    }
}

export function createEvent(props) {
    const request = axios.post(`${API_root}incidents/new`, props)

    return{
        type: CREATE_EVENT,
        payload: request
    }
}