// import React, {Component} from 'react'
// import { connect } from 'react-redux'
// import data from './Data_subset'
var _ = require('lodash');
// import * as d3 from "d3"

// class DataDemo extends Component{

//     render(){


//         return(
//             <div>
//                 </div>
//         )
//     }
// }



let data2 = [
    {
        "Incident Date": "1/15/17",
        "ta_bldg": "55-0400",
        "FACTORS1": "Allergic/bodily Reaction",
        "BODY_PARTS": "Left wrist",
        "ACT_DESCR": "Ergonomic related pain."
    },
    {
        "Incident Date": "1/26/17",
        "ta_bldg": "55-0004",
        "Job Title": "TEAMSTER",
        "FACTORS1": "Allergic/bodily Reaction",
        "BODY_PARTS": "No body part injured",
        "ACT_DESCR": "Employee was transported to LANL Occupational Medicine (OM) as precautionary measure and was medically evaluated and returned to work with no restrictions.  This case meets the criteria for a documented case only due to no indication of treatment."
    },
    {
        "Incident Date": "1/8/17",
        "ta_bldg": "03-0261",
        "FACTORS1": "Struck Against/By",
        "BODY_PARTS": "Right wrist"
    },
    {
        "Incident Date": "1/29/17",
        "ta_bldg": "35-0186",
        "Job Title": "RECORDS MANAGEMENT S",
        "FACTORS1": "Lift/Push/Pull",
        "BODY_PARTS": "Leg(s) (above ankle)",
        "ACT_DESCR": "Muscle strain to right leg"
    },
    {
        "Incident Date": "12/7/16",
        "ta_bldg": "03-0261",
        "Job Title": "PROJECT CONTROLS",
        "FACTORS1": "Slip/Trip/Fall",
        "BODY_PARTS": "Forearm(s)"
    },
    {
        "Incident Date": "12/1/16",
        "ta_bldg": "00-1237",
        "Job Title": "PROFESSIONAL STAFF A",
        "FACTORS1": "Slip/Trip/Fall",
        "BODY_PARTS": "Right little finger",
        "ACT_DESCR": "Laceration to 5th finger"
    },
    {
        "Incident Date": "1/12/17",
        "ta_bldg": "15-0313",
        "Job Title": "UNDERGRAD STUDENT ST",
        "FACTORS1": "Slip/Trip/Fall",
        "BODY_PARTS": "Neck",
        "ACT_DESCR": "Injury to back"
    },
    {
        "Incident Date": "1/27/17",
        "ta_bldg": "50-0069",
        "Job Title": "COMPUTER TEC",
        "FACTORS1": "Contact",
        "BODY_PARTS": "Left hand"
    },
    {
        "Incident Date": "1/2/17",
        "ta_bldg": "00-1308",
        "Job Title": "TRAINING COORDINATOR",
        "FACTORS1": "Contact",
        "BODY_PARTS": "Right little finger",
        "ACT_DESCR": "Minor surface cut on right-hand small finger."
    },
    {
        "Incident Date": "12/24/16",
        "ta_bldg": "22-0090",
        "Job Title": "TRAINING SPECIALIST",
        "FACTORS1": "Contact",
        "BODY_PARTS": "Body systems"
    },
    {
        "Incident Date": "5/13/17",
        "ta_bldg": "03-0038",
        "Job Title": "ADMIN GEN",
        "BODY_PARTS": "Body systems"
    }
]

// console.log(data[0].FACTORS1)

var newData;
var incidentSummaryArray = []


// newData = [...data]

// console.log(newData[0]['Incident Date'])

// console.log("Full dataset", newData)

// let monthCountsAll = _.values(_.reduce(newData, function (result, obj) {
//     //   console.log("Date key from the object", obj['Incident Date'])
//     //   console.log(typeof("Type of date:" , obj['Incident Date']))

//     // check to see if the dates are not null and match the MM-DD-YY format
//     if (/^\d{1,2}[\/]\d{1,2}[\/]\d{2}$/.test(obj['Incident Date'])) {
//         obj.count = 1
//         // console.log(obj[0].count)
//         // This give me the month year values
//         var name = obj['Incident Date'].split('/')
//         name = name[0] + ', ' + name[2]

//         // Name of the element
//         // console.log(name)



