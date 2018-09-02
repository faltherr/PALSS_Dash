export const FILTER_EVENTS = 'FILTER_EVENTS'
export const CHART_SELECT = 'CHART_SELECT'

export function filterEvents(arr){
    return{
        type: FILTER_EVENTS,
        payload: arr
    }
}

export function chartSelect(value){
    return{
        type: CHART_SELECT,
        payload: value
    }
}