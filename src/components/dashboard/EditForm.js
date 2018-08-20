import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {editEvent} from '../../Actions/api_index'
import {connect} from 'react-redux'

// let submit = (values) =>{
//     console.log('Submit form values:', values)
// }

let EditEventFormFunc = props => {
        // Configuration objects
        const {eventdate,
                         tabldg,
                         jobtitle,
                         factors1,
                         factors2, 
                         bodyparts, 
                         description} = props.fields

        const {handleSubmit} = props
        
        // console.log(11111, tabldg)
        // console.log(1111111, submit)

        // console.log(7438734834387, editEvent)
        // console.log('Props', this.props)
        // console.log("THIS PROPS " , props.events)

        return(
            <form onSubmit={handleSubmit(() => editEvent(props.id))}>
                <h3> Update this incident </h3>
                <div className='form-group'>
                <label>Date </label>
                <Field name="eventdate" type="text" className="form-control" component="input" {...eventdate} autoComplete="none" placeholder='YYYY-MM-DD'/> 
                </div>

                <div className='form-group'>
                <label>TA - BLDG </label>
                {/* Pass configuration object into the input with {...TaBldg} */}
                <Field name="tabldg"type="text" className="form-control"  component="input" {...tabldg} placeholder='i.e. 03-4300'/> 
                </div>

                <div className='form-group'>
                <label>JobTitle </label>
                <Field name="jobtitle" type="text" className="form-control" component="input" {...jobtitle}/> 
                </div>

                <div className='form-group'>
                <label>Factors 1 </label>
                <Field name="factors1" type="text" className="form-control" component="input" {...factors1}/> 
                </div>

                <div className='form-group'>
                <label>Factors 2 </label>
                <Field name="factors2" type="text" className="form-control" component="input" {...factors2}/> 
                </div>

                <div className='form-group'>
                <label>Body Parts </label>
                <Field name="bodyparts" type="text" className="form-control" component="input" {...bodyparts} /> 
                </div>

                <div className='form-group'>
                <label>Description </label>
                <Field name="description" type='textarea' className="form-control" component="input" {...description} /> 
                </div>

                <button type = "submit" className="btn btn-primary">Submit</button>

                </form>
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
        events: state.reducer.events
    }
}

let connectedForm  = connect(mapStateToProps, {editEvent})(EditEventFormFunc)
let EditEventForm = reduxForm({
    //Name the form
    form: 'EditEvent',
    //Declare the fields that the form will contain
    fields:['eventdate', 
            'tabldg',
            'jobtitle',
            'factors1',
            'factors2', 
            'bodyparts', 
            'description']
})(connectedForm)


export default EditEventForm