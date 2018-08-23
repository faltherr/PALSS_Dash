const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
import React, {Component} from 'react'
import { connect } from 'react-redux'


class StackedBarChart extends Component{
    constructor(){
        const {events} = this.props
    }

    componentDidMount(){
        if (events.length){
            ∏
        }
    }

	render () {
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="pv" stackId="a" fill="#8884d8" />
       <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
})

}

mapStateToProps(state) {
    return(
    events: state.reducer.events
    )
}

export default connect(mapStateToProps)(StackedBarChart)



// ReactDOM.render(
//   <StackedBarChart />,
//   document.getElementById('container')
// );