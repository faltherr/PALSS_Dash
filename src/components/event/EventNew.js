import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createEvent } from '../../Actions/api_index'
import { connect } from 'react-redux'
import renderDatePicker from './DatePicker'
import moment from 'moment';
import { Link } from 'react-router-dom'


let EventFormFunc = props => {
    // Configuration objects
    const { eventdate,
        tabldg,
        jobtitle,
        factors1,
        bodyparts,
        description } = props.fields

    const { handleSubmit } = props

    let onSubmit = (formData) => {
        // console.log("The form's payload", props)
        props.createEvent(formData).then(res => {
            props.history.push('/Dashboard')
        })
    }

    return (

        <div className='new-form-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='new-main-form'>
                <h3 className='new-event-form-header'> Record a New Incident </h3>

                <div className='form-group'>
                    <label> Date </label>
                    {/* <Field name="eventdate" type="text" className="form-control" component="input" {...eventdate} autoComplete="none" /> */}
                    <Field
                        name="eventdate"
                        inputValueFormat="M/D/YYYY"
                        dateFormat="L"
                        dateFormatCalendar="dddd"
                        fixedHeight
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        normalize={value => (value ? moment(value).format('M/D/YY') : null)}
                        component={renderDatePicker}
                        {...eventdate}
                    />
                </div>

                <div className='form-group'>
                    <label>TA - BLDG </label>
                    {/* Pass configuration object into the input with {...TaBldg} */}
                    <Field name="tabldg" type="text" className="form-control" component="input" {...tabldg} placeholder='i.e. 03-4300' />
                </div>

                <div className='form-group'>
                    <label>JobTitle </label>
                    <Field name="jobtitle" type="text" className="form-control" component="select" {...jobtitle} >
                        <option />
                        <option value='PLANNER'> Planner </option>
                        <option value='ARCHITECT'> Architect </option>
                        <option value='STAFF MEMBER'> Staff Member </option>
                        <option value='ENGINEER'> Engineer </option>
                        <option value='GRADUATE STUDENT SA'> Graduate Student </option>
                        <option value='PIPE FITTER'> Pipe Fitter </option>
                        <option value='RESEARCH TEC'> Research Tecnnician </option>
                        <option value='DRIVER'> Driver </option>
                        <option value='MACHINIST'> Machinist </option>
                        <option value='ACCOUNTANT'> Accountant </option>
                        <option value='HEALTH AND SAFETY TE'> Health and Safety Technician </option>
                        <option value='HR ASSISTANT'> HR Assistant </option>
                        <option value='NUCLEAR MATERIALS SP'> Nuclear Materials Specialist </option>
                        <option value='INSPECTOR'> Inspector </option>
                        <option value='PROGRAM DIRECTOR'> Program Director </option>
                    </Field>
                </div>

                <div className='form-group'>
                    <label>Factors 1 </label>
                    <Field name="factors1" type="text" className="form-control" component="input" {...factors1} />
                </div>

                <div className='form-group'>
                    <label>Body Parts </label>
                    <Field name="bodyparts" type="text" className="form-control" component="input" {...bodyparts} />
                </div>

                <div className='form-group'>
                    <label>Description </label>
                    <Field name="description" type='textarea' className="form-control" component="input" {...description} />
                </div>

                <div className='new-form-button-container'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/Dashboard'>
                        <button className='btn btn-default'> Cancel </button>
                    </Link>
                </div>
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
        'bodyparts',
        'description']
})(connectedForm)

export default EventForm