//         result[name] = {
//             date: name,
//             count: obj.count + (result[name] ? result[name].count : 0),
//             //   factors: obj.FACTORS1
//         };
//         return result;
//     }
// }, {}))

// console.log(monthCountsAll)




// let monthCountsGroupedFactors = _.values(_.reduce(newData, function (result, obj) {
//     //   console.log("Date key from the object", obj['Incident Date'])
//     //   console.log(typeof("Type of date:" , obj['Incident Date']))

//     // check to see if the dates are not null and match the MM-DD-YY format
//     if (/^\d{1,2}[\/]\d{1,2}[\/]\d{2}$/.test(obj['Incident Date'])) {
//         obj.count = 1
//         obj['Repetitive Motion'] = 0
//         obj['Slip/Trip/Fall'] = 0


//         // console.log(obj[0].count)
//         // This give me the unique month year values
//         // This is the unique ID and then I need to sum for each unique factor
//         var name = obj['Incident Date'].split('/')
//         name = name[0] + ', ' + name[2]

        

//         // Name of the element
//         // console.log(name)
//         result[name] = {
//             date: name,
//             count: obj.count + (result[name] ? result[name].count : 0),
//             // 'Repetitive Motion': obj['Repetitive Motion'] + ('Repetitive Motion / cumulative Trauma'),
//             'Slip/Trip/Fall': obj['Slip/Trip/Fall'] + (obj.FACTORS1 == 'Slip / Trip / Fall' ?  1: 0)
//             // 'Voluntary Motions' : 'Voluntary Motions', 
//             // "Contact" : 'Contact',
//             // 'Struck against/By' : 'Struck against/By',
//             // "Lift/Push/Pull" : "Lift/Push/Pull" ,
//             // "Caught In, On, Under Or Between" : "Caught In, On, Under Or Between",
//             // "Bite or sting" : "Bite / sting",
//             // "Allergic/bodily Reaction" : "Allergic/bodily Reaction",
//             // "Exposure" : "Exposure",
//             // "Training / Qualification" : "Training / Qualification",
//             // "Involuntary Motions" : "Involuntary Motions",
//             // "Motor Vehicle Accident" : "Motor Vehicle Accident",
//             // "Hearing Loss/STS" : "Motor Vehicle Accident"
//             //   factors: obj.FACTORS1
//         };
        
//         return result;
//     }
// }, {}))

// console.log(monthCountsGroupedFactors)

// let monthYear = [...data2]

// var monthYear = Object.assign({}, data)

// let sumByMonth = (data) => {
//     data.name = ''
//     for (let i =0; i<data.length; i++){
//         // if (/^\d{1,2}[\/]\d{1,2}[\/]\d{2}$/.test(data['Incident Date']))
//         data.name = data[i]['Incident Date'].split('/')
//         data.name = name[0] + ', ' + name[2]
//     }

// }

// console.log(monthYear[0].FACTORS1==='Repetitive Motion/cumulative Trauma')


// var monthYearData = monthYear.map(function(el) {
//     var o = Object.assign({}, el);
//     o.temporary = o['Incident Date'].split('/');
//     o.date = o.temporary[0] + ', ' + o.temporary[2];
//     delete o.temporary
//     delete o['Incident Date']
//     delete o['Job Title']
//     delete o.ta_bldg
//     delete o.BODY_PARTS
//     delete o.ACT_DESCR
//     o['Repetitive Motion'] = 0
//     o['Slip/Trip/Fall'] = 0
//     o['Voluntary Motions'] = 0
//     o["Contact"] = 0
//     o['Struck against/By'] = 0
//     o["Lift/Push/Pull"] = 0
//     o["Caught In, On, Under Or Between"] = 0
//     o["Bite or sting"] = 0
//     o["Allergic/bodily Reaction"] = 0
//     o["Exposure"] = 0
//     o["Training / Qualification"] = 0
//     o["Involuntary Motions"] = 0
//     o["Motor Vehicle Accident"] = 0
//     o["Hearing Loss/STS"] = 0

    // o.FACTORS1 == "Repetitive Motion / cumulative Trauma" ? o['Repetitive Motion'] ++ 


            // o['Repetitive Motion']: obj['Repetitive Motion'] + ('Repetitive Motion / cumulative Trauma'),
            // o['Slip/Trip/Fall']: obj['Slip/Trip/Fall'] + (obj.FACTORS1 == 'Slip / Trip / Fall' ?  1: 0)
            // o['Voluntary Motions'] : 'Voluntary Motions', 
            // o["Contact"] : 'Contact',
            // o['Struck against/By'] : 'Struck against/By',
            // o["Lift/Push/Pull"] : "Lift/Push/Pull" ,
            // o["Caught In, On, Under Or Between"] : "Caught In, On, Under Or Between",
            // o["Bite or sting"] : "Bite / sting",
            // o["Allergic/bodily Reaction"] : "Allergic/bodily Reaction",
            // o["Exposure"] : "Exposure",
            // o["Training / Qualification"] : "Training / Qualification",
            // o["Involuntary Motions"] : "Involuntary Motions",
            // o["Motor Vehicle Accident"] : "Motor Vehicle Accident",
            // o["Hearing Loss/STS"] : "Motor Vehicle Accident",
    
