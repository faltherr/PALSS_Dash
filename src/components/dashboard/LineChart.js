import React, { Component } from 'react'
import { getEventsByTime } from '../../Actions/api_index'
import { connect } from 'react-redux'
// import _ from 'lodash'
import * as d3 from "d3";
import moment from 'moment'

const width = 650;
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
    yScale = d3.scaleLinear().range([height-margin.bottom, margin.top]);

    xAxis = d3.axisBottom().scale(this.xScale)
        .tickFormat(d3.timeFormat('%b, %Y'))
    yAxis = d3.axisLeft().scale(this.yScale)
        .tickFormat(d => `${d}`)

    //Translates the data into svg path commands
    lineGenerator = d3.line()


    // static getDerivedStateFromProps(nextProps, prevState) {
        componentWillReceiveProps(nextProps){
        const { events } = nextProps;

        console.log("Events from next props", events)
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
    
        LineChartData.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
          });
        console.log("Line chart data", LineChartData)

        //1. Update scales 
        // For x get min and max of time
        const timeDomain = d3.extent(LineChartData, d => d.date)
        console.log("timeDomain", timeDomain)
        const countExtent = d3.extent(LineChartData, d=> d.counts)
        console.log("countExtent", countExtent)
        this.xScale.domain(timeDomain)
        this.yScale.domain([0, countExtent[1]])

        //This specifies that we want the x positions to use the specified scale
        this.lineGenerator.x(d => this.xScale(d.date))
        this.lineGenerator.y(d=> this.yScale(d.counts))

        // This generates the string we will pass into the svg path
        const counts = this.lineGenerator(LineChartData)
        console.log(counts)

        this.setState({line:counts})
    }
    
    // This is called when the component finishes its initial calculations to draw the axis
    componentDidUpdate(){
        d3.select(this.refs.xAxis).call(this.xAxis)
        d3.select(this.refs.yAxis).call(this.yAxis)
    }

    render() {
        console.log(this.state.line)
        return (
            <svg width={width} height={height} >
                <path d={this.state.line} fill='none' stroke={'#7C5AFF'} />
                <g className='time-series-axis'>
                    <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
                    <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
                </g>
            </svg>

        )

    }




    ////
}

export default LineDemo


    // // This code block gives a monthly sum of data
    // componentDidUpdate(prevProps) {
    //     // console.log(78534985973479)
    //     // console.log(this.props.events)
    //     const { events } = this.props
    //     if (events.length !== prevProps.events.length) {
    //         let data2 = this.props.events.slice()

    //         data2.forEach(function (arrayItem) {
    //             var x = arrayItem["date"].split("/")
    //             let y = x[0] + '/' + x[2]
    //             // console.log(y)
    //         })

    //         var AccidentsByMonth = d3.nest()
    //             .key(function (d) {
    //                 var x = d["date"].split("/");
    //                 let y = x[0] + '/' + x[2]
    //                 return y
    //             })
    //             .rollup(function (v) { return v.length; })
    //             .entries(data2);

    //         let LineChartData =  AccidentsByMonth.map(data => {
    //             let dataSet = {
    //                 date: moment(data.key, "MM/YY").format("MMMM, YYYY"),
    //                 counts: data.value
    //             }
    //             return dataSet
    //         })

    //         // LineChartData.sort(function (a, b) { return a.date.getTime() - b.date.getTime() })

    //             console.log(JSON.stringify(LineChartData));
    //             // console.log(JSON.stringify(AccidentsByMonth));
    //             this.setState({
    //                 transformedData: LineChartData
    //             })
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     const { transformedData } = nextProps;
    //     if (!transformedData) return;

    //     //update scales
    //     const timeDomain = d3.extent(transformedData, d => d.date)
    //     console.log('Time domain', timeDomain)
    //     const countMax = d3.max(transformedData, d => d.count)
    //     lineChartSetup.xScale.domain(timeDomain)
    //     lineChartSetup.yScale.domain([0, countMax])

    //     lineChartSetup.lineGenerator.x(d => lineChartSetup.xScale(d.date))
    //     lineChartSetup.lineGenerator.y(d => lineChartSetup.yScale(d.counts))
    //     const highs = lineChartSetup.lineGenerator(transformedData)
    //     // Should return a long string we willl pass into the svg path
    //     console.log(highs)
    //     this.setState({ transformedData: highs })

    // }

    // render() {
        // console.log(this.state.transformedData)
        // console.log(lineChartSetup.xScale())
        // return (
        // <div></div>
        //     <svg width={width} height={height}>
        //     <path d={this.state.transformedData.counts} fill='none' stroke={'#7C5AFF'} />

        //     <g>
        //         <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
        //         <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
        //     </g>
        // </svg>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         events: state.reducer.events
//     }
// }

// export default connect(mapStateToProps, { getEventsByTime })(LineDemo)