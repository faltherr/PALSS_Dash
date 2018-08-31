// import React, { Component } from 'react'
// import { Donut } from 'britecharts-react'
// import { connect } from 'react-redux'
// import * as d3 from "d3"
// import colors from 'britecharts/dist/umd/colors.min.js'
// // var _ = require('lodash');

// //Loading spinner stuff
// import {FadeLoader} from 'react-spinners'
// import { css } from 'react-emotion'

// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;

// class DonutChart extends Component {
//     constructor() {
//         super()
//         this.state = {
//             finishedCalculations: false,
//             transformedData: []
//         }
//     }

//     componentDidUpdate(prevProps) {
//         // console.log(colors)
//         const { events } = this.props
//         const { finishedCalculations } = this.state
//         if (events.length && !finishedCalculations) {
//             // console.log("Events in donut chart", events)
//             // console.log(this.props.eventsFiltered)

//             var factorSums = d3.nest()
//                 .key(function(d) { return d.factors1; })
//                 .rollup(function(v) { return v.length; })
//                 .entries(events);
//             // console.log(JSON.stringify(factorSums));

//             const DonutChartData = factorSums.map(factor => {
//                 let data = {
//                     name: factor.key,
//                     quantity: factor.value
//                 }
//                 return data
//             })
//             // console.log('DonutChartData', DonutChartData)
//             this.setState({
//                 transformedData: DonutChartData,
//                 finishedCalculations: true
//             })
//             // console.log('Is data returned?', this.state.transformedData)
//         }
//     }

//     render() {
//         // console.log('Is data returned?', this.state)
//         let { errorMessage } = this.props
//         let { finishedCalculations, transformedData } = this.state
//         return (
//             finishedCalculations
//                 ?
//                 <div>
//                     <Donut data={transformedData} colorSchema={colors.colorSchemas.purple}/>
//                 </div>
//                 :
//                 errorMessage
//                 ?
//                     <div>
//                         Unexpected error loading events
//                     </div>
//                 :
//                 <FadeLoader 
//                 className={override}
//                 color={'#656665'} />

//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         events: state.reducer.events
//     }
// }

// export default connect(mapStateToProps)(DonutChart)