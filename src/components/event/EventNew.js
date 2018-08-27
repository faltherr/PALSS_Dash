import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createEvent } from '../../Actions/api_index'
import { connect } from 'react-redux' 
import renderDatePicker from './DatePicker'
import moment from 'moment';
import { Link } from 'react-router-dom'



// let submit = (values) =>{
//     console.log('Submit form values:', values)
// }

let EventFormFunc = props => {
    // Configuration objects
    const { eventdate,
        tabldg,
        jobtitle,
        factors1,
        bodyparts,
        description } = props.fields

    const { handleSubmit } = props

    // console.log(11111, tabldg)
    // console.log(1111111, submit)

    // console.log(7438734834387, createEvent)
    // console.log('Props', props)

    return (
        <div className='new-form-container'>
            <form onSubmit={handleSubmit(createEvent)} className='new-main-form'>
                <h3 className='new-event-form-header'> Record a New Incident </h3>

                <div className='form-group'>
                    <label> Date </label>
                    {/* <Field name="eventdate" type="text" className="form-control" component="input" {...eventdate} autoComplete="none" /> */}
                    <Field
                        name="eventdate"
                        inputValueFormat="MM-DD-YYYY"
                        dateFormat="L"
                        dateFormatCalendar="dddd"
                        fixedHeight
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        normalize={value => (value ? moment(value).format('YYYY-MM-DD') : null)}
                        component={renderDatePicker}
                        {...eventdate}
                    />
                </div>

                <div className='form-group'>
                    <label>TA - BLDG </label>
                    {/* Pass configuration object into the input with {...TaBldg} */}
                    <Field name="tabldg" type="text" className="form-control" component="input" {...tabldg} placeholder='i.e. 03-4300'  inputStyle={{ fontSize: '12px' }} helperText={"Add a location using the two digit TA four digit building designation"}/>
                </div>

                <div className='form-group'>
                    <label>JobTitle </label>
                    <Field name="jobtitle" type="text" className="form-control" component="input" {...jobtitle} />
                </div>

                <div className='form-group'>
                    <label>Factors 1 </label>
                    <Field name="factors1" type="text" className="form-control" component="input" {...factors1} />
                </div>

                {/* <div className='form-group'>
                    <label>Factors 2 </label>
                    <Field name="factors2" type="text" className="form-control" component="input" {...factors2} />
                </div> */}

                <div className='form-group'>
                    <label>Body Parts </label>
                    <Field name="bodyparts" type="text" className="form-control" component="input" {...bodyparts} />
                </div>

                <div className='form-group'>
                    <label>Description </label>
                    <Field name="description" type='textarea' className="form-control" component="input" {...description} />
                </div>
                <Link to ='/Dashboard'>
                <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>
        </div>
    )
}

// function validate (values){
//     const errors = {};
//     if (!values.tabldg){
//         errors.tabldg = 'Enter a Technical Area and Building'
//     }
//     return errors;
// }

let connectedForm = connect(null, { createEvent })(EventFormFunc)
let EventForm = reduxForm({
    //Name the form
    form: 'EventNew',
    //Declare the fields that the form will contain
    fields: ['eventdate',
        'tabldg',
        'jobtitle',
        'factors1',
        'factors2',
        'bodyparts',
        'description']
})(connectedForm)


export default EventForm