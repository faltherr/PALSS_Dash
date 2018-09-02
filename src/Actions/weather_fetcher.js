import axios from 'axios'

const API_KEY = 'c3aec212608b77670a41f13a3813ff32'

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`

export const FETCH_WEATHER ='FETCH_WEATHER'
export const FETCH_DARK_SKY = 'FETCH_DARK_SKY'

//ID for Los Alamos, NM 5476825
//Change the fetch weather function to be centered on Los Alamos
// units = imperial allows for the data to be formatted to Fahrenheit

export function fetchWeather(){
    const url = `${ROOT_URL}&id=5476825`;
    const request = axios.get(url);

    // console.log('Request:', request)

    return{
        type: FETCH_WEATHER,
        // We are returning the promise as the payload
        payload: request
    };
}

const dark_sky_api_key = '35762496bb47b7a6a5f448e76975d31f'
const latitude = '35.8441'
const longitude = '-106.2872'
const root_dark_sky_url = `https://api.darksky.net/forecast/${dark_sky_api_key}/${latitude},${longitude}`

export function fetchDarkSky() {
    const request_dark_sky = axios.get(`${root_dark_sky_url}`)
    return {
        type: FETCH_DARK_SKY,
        payload: request_dark_sky
    }
}