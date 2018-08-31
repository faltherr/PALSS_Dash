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
                let date = data['date'].split('/')
                date.splice(1, 1)
                data.month = +date[0]
                data.year = +date[1]
                data['date'] = date.join('/')
                return data
            })
            let sorted = _.sortBy(monthYear, ['year', 'month'])
            sorted = _.groupBy(sorted, o => o['date'])

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
                    transformedData: data3,                })
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
                        <Bar dataKey="Slip/Trip/Fall" stackId="a" fill="#3f007d" />
                        <Bar dataKey="Repetitive Motion/cumulative Trauma" stackId="a" fill="#cab2d6" />
                        <Bar dataKey="Contact" stackId="a" fill="#ff7f00" />
                        <Bar dataKey="Voluntary Motions" stackId="a" fill="#fdbf6f" />
                        <Bar dataKey="Struck Against/By" stackId="a" fill="#fb9a99" />
                        <Bar dataKey="Lift/Push/Pull" stackId="a" fill="#33a02c" />
                        <Bar dataKey="Caught In, On, Under Or Between" stackId="a" fill="#b2df8a" />
                        <Bar dataKey="Bite/sting" stackId="a" fill="#1f78b4" />
                        <Bar dataKey="Allergic/bodily Reaction" stackId="a" fill="#a6cee3" />
                        <Bar dataKey="Exposure" stackId="a" fill="#d9d9d9" />
                        <Bar dataKey="Training/Qualification" stackId="a" fill="#b3de69" />
                        <Bar dataKey="Involuntary Motions" stackId="a" fill="#fdb462" />
                        <Bar dataKey="Motor Vehicle Accident" stackId="a" fill="#a65628" />
                        <Bar dataKey="Hearing Loss/STS" stackId="a" fill="#8dd3c7" />
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