//     return o;
//   })


//   var groups = _.groupBy(monthYearData, 'date')

//   let incidentDates = _.groupBy(monthYearData, function(monthEvents) {
//     return monthEvents.date;
//   });
  
//   console.log(incidentDates)

//   let factorSum = _.forEach(incidentDates, function(value, key) {
//     incidentDates[key] = _.groupBy(incidentDates[key], function(item) {
//       return item.FACTORS1;
//     });
//   });

//   console.log(factorSum)


//   var result = _.map(groups, function(value, key) {
//     return { 
//       date: key, 
//       factors: _.reduce(value, function(total, monthYearData) { 
//           return total + monthYearData.FACTORS1;
//       }, 0) 
//     };
//   });



// console.log(monthYearData)
// console.log(sumByMonth(monthYear))

// let monthYear = data2.map(data => {
//     let date = data['Incident Date'].split('/')
//     date.splice(1, 1)
//     data.month = +date[0]
//     data.year = +date[1]
//     data['Incident Date'] = date.join('/')
//     return data
// })
// let sorted = _.sortBy(monthYear, ['year', 'month'])
// sorted = _.groupBy(sorted, o => o['Incident Date'])
    
// console.log(sorted)


// let data3 = []

// for (prop in sorted) {
//     let object = {
//         Date: prop,    
//         'Repetitive Motion': 0,
//         'Slip/Trip/Fall': 0,
//         'Voluntary Motions': 0,
//         'Contact': 0,
//         'Struck against/By': 0,
//         'Lift/Push/Pull': 0,
//         'Caught In, On, Under Or Between': 0,
//         'Bite or sting': 0,
//         'Allergic/bodily Reaction': 0,
//         'Exposure': 0,
//         'Training / Qualification': 0,
//         'Involuntary Motions': 0,
//         'Motor Vehicle Accident': 0,
//         'Hearing Loss/STS': 0
//         }
//         sorted[prop].forEach(o => {
//             if(o.FACTORS1){
//                 if(object[o.FACTORS1]){
//                     object[o.FACTORS1] += 1
//                 } else {
//                     object[o.FACTORS1] = 1
//                 }
//             }
//         })
//         data3.push(object)
// }

// console.log(data3)



// Codys solution

let monthYear = data2.map(data => {
    let date = data['Incident Date'].split('/')
    date.splice(1, 1)
    data.month = +date[0]
    data.year = +date[1]
    data['Incident Date'] = date.join('/')
    return data
})
let sorted = _.sortBy(monthYear, ['year', 'month'])
sorted = _.groupBy(sorted, o => o['Incident Date'])
    
console.log(sorted)


let data3 = []

for (prop in sorted) {
    let object = {
        Date: prop,    
        'Repetitive Motion': 0,
        'Slip/Trip/Fall': 0,
        'Voluntary Motions': 0,
        'Contact': 0,
        'Struck against/By': 0,
        'Lift/Push/Pull': 0,
        'Caught In, On, Under Or Between': 0,
        'Bite or sting': 0,
        'Allergic/bodily Reaction': 0,
        'Exposure': 0,
        'Training / Qualification': 0,
        'Involuntary Motions': 0,
        'Motor Vehicle Accident': 0,
        'Hearing Loss/STS': 0
        }

        sorted[prop].forEach(o => {
            if(o.FACTORS1){
                if(object[o.FACTORS1]){
                    object[o.FACTORS1] += 1
                } else {
                    object[o.FACTORS1] = 1
                }
            }
        })
        data3.push(object)
}

console.log(data3)