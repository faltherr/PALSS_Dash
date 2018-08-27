import React, {Component} from 'react'
// import { Donut } from 'britecharts-react';
import { connect } from 'react-redux'


class PieChart extends Component {

render(){
    console.log(this.props.events)
    return (
        <div>
            PieChart
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        events: state.reducer.events
    }
}

export default connect(mapStateToProps)(DonutChart)
