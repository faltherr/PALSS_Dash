import React from 'react'
import {Field, reduxForm} from 'redux-form'

let submit = (values) =>{
    console.log('Submit form values:', values)
}

let EventFormFunc = props => {
        // Configuration objects
        const {fields: {eventdate,
                         tabldg,
                         jobtitle,
                         factors1,
                         factors2, 
                         bodyparts, 
                         description},
                         handleSubmit} = props
        
        // console.log(11111, tabldg)
        // console.log(1111111, submit)
        console.log(Field)


        return(
            <form onSubmit={handleSubmit(submit)}>
                <h3> Record a New Incident </h3>
                <div className='form-group'>
                <label>Date </label>
                <Field name="eventdate" type="text" className="form-control" component="input" {...eventdate}/> 
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

const EventForm = reduxForm({
    //Name the form
    form: 'EventNew',
    //Declare the fields that the form will contain
    fields:['eventdate', 
            'tabldg',
            'jobtitle',
            'factors1',
            'factors2', 
            'bodyparts', 
            'description']
}) (EventFormFunc)

export default EventForm