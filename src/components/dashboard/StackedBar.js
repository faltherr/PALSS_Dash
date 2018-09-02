import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Brush } from 'recharts';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// import Loading from 'react-loading-animation'
import moment from 'moment'

//Loading spinner stuff
import { FadeLoader } from 'react-spinners'
import { css } from 'react-emotion'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class StackedBarChart extends Component {
    constructor() {
        super()
        this.state = {
            transformedData: []
        }
    }

    componentDidUpdate(prevProps) {
        const { events } = this.props
        if (events.length !== prevProps.events.length ) {
            // console.log("enevts update", events)

            let eventsClone = _.clone(events)
            let monthYear = eventsClone.map(data => {
                let new_date = data['date'].split('/')
                new_date.splice(1, 1)
                data.month = +new_date[0]
                data.year = +new_date[1]
                data['new_date'] = new_date.join('/')
                return data
            })
            let sorted = _.sortBy(monthYear, ['year', 'month'])
            sorted = _.groupBy(sorted, o => o['new_date'])

            // console.log('Events sorted', sorted)
            // console.log('Stacked Bar component', events)

            let data3 = []
            // var newStateArray = this.state.transformedData.slice();

            for (let prop in sorted) {
                let object = {
                    Date: prop,
                    'Repetitive Motion/cumulative Trauma': 0,
                    'Slip/Trip/Fall': 0,
                    'Voluntary Motions': 0,
                    'Contact': 0,
                    'Struck Against/By': 0,
                    'Lift/Push/Pull': 0,
                    'Caught In, On, Under Or Between': 0,
                    'Bite/sting': 0,
                    'Allergic/bodily Reaction': 0,
                    'Exposure': 0,
                    'Training/Qualification': 0,
                    'Involuntary Motions': 0,
                    'Motor Vehicle Accident': 0,
                    'Hearing Loss/STS': 0
                }
                sorted[prop].forEach(o => {
                    if (o.factors1) {
                        if (object[o.factors1]) {
                            object[o.factors1] += 1
                        } else {
                            object[o.factors1] = 1
                        }
                    }
                })
                data3.push(object)
                // console.log(data3)
                this.setState({
                    transformedData: data3
                })
            }
        }
    }

    render() {
        let { errorMessage } = this.props
        let { transformedData } = this.state
        // console.log(finishedCalculations)
        // console.log(transformedData)
        return (
            transformedData.length
                ?
                <div id="container">
                    {/* {this.eventData()} */}
                    {/* {console.log(this.state.transformedData)} */}
                    <BarChart width={600} height={300} data={transformedData}

                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip className="bar-chart-tooltip" itemStyle={{ position: 'relative', fontSize:10}} labelFormatter={function formatLabel(Label, ) { return moment(Label, 'MM/YY').format('MMMM, YYYY') }} />
                        {/* <Legend verticalAlign="middle" layout="vertical" align="right"/> */}
                        <Bar dataKey="Slip/Trip/Fall" stackId="a" fill=" #39004d" />
                        <Bar dataKey="Repetitive Motion/cumulative Trauma" stackId="a" fill=" #600080" />
                        <Bar dataKey="Contact" stackId="a" fill=" #8600b3" />
                        <Bar dataKey="Voluntary Motions" stackId="a" fill=" #9900cc" />
                        <Bar dataKey="Struck Against/By" stackId="a" fill=" #ac00e6" />
                        <Bar dataKey="Lift/Push/Pull" stackId="a" fill="#cc33ff" />
                        <Bar dataKey="Caught In, On, Under Or Between" stackId="a" fill=" #d24dff" />
                        <Bar dataKey="Bite/sting" stackId="a" fill=" #d966ff" />
                        <Bar dataKey="Allergic/bodily Reaction" stackId="a" fill="#df80ff" />
                        <Bar dataKey="Exposure" stackId="a" fill=" #e699ff" />
                        <Bar dataKey="Training/Qualification" stackId="a" fill="#ecb3ff" />
                        <Bar dataKey="Motor Vehicle Accident" stackId="a" fill="#f2ccff" />
                        <Bar dataKey="Hearing Loss/STS" stackId="a" fill=" #f9e6ff" />
                        <Bar dataKey="Involuntary Motions" stackId="a" fill=" #ffe6ff" />
                        <XAxis dataKey="Date" angle={-45} textAnchor="end" tickFormatter={function formatXAxis(tickItem, ) { return moment(tickItem, 'MM/YY').format('MMM YYYY') }} stroke="white" />
                        <YAxis stroke='white' />
                        {/* <Brush /> */}
                    </BarChart>
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
        events: state.reducer.events
    }
}

export default connect(mapStateToProps)(StackedBarChart)



// ReactDOM.render(
//   <StackedBarChart />,
//   document.getElementById('container')
// );