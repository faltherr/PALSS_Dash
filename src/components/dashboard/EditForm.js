import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { editEvent } from '../../Actions/api_index'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { uniqueFactorsArr, uniqueJobsArr, uniqueLocationsArr } from './UniqueData'

// Here we handle the form validation

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
    <div className='new-form-input-warning-wrapper'>
      <div className='form-input-container'>
        <input {...input} placeholder={label} type={type} className='new-form-input-field'/>
        {touched && ((error && <span className='error-message-input'> <i class="fas fa-exclamation-circle"></i> {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )}

  const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div className='new-form-input-warning-wrapper'>
      <div className='form-select-container'>
        <select {...input} className='new-form-select-field'>
          {children}
        </select>
        {touched && error && <span className='error-message-select'><i class="fas fa-exclamation-circle"></i>{error}</span>}
      </div>
    </div>
  )

      //Synchronous validation
      const validate = (values) => {
        const errors = {}
        if (!values.Date) {
          errors.Date = 'Required: Please enter a date in the MM/DD/YYYY format'
        }
        if (!values.TABuilding) {
          errors.TABuilding = 'Required: Please enter a location in a 2 digit TA, 4 digit building format'
        } else if (!/^\d{2}-\d{4}$/.test(values.TABuilding)) {
          errors.TABuilding = 'Please enter a location in a 2 digit TA, 4 digit building format'
        }
        if (!values.Factors1) {
          errors.Factors1 = 'Please enter the primary cause of the incident'
        }  
        if (!values.JobTitle) {
          errors.JobTitle = 'Required: Please enter the job title of the injured person'
        }
        if (!values.BodyParts) {
            errors.BodyParts = 'Please enter the injured body part of the person'
        }
        if (!values.Description) {
            errors.Description = 'Please enter a description of the incident'
        }
        return errors
      }

// This is the event form functional component 

class EditEventFormFunc extends Component {


    // This code block fills the input forms with the event's data
    componentDidMount(){
        this.handleInitialize()
    }

    handleInitialize(){
        const initData = {
            "Date": this.props.date,
            "TABuilding": this.props.tabuilding, 
            "JobTitle": this.props.jobtitle,
            "Factors1": this.props.factors1,
            "BodyParts": this.props.bodyparts,
            "Description": this.props.description
        }
        this.props.initialize(initData)
        console.log(initData)
    }

    

      
    // const required = value => value ? undefined : 'Required: Please enter NA if unknown'
    // const requiredDate = value => value ? undefined : 'Required: Please enter a date in the MM/DD/YYYY format'
    // const requireJob = value => value ? undefined : 'Required: Please enter the job title of the injured person'
    // const requireFactors = value => value ? undefined : 'Please enter the primary cause of the incident'
    // const requireLocation = value => value ? undefined : 'Required: Please enter a location in a 2 digit TA, 4 digit building format'
    


    onSubmit = (formProps, id) => {
        // console.log('Events', this.props)

        // console.log("This is my payload", formProps)
        // console.log('Does ID exist', this.props.id)
        // this.props.signup(formProps)

        this.props.editEvent(this.props.id,formProps)
        
    }
    render (){
        const {handleSubmit} = this.props
        console.log(this.props)
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
                <label> TA-Building </label>
                <Field
                    name="TABuilding"
                    type="text"
                    component={renderSelectField}
                >
                    <option value=''> Select a value... </option>
                    {uniqueLocationsArr.map(option=> <option value={option} key={option}>{option}</option>)}
                </Field>
            </fieldset>


            <fieldset>
                <label> Job Title </label>
                <br/>
                <Field
                name="JobTitle"
                component={renderSelectField}>
                    <option value=''> Select a value... </option>
                    {uniqueJobsArr.map(option=> <option value={option} key={option}>{option}</option>)}
                </Field>
            </fieldset>


            <fieldset>
                <label> Primary Factors </label>
                <Field
                name="Factors1"
                type="text"
                component={renderSelectField}
                autoComplete="none"
                >
                    <option value=''> Select a value... </option>
                    {uniqueFactorsArr.map(option=> <option value={option} key={option}>{option}</option>)}
                </Field>
            </fieldset>

            <fieldset>
                <label> Body Parts </label>
                <Field
                name="BodyParts"
                type="text"
                component={renderField}
                autoComplete="none"
                />
            </fieldset>

            <fieldset>
                <label> Description </label>
                <Field
                name="Description"
                type="text"
                component={renderField}
                autoComplete="none"
                />
            </fieldset>

            <button onClick={()=> this.props.closeModal('edit')} className='btn btn-primary'> Submit edits </button>
        </form>
    )
}
}

function mapStateToProps(state) {
    return {
        events: state.reducer.events
    }
}


// export default EditEventForm

export default compose(
    connect(mapStateToProps, {editEvent}),
    reduxForm({ form: 'editForm', validate })
)(EditEventFormFunc)