import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createEvent } from '../../Actions/api_index'
import { connect } from 'react-redux'
import renderDatePicker from './DatePicker'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { uniqueFactorsArr, uniqueJobsArr, uniqueLocationsArr } from '../dashboard/UniqueData'
import {formSubmit, resetFormSubmit} from '../../Actions/event_handlers'

//Loading spinner stuff
import {FadeLoader} from 'react-spinners'
import { css } from 'react-emotion'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )}

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div>
      <label>{label}</label>
      <div>
        <select {...input}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

  //Synchronous validation
  const validate = values => {
    const errors = {}
    if (!values.eventdate) {
      errors.eventdate = 'Required'
    }
    if (!values.tabldg) {
      errors.tabldg = 'Required'
    } else if (!/^\d{2}-\d{4}$/.test(values.tabldg)) {
      errors.tabldg = 'Please enter a location in a 2 digit TA, 4 digit building format'
    }
    if (!values.factors) {
      errors.factors = 'Required'
    }  
    if (!values.jobtitle) {
      errors.jobtitle = 'Required'
    }
    if (!values.bodyparts) {
        errors.bodyparts = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    return errors
  }
  
const required = value => value ? undefined : 'Required: Please enter NA if unknown'
const requiredDate = value => value ? undefined : 'Required: Please enter a date in the MM/DD/YYYY format'
const requireJob = value => value ? undefined : 'Required: Please enter the job title of the injured person'
const requireFactors = value => value ? undefined : 'Please enter the primary cause of the incident'
const requireLocation = value => value ? undefined : 'Required: Please enter a location in a 2 digit TA, 4 digit building format'

//
// const methods= {
//     componentDidMount(){
//         props.resetFormSubmit()
//     }
// }

let EventFormFunc = props => {

    
    // Configuration objects

    // console.log('we got this!', props)
    const { eventdate,
        tabldg,
        jobtitle,
        factors1,
        bodyparts,
        description } = props.fields

    const { handleSubmit } = props

    let onSubmit = (formData) => {
        console.log(2)
        // console.log("The form's payload", props)
        props.formSubmit()
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
                        validate ={[requiredDate]}
                    />
                </div>

                <div className='form-group'>
                    <label> Location (TA - BLDG) </label>
                    {/* Pass configuration object into the input with {...TaBldg} */}
                    <Field name="tabldg" className="form-control" component={renderSelectField} {...tabldg} placeholder='i.e. 03-4300' validate ={[requireLocation]}>
                    <option value=''> Select a value... </option>
                    {uniqueLocationsArr.map(option=> <option value={option} key={option}>{option}</option>)}
                    </Field>
                </div>

                <div className='form-group'>
                    <label>JobTitle </label>
                    <Field name="jobtitle" className="form-control" component={renderSelectField} {...jobtitle} validate ={[requireJob]}>
                        <option value=''> Select a value... </option>
                        {uniqueJobsArr.map(option=> <option value={option} key={option}>{option}</option>)}
                    </Field>
                </div>

                <div className='form-group'>
                    <label>Factors </label>
                    <Field name="factors1" className="form-control" component={renderSelectField} {...factors1} validate ={[requireFactors]}>
                    <option value=''> Select a value... </option>
                        { uniqueFactorsArr.map(option => <option value={option} key={option}>{option}</option>) }
                    </Field>
                </div>

                <div className='form-group'>
                    <label>Body Parts Injured </label>
                    <Field name="bodyparts" type="text" className="form-control" component={renderField} {...bodyparts} validate ={[required]} />
                </div>

                <div className='form-group'>
                    <label>Description </label>
                    <Field name="description" type='textarea' className="form-control" component={renderField} {...description} validate ={[required]} />
                </div>

                <div className='new-form-button-container'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/Dashboard'>
                        <button className='btn btn-default'> Cancel </button>
                    </Link>
                </div>
            </form>
            {
                    props.formSubmited
                        ?
                        <div className='form-fade-loader'>
                        <FadeLoader 
                            className={override}
                            color={'#936FDB'} />
                        </div>    
                        :
                        null
                }
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
function mapStateToProps(state) {
    return {
        initialValues: state.initialValues,
        formSubmited: state.reducer.formSubmited,
        pendingRequest: state.reducer.pendingRequest
    }
}

let formbaby = reduxForm({
    //Name the form
    form: 'eventnew',
    //Declare the fields that the form will contain
    // fields: [
        //     'factors1']
        fields: ['eventdate',
        'tabldg',
        'jobtitle',
        'factors1',
        'bodyparts',
        'description'],
    validate
    })(EventFormFunc)
    
let connectedForm = connect(mapStateToProps, { createEvent, formSubmit, resetFormSubmit })(formbaby)

export default connectedForm