import axios from 'axios'

const API_KEY = 'c3aec212608b77670a41f13a3813ff32'

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER ='FETCH_WEATHER'

//Change the fetch weather function to be centered on Los Alamos

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request)

    return{
        type: FETCH_WEATHER,
        // We are returning the promise as the payload
        payload: request
    };
}