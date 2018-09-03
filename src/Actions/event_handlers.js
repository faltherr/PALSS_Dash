export const FILTER_EVENTS = 'FILTER_EVENTS'
export const CHART_SELECT = 'CHART_SELECT'
export const FORM_SUBMIT = 'FORM_SUBMIT'
export const RESET_FORM_SUBMIT = 'RESET_FORM_SUBMIT'

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

export function formSubmit(){
    return{
        type: FORM_SUBMIT,
        payload: 'submitted'
    }
}

export function resetFormSubmit(){
    return{
        type: RESET_FORM_SUBMIT,
        payload: ''
    }
}
