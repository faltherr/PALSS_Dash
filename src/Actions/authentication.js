import axios from 'axios'

export const GET_USER = "GET_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export function logout() {
    return {
        type: LOGOUT_USER,
        payload: axios.get('/api/logout')
    }
}

export function getUser() {
    console.log("Auth action hit")
    return {
        type: GET_USER,
        payload: axios.get('/api/currentUser')
    }
}