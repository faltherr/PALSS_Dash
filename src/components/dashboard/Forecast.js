import React, { Component } from 'react'
import { fetchWeather } from '../../Actions/weather_fetcher'
import { connect } from 'react-redux'
import Loading from 'react-loading-animation'


class WeatherForecast extends Component {
    // constructor() {
    //     super()
    //     this.setState = {
    //         minTempsArr: []
    //     }
    // }

    componentDidMount() {
        this.props.fetchWeather()
        console.log(this.props.fetchWeather())
    }

    // componentWillReceiveProps(){
    //     console.log("This is the forecast - type", Object.prototype.toString.call(this.props.forecast.list)) // The forecast is an array
    //     console.log("This is the forecast - data", this.props.forecast.list) // The forecast is an object

    //     let tempsArr = this.props.forecast.list.map(element => element.main.temp)
    // }


    // let renderForecast = () => {
    //     let { forecast } = this.props.forecast.list
    //     forecast.length
    //         ?
    //         <div className='forecast'>
    //             {forecast.map(element => {
    //                 return (
    //                     <div>
    //                         <p key={element.id} > {element.main.temp} </p>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //             :
    //         this.props.errorMessage
    //             ?
    //         <div>
    //             Unexpected error loading weather data
    //         </div>
    //             :
    //             <Loading />
    // }


    // renderWeatherForecastArray = () => {
    //     const dayList = this.props.forecast.list.map(element => element.main.temp)
    //     // let forecastTemps = dayList.map(element => element.main.temp)
    //     console.log(dayList)

    // }

    render() {
        console.log(this.props.forecast)
        let {forecast, errorMessage} = this.props      
        return (
            forecast.length
                ?
                <div className='forecast'>
                     {forecast.map(element => {
                         return (
                             <div>
                                 <p key={element.list.id} > {element.list.main.temp} </p>
                             </div>
                         )
                     })}
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
        errorMessage: state.reducer.errorMessage
    }
}

export default connect(mapStateToProps, { fetchWeather })(WeatherForecast)