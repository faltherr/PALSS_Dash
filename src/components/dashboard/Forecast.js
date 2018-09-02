import React, { Component } from 'react'
import { fetchWeather } from '../../Actions/weather_fetcher'
import { connect } from 'react-redux'
import Loading from 'react-loading-animation'

//precip icon
// {/* <i class="fas fa-tint"></i> */}
//sun icon
//<i class="fas fa-sun"></i>

class WeatherForecast extends Component {

    componentDidMount() {
        this.props.fetchWeather()
        // console.log(this.props.fetchWeather())
    }

    minTemp = () => {
        let newArr = []
        if (this.props.forecast.length){
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
                    <i className="far fa-snowflake"></i> <p className='forecast-temps-text'> Minimum temperature in next 5 days: {minForecast} {'\u00b0'}F </p>
                    {/* <p className='forecast-temps-text'> Freezing temperatures in the forecast </p>
                    <p className='forecast-temps-text'> Potential for increased risk of slips, trips, and falls </p> */}
                </div>
                )
            } else {
                return(
                <div className='warm-temps-forecast-container'>
                <i className="far fa-thumbs-up"></i>
                    {/* <br/>
                    <br/> */}
                    <p className='forecast-temps-text'> Min. temperature in next 5 days: {minForecast} {'\u00b0'}F</p>
                    {/* <p className='forecast-temps-text'> The forecast does not indicate an increased environmental hazard </p> */}
                </div>
                )
            }
      } else {
          return "Trouble connecting to the external API"
      }
    }

    render() {
        // console.log(this.props.forecast)
        let {forecast, errorMessage} = this.props      
        return (
            forecast.length
                ?
                <div className='forecast'>
                {this.minTemp()}
                     {/* {forecast.map(element => {
                        
                         return (
                             <div key={element.dt}>
                                 <p >  </p>
                             </div>
                         )
                     })} */}
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