import React, { Component } from 'react'
import _ from 'lodash'
import * as d3 from "d3";


var width = 800;
var height = 300;
var margin = { top: 20, bottom: 20, left: 40, right: 40 };
var parseDate = d3.timeParse("Y%m%d")
const green = '#6ED48D'

// Bring in the dataset
var newData;
var dateArr = []



d3.json('http://localhost:4001/api/incidents', function (data) {
    // console.log(237238234878428, data);
    // console.log("Date type:", typeof(data[0].date))
    newData = [...data]

    // console.log("Full dataset", newData)

    let newData2 = _.values(_.reduce(newData, function (result, obj) {
        // console.log("Date key from the object", obj.date)
        // console.log(typeof("Type of date:" , obj.date))

        // check to see if the dates are not null and match the YYYY-MM-DD format
        if (/^\d{4}-\d{2}-\d{2}$/.test(obj.date)) {
            obj.count = 1
            // console.log(obj)
            // This give me the unique month year values
            var name = obj.date.split('-')
            name = name[1] + ', ' + name[0]
            // Name of the element
            // console.log(name)
            result[name] = {
                date: name,
                count: obj.count + (result[name] ? result[name].count : 0)
            };
            return result;
        }
    }, {}))


    // Date parser
    newData2.forEach(d => {
        d.date = d3.timeParse("%m, %Y")(d.date)
        d.date = new Date(d.date) // x
        // dateArr.push(d.date)
        // console.log(d)
    })

    newData2.sort(function (a, b) { return a.date.getTime() - b.date.getTime() })

    console.log(newData2)

    class LineChart extends Component {
        constructor() {
            super()
            state = {
                highs: null
            }

        }

        // scales
        //   xExtent = d3.extent(newData2, d => d.date);
        xScale = d3.scaleTime()
            // .domain(xExtent)
            .range([margin.left, width - margin.right]);

        //   yExtent = d3.extent(newData2, d => d.count);
        //   yMax = d3.max(newData2, d => d.count);
        yScale = d3.scaleLinear()
            // .domain([0, yMax])
            // .range([height - margin.bottom, margin.top]);
            .range([height - margin.bottom, margin.top])

        lineGenerator = d3.line()

        xAxis = d3.axisBottom().scale(this.xScale)
            .tickFormat(d3.timeFormat('%b'))
        yAxis = d3.axisLeft().scale(this.yScale)
            .tickFormat(d => `${d} Count`)

        componentWillReceiveProps(nextProps) {
            const { data } = nextProps;
            if (!data) return;

            //update scales
            const timeDomain = d3.extent(data, d => d.date)
            const countMax = d3.max(data, d => d.count)
            this.xScale.domain(timeDomain)
            this.yScale.domain([0, countMax])

            this.lineGenerator.x(d => this.xScale(d.date))
            this.lineGenerator.y(d => this.yScale(d.count))
            const highs = this.lineGenerator(data)
            // Should return a long string we willl pass into the svg path
            console.log(highs)
            this.setState({ highs })

        }

        componentDidUpdate() {
            d3.select(this.refs.xAxis).call(this.xAxis)
        }

        render() {

            return (
                <svg width={width} height={height}>
                    <path d={this.state.highs} fill='none' stroke={green} />

                    <g>
                        <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
                        <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
                    </g>
                </svg>
            )
        }
    }
}

export default LineChart;