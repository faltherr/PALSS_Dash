import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Loading from 'react-loading-animation'


class StackedBarChart extends Component {

         eventData = () => {
            const { events } = this.props
            // console.log("events", events)
            if (events.length) {
                let monthYear = events.map(data => {
                    let date = data['date'].split('/')
                    date.splice(1, 1)
                    data.month = +date[0]
                    data.year = +date[1]
                    data['date'] = date.join('/')
                    return data
                })
                let sorted = _.sortBy(monthYear, ['month', 'year'])
                sorted = _.groupBy(sorted, o => o['date'])

                // console.log('Events sorted', sorted)
                // console.log('Stacked Bar component', events)

                let data3 = []

                for (sorted.prop in sorted) {
                    let object = {
                        Date: sorted.prop,
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
                    sorted[sorted.prop].forEach(o => {
                        if (o.factors1) {
                            if (object[o.factors1]) {
                                object[o.factors1] += 1
                            } else {
                                object[o.factors1] = 1
                            }
                        }
                    })
                    data3.push(object)
                }

                // console.log(data3)
            }
        }

    render() {
        let { events, errorMessage } = this.props
        return (
            events.length
                ?
                    <div id="container">
                        {this.eventData()}
                        {console.log(this.data3)}
                        <BarChart width={600} height={300} data={this.data3}

                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Repetitive Motion/cumulative Trauma" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Slip/Trip/Fall" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </div>
                :
                errorMessage
                    ?
                    <div>
                        Unexpected error loading events
                </div>
                    :
                    <Loading />

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