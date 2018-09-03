import React, { Component } from 'react'
import { fetchWeather, fetchDarkSky } from '../../Actions/weather_fetcher'
import { connect } from 'react-redux'
import Loading from 'react-loading-animation'

class WeatherForecast extends Component {

    componentDidMount() {
        this.props.fetchWeather()
        this.props.fetchDarkSky()
        // console.log(this.props.fetchWeather())
    }

    precipProb = () => {
        let precipPercentArray = []
        let precipTypeArray = []
        if (this.props.dark_sky.length) {
            this.props.dark_sky.map(element => {
                precipPercentArray.push(element.precipProbability * 100)
                return precipPercentArray
            })
            this.props.dark_sky.map(element => {
                precipTypeArray.push(element.precipType)
                return precipTypeArray
            })

        
        let highPrecip = Math.max(...precipPercentArray)
        let highPrecipIndex = precipPercentArray.indexOf(highPrecip)
        let precipType = precipTypeArray[highPrecipIndex]

        if (highPrecip < 20) {
            return (
                <div className='forecast-precip-high'>
                    <div className='forecast-icon-container'>
                    <i className="fas fa-sun"></i>
                    </div>
                    <p className='forecast-precip-text'> {`There is up to a ${highPrecip}% chance of ${precipType} within the next 7 days`} </p>
                </div>
            )
        } else {
            return (
                <div className='forecast-precip-low'>
                    <div className='forecast-icon-container'>
                    <i className="fas fa-tint"></i>
                    </div>
                    <p className='forecast-precip-text'> {`There is up to a ${highPrecip}% chance of ${precipType} within the next 7 days`} </p>
                </div>
            )
        }
    } else {
        return <p className='dark-sky-error-text'> Trouble connecting to the Dark Sky API </p>
    }
    }


    minTemp = () => {
        let newArr = []
        if (this.props.forecast.length) {
            this.props.forecast.map(element => {
                newArr.push(+element.main.temp_min)
                return newArr
            })
            // console.log('NEW ARRAY', newArr)
            let minForecast = Math.min(...newArr)
            // console.log('Array minimum', minForecast)
            if (minForecast < 32) {
                return (
                    <div className='cold-temps-forecast-container'>
                    <div className='forecast-icon-container'>
                        <i className="far fa-snowflake"></i> 
                        </div>
                        <p className='forecast-temps-text'> The min. temperature in the next 5 days is {minForecast} {'\u00b0'}F </p>
                    </div>
                )
            } else {
                return (
                    <div className='warm-temps-forecast-container'>
                    <div className='forecast-icon-container'>
                        <i className="far fa-thumbs-up"></i>
                        </div>
                        <p className='forecast-temps-text'> The min. temperature in the next 5 days is {minForecast} {'\u00b0'}F</p>
                    </div>
                )
            }
        } else {
            return <p> Trouble connecting to the OpenWeather API </p>
        }
    }

    render() {
        // console.log('openweatherapi forecast', this.props.forecast)
        // console.log('dark sky forecast', this.props.dark_sky)
        let { forecast, errorMessage } = this.props
        return (
            forecast.length
                ?
                <div className='forecast-container-sub'>
                    <div className='temp-container'>
                        {this.minTemp()}
                    </div>
                    <div className= 'precip-container'>
                        {this.precipProb()}
                    </div>
                </div>
                :
                errorMessage
                    ?
                    <div>
                        Unexpected error loading weather data
                </div>
                    :
                    <Loading />

        )
    }
}

function mapStateToProps(state) {
    return {
        forecast: state.reducer.forecast,
        errorMessage: state.reducer.errorMessage,
        dark_sky: state.reducer.dark_sky
    }
}

export default connect(mapStateToProps, { fetchWeather, fetchDarkSky })(WeatherForecast)