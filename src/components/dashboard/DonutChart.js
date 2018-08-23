import React, {Component} from 'react'
import { Donut } from 'britecharts-react';
import { connect } from 'react-redux'


class DonutChart extends Component {

    componentDidMount(){
        const {events} = this.props
        var counts = {};
        for (var i = 0; i < events.length; i++) {
            var factors = events.factors1[i];
            counts[factors] = counts[factors] ? counts[factors] + 1 : 1;
          }
          console.log(factors[0])
    }
    
    // var arr = this.props.events;

    
    

    
    




// const d3Selection = require('d3-selection');
// var container = d3Selection.select('.js-chart-container'),
//     donutChart = new Donut();

// if (container.node()) {
//     donutChart
//         .isAnimated(true)
//         .highlightSliceById(2)
//         .width(containerWidth)
//         .height(containerWidth)
//         .externalRadius(containerWidth / 2.5)
//         .internalRadius(containerWidth / 5)
//         .on('customMouseOver', function (data) {
//             legendChart.highlight(data.data.id);
//         })
//         .on('customMouseOut', function () {
//             legendChart.clearHighlight();
//         });

//     donutContainer.datum(dataset).call(donutChart);
//     legendContainer.datum(dataset).call(legendChart);
// }
render(){
    console.log(this.props.events)
    return (
        <div>
            {/* {donutChart} */}
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