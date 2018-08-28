import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { editEvent } from '../../Actions/api_index'
import { connect } from 'react-redux'
import { compose } from 'redux'

class EditEventFormFunc extends Component {

    onSubmit = (formProps, id) => {
        console.log('Events', this.props)

        console.log("This is my payload", formProps)
        console.log('Does ID exist', this.props.id)
        // this.props.signup(formProps)

        this.props.editEvent(this.props.id,formProps)
        
    }
    render (){
        const {handleSubmit} = this.props

    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
                <label> TA-Building </label>
                <Field
                name="TABuilding"
                type="text"
                component="input"
                autoComplete="none"
                />
            </fieldset>


            <fieldset>
                <label> Job Title </label>
                <br/>
                <Field
                name="JobTitle"
                component="select">
                <option></option>
                <option value="Engineer">Engineer</option>
                <option value="Manager">Manger</option>
                <option value="GraphicArtist"> Graphic Artist </option>
                </Field>
            </fieldset>


            <fieldset>
                <label> Primary Factors </label>
                <Field
                name="Factors1"
                type="text"
                component="input"
                autoComplete="none"
                />
            </fieldset>

            <fieldset>
                <label> Body Parts </label>
                <Field
                name="BodyParts"
                type="text"
                component="input"
                autoComplete="none"
                />
            </fieldset>

            <fieldset>
                <label> Description </label>
                <Field
                name="Description"
                type="text"
                component="input"
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
    reduxForm({ form: 'editForm' })
)(EditEventFormFunc)