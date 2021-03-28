import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function UsersForm(props){

    const schema = Yup.object().shape({
        name : Yup.string().required(),
        email : Yup.string().email().required(),
    })

    return <div> 
        
  
    
    <Formik 
    enableReinitialize = 'true'
    validationSchema = {schema}
    initialValues= {props.values} 
    onSubmit = {props.onSubmit}
    >
        {props =>  <Form >

        <label>Name </label><br/>
        <Field name = "name"/>
        <ErrorMessage name= "name"/>

        <label>Email </label>
        <Field name = "email"/>
        <ErrorMessage name= "email"/>


      <button type = 'submit'> Send </button>


        </Form>}

    </Formik>
    
    </div> 

}

