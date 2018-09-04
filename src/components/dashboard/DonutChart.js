import React, { Component } from 'react'
import { Donut, Legend, helpers} from 'britecharts-react'
import { connect } from 'react-redux'
import * as d3 from "d3"
import colors from 'britecharts/dist/umd/colors.min.js'
// var _ = require('lodash');

//Loading spinner stuff
import {FadeLoader} from 'react-spinners'
import { css } from 'react-emotion'

// const withResponsiveness = require('../../../node_modules/britecharts-react/src/charts/helpers/withResponsiveness.js').default;
console.log('Responsive container', helpers)
// const ResponsiveLegend = (Legend)

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class DonutChart extends Component {
    constructor() {
        super()
        this.state = {
            transformedData: []
        }
    }

    componentDidMount(){
        const { events } = this.props
        if (events.length) {
            //To add on OR this.state.prevtype doe not equal the prevType
            // console.log("Events in donut chart", events)
            // console.log(this.props.eventsFiltered)

            var factorSums = d3.nest()
                .key(function(d) { return d.factors1; })
                .rollup(function(v) { return v.length; })
                .entries(events);
            // console.log(JSON.stringify(factorSums));

            const DonutChartData = factorSums.map(factor => {
                let data = {
                    name: factor.key,
                    quantity: factor.value
                }
                return data
            })
            // console.log('DonutChartData', DonutChartData)
            this.setState({
                transformedData: DonutChartData
            })
            // console.log('Is data returned?', this.state.transformedData)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(colors)
        const { events } = this.props
        if (events.length !== prevProps.events.length) {
            //To add on OR this.state.prevtype doe not equal the prevType
            // console.log("Events in donut chart", events)
            // console.log(this.props.eventsFiltered)

            var factorSums = d3.nest()
                .key(function(d) { return d.factors1; })
                .rollup(function(v) { return v.length; })
                .entries(events);
            // console.log(JSON.stringify(factorSums));

            const DonutChartData = factorSums.map(factor => {
                let data = {
                    name: factor.key,
                    quantity: factor.value
                }
                return data
            })
            // console.log('DonutChartData', DonutChartData)
            this.setState({
                transformedData: DonutChartData
            })
            // console.log('Is data returned?', this.state.transformedData)
        }
    }

    render() {
        // console.log('Is data returned?', this.state)
        let { errorMessage } = this.props
        let {transformedData } = this.state
        return (
            transformedData.length && !this.props.pendingRequest
                ?
                <div className='donut-and-legend-container'>
                    <Donut data={transformedData} 
                            colorSchema={colors.colorSchemas.purple}
                            externalRadius={80}
                            internalRadius={37}
                            width={200}
                            height={200}
                            />
                    <Legend data={transformedData} 
                            colorSchema={colors.colorSchemas.purple} 
                            isHorizontal={false}
                            markerSize={6}
                            marginRatio={1.8}
                            width={300}
                            height={150}
                            numberFormat={'01d'}
                            />
                </div>
                :
                errorMessage
                ?
                    <div>
                        Unexpected error loading events
                    </div>
                :
                <FadeLoader 
                className={override}
                color={'#656665'} />

        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.reducer.events,
        pendingRequest: state.reducer.pendingRequest
    }
}

export default connect(mapStateToProps)(DonutChart)