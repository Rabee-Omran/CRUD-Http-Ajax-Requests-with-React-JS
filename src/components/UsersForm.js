import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function UsersForm(props){

    const schema = Yup.object().shape({
        name : Yup.string().required(),
        email : Yup.string().required(),
    })

    return <div> 
        
    <h3> User Edit </h3>
    
    <Formik 

    enableReinitialize = 'true'
    validationSchema = {schema}
    initialValues= {props.values} 
    onSubmit = {props.onSubmit}
    render = {props => {return <Form >

        <label>Name </label>
        <Field name = "name"/>
        <ErrorMessage name= "name"/>

        <label>Email </label>
        <Field name = "email"/>
        <ErrorMessage name= "email"/>


      <button type = 'submit'> Send </button>


    </Form>}}
    
    
    />
    
    </div> 

}

