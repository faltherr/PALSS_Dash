import React, { Component } from 'react'
import { fetchWeather } from '../../Actions/weather_fetcher'
import { connect } from 'react-redux'
import Loading from 'react-loading-animation'


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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPlSURBVGhD7dlbqFVFHMfxY2ppmqV2UTJRrBBLCbGQbihSiRahdH3QIEEozB6UUgu6Sg+FIooIJYGUWQ9qSCgIRSZKihFGD16y6KaU0cUumml+fycGfgwzO88+s917gT/4PBz9c9aaffaa+c+strNp8byHV3BD+08VzdX41xzAS7gOlcsYvIyv4IPag+cwApVKF9yIJfgePqjdeApXoVI5B+OwHD/AB7ULT2AIWjZDMR192n/6L11xG17DTwgDOolteByXo6Wiv8TX+AtrcT/OR8i5uBOr8CvCoE7gQzyKy9ASeRbhBuV3rMbdOA8hPTAFb0E1of4fbMYM9EPTci18IO4XvI6J6I4Q/dXug/6K+muG+r+hdUpf1wtxxvMtfAApP2IFxkNfyRA9X9OwAccQ6o9iPR5EL5yR6FP3m/4/mq41bWv61jQe0hcPYxOOI9T/gbcxFT3RsGh69RvtCC2sWmBHw3MxHsEH0OQQ6n/DG7gL/gwWyb3wm6vXXjyPa+AZiNnYCk3jof5nrMQd6IZOR22L31AJnyHVHVyBOfgYXu/PoNayujIc/ktL24m5GAzPMCzAp/D6g1iKm9Ch6AL+i2JH4F+Jeul36Oulr9kAePRhPoPPEeo/QYeiOd8v6L6EFjp9Qqn/r5cW0vcxE/3hGYkXoRmwQ6k1EM08yq1I/X8JWkjVCnU6uYFoUQu9l+Z/X/BKWowiyQ3kI3i2I1XXGfuhPq5IcgNZCI+mx1RdirbRpzNBPIRiyQ1EjaFnHlJ1MT2oys1Qe5KqkcPQVqFYcgOJ244HkKpz6sN8ldbMk6qTNSia3EAugkdHSKk6twgedcrfIVU7C0WTGoi2uXEuQVwX0+YrTu7Zmoyi0Z4ivohmqFR8d5iiXiqOFr1UbUPO0+KLaJ+eyj7EtYFW61QXOwmp+itRPFr8/CLzkYpOUrzO6UFPZSxS9XETWSTan/tF7kEq6+B1Tl1uKjq9TNVr81U8X8AvosYtlVfhdU579FQGIVXv52nFshHhAmrbcwvVC/Cbcbnn6gKk6hsSb9Pf1T9kopNGvxmnI9dc4nZFz2RD4itwaN1TqbW61+piD8FrtQtsSLR5Upv+J2odg06A35DTu5Zc1El7bW6dKhJtQXX+Wyuj4DfknkYuOhT32jfR1FwKvyH3GHJ5El6rY6OmRieL2pr6TQU6Hs0lbjj16qLp+QZ+U8HtyEUfwA6oTh2AH4o3LVsQD0KuR63oBdEy3NL+UwskfnCDpr4fqSepQ++GrQuNjDZE8UDeQeWik8G45dCrt0rGz7j0orQ3Khm9bgsDUSNZ2Whd0CuBogdsZ1OdtLWdAuOQrnvx8GoBAAAAAElFTkSuQmCC" alt = "Unavailable"/>
                    <br/>
                    <p className='forecast-temps-text'> Minimum temperature in next 5 days: {minForecast} {'\u00b0'}F </p>
                    <p className='forecast-temps-text'> Freezing temperatures in the forecast </p>
                    <p className='forecast-temps-text'> Potential for increased risk of slips, trips, and falls </p>
                </div>
                )
            } else {
                return(
                <div className='warm-temps-forecast-container'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATgSURBVGhD3VpLbBtFGE4FB3rhcUH0XB4nStbuAwGiIOgDUV4FpKpUBbVSQYgzBxAcOIAQEhJQReKAIjWedeJC0xzaJnLWm5AHNHHS8EihaYEcImiB5mUnaWInw/+P/xDv7u/G611vFj7pk1c7/8x8/84/M//suqZaiHQ2bNiUjN8dSYkoUl3DPSoOJ+7tErdpKfG8ZoijkZSe1gx9Gn4lRy2lT0UM0Q/Xn2lGbG80mbiFmlkjSLkOnvQuEJaA32t2weVTXFNtGPGd2Ca1HgzwSUYM/RwvrHLCiA7WpmLPUDfVg4pzQ09yIvwkhGlbbYe4i7r1FxD3h6CDGa7jalD1ZcZeoe69Y7tp3ghx/AXXWRCEB/j5i4nEDSSnMtzf27QenGjhOgiWomW7WX8TyXIHfArhcGKZoqWikVnLcCpFWKbrSF55gCXwMNdQGFhriIMk8/rAJTbI1akCZjXz2J0ktzSC2Cc80xBnSC6PSLv+HFsxhIRl+WmSbQPmTlVIO6rINCm3QjP13YxxoHyyt0W+ds6QO7ub2XIHMdG0o5DFMsZV5mYzLt853ysvZifkMmbyC3IPOMXZW2iIRpJfwH1m/a2wb3hIxSvj/v4z8lJ2kuRb8fHFQbZOMSFbnt16uuFmcgP2DVN/gTOsFqNAFDq/uEiynXjzx262rp2WtJ9Odqyh33ywMyE7/xojuU5M5+bl0V++U85y9Z0Un5IbuHeooydj5C8f7z4hh6evkmQrrs7PyQ9H0vIhcJSrW4owt8+SG+qsUfKM7Rcf6/qq5Hw4dfk3+UjXl2y91QiOTCkntpiJOzgDjts6GmXz75dUbA9N/ikP9LeydnaWciK3tCg/uNDP1nHDTW3Hbq/ZbDTcwxVyfPf8NyShgPzS0qrx/EBnk/xh6m+qsYLZfE4egT2Dq+OWmB9iuh7lCjl+NDJAMqzogMmLk9huj3sEltmRzS3IQwNJh33lFFFXjuBkHZvLkBwr8Kk/CiFUbH98bIRKV5ABJw6m2yx23gmOuAktJE7K1iujJMuKkcyEfPjr48rOHoaIBZhbr/oUTsVUoeVmshfz/Qt9SpgdfeOX5b6+03Iun6c7BSwB3x7uZdvySjXZEbiEcQar8fWhFORFuYLSInAO1v36PduGV8IhcFI5gfCyIWKocMKL8e34H2ric/W90rYhektR3vvpLEl2AnfsHbBIcPX8IGj/hNxAR2J7OSM3rB8dJulWvDXcw9r7RctJEdN4uDHHGZZLDJ30xBWSX8DPmXEXyZ974ksSSxqPgJtNnLEb7u5plqMz08oJTGPeGDJZO99o6HGSvwLYVHaxxi6JKcnhwaR8ouckW+4no+36DpJfBCnXwagMcBVCSVhpSbkT/6XXQREztodk84BRaWMrhoiwd5wiuaWBryNxNeAaCAUNkYkY8Y0k9/qACi87GggJNVM/QDLLAwxfHdfQWhIzEJJXPv43H3oQ+LkLNp2TfMPBEebsiYo/vS0DnwJ+kOQ6CIIYThWPBAf8VAwNZ+0dVY24OqXES9S9v8BlD0anle3YR+I+UfYS6wWYOkOHabsAH5jW2sVT1E1wwO8TEAKNEMezjKiyWKgrdD4BDBh4Joia4lk8rYGoPlhlJjnRSCzD4yna4sg6zhNhA77ZwD/GgGPqj2d4/e/bDt9RU/MPBxT3SVybuTsAAAAASUVORK5CYII=" alt = "Unavailable"/>
                    <br/>
                    <br/>
                    <p className='forecast-temps-text'> Minimum temperature in next 5 days: {minForecast} {'\u00b0'}F</p>
                    <p className='forecast-temps-text'> The forecast does not indicate an increased environmental hazard </p>
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