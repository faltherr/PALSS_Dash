export const FILTER_EVENTS = 'FILTER_EVENTS'

export function filterEvents(arr){
    return{
        type: FILTER_EVENTS,
        payload: arr
    }
}