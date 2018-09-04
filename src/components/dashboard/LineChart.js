import React, { Component } from 'react'
import * as d3 from "d3";
import { connect } from 'react-redux'

// import { getEventsByTime } from '../../Actions/api_index'
// import { connect } from 'react-redux'
// import _ from 'lodash'
// import moment from 'moment'

//Loading spinner stuff
import { FadeLoader } from 'react-spinners'
import { css } from 'react-emotion'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const width = 680;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class LineDemo extends Component {
    constructor() {
        super()
        this.state = {
            line: []
        }
    }

    // Takes in dates and maps them to x position
    xScale = d3.scaleTime().range([margin.left, width - margin.left]);
    //Takes in counts and maps to y position
    yScale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

    xAxis = d3.axisBottom().scale(this.xScale)
        .tickFormat(d3.timeFormat('%b, %Y'))
    yAxis = d3.axisLeft().scale(this.yScale)
        .tickFormat(d => `${d}`)

    //Translates the data into svg path commands
    lineGenerator = d3.line()


    // static getDerivedStateFromProps(nextProps, prevState) {
    componentWillReceiveProps(nextProps) {
        const { events } = nextProps;

        // console.log("Events from next props", events)
        if (!events) return

        //Updates the received data to LineChartData
        let data2 = events.slice()

        var AccidentsByMonth = d3.nest()
            .key(function (d) {
                var x = d["date"].split("/");
                let y = x[0] + '/' + x[2]
                return y
            })
            .rollup(function (v) { return v.length; })
            .entries(data2);

        let LineChartData = AccidentsByMonth.map(data => {
            let dataSet = {
                // date: moment(data.key, "MM/YY").format("YYYY-MM-DD"),
                date: new Date(data.key),
                counts: data.value
            }
            return dataSet
        })

        LineChartData.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
        // console.log("Line chart data", LineChartData)

        //1. Update scales 
        // For x get min and max of time
        const timeDomain = d3.extent(LineChartData, d => d.date)
        // console.log("timeDomain", timeDomain)
        const countExtent = d3.extent(LineChartData, d => d.counts)
        // console.log("countExtent", countExtent)
        this.xScale.domain(timeDomain)
        this.yScale.domain([0, countExtent[1]])

        //This specifies that we want the x positions to use the specified scale
        this.lineGenerator.x(d => this.xScale(d.date))
        this.lineGenerator.y(d => this.yScale(d.counts))
        this.lineGenerator.curve(d3.curveBasis)

        // This generates the string we will pass into the svg path
        const counts = this.lineGenerator(LineChartData)
        // console.log(counts)

        this.setState({ line: counts })
    }

    // This is called when the component finishes its initial calculations to draw the axis
    componentDidUpdate() {
        d3.select(this.refs.xAxis).call(this.xAxis)
        d3.select(this.refs.yAxis).call(this.yAxis)
    }

    render() {
        // console.log(this.state.line)
        console.log(this.props.activeChart)
        if (this.props.activeChart === 'line_chart') {
            return (
                this.props.pendingRequest && !this.props.events
                ?
                <FadeLoader 
                className={override}
                color={'#656665'} />
                :
                <svg width={width} height={height} >
                    <path d={this.state.line} fill='none' stroke={'#7C5AFF'} />
                    <g className='time-series-axis'>
                        <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
                        <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
                    </g>
                </svg>

            )
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        activeChart: state.reducer.activeChart,
        pendingRequest: state.reducer.pendingRequest
    }
}

export default connect(mapStateToProps)(LineDemo)