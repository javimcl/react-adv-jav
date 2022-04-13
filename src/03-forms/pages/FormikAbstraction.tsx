import {  Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {



    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''

                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
                })

                }
            >

                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                placeholder='Javier'
                            />

                            <MyTextInput
                                label='Last Name'
                                name='lastName'
                                placeholder='Lucero'

                            />

                            <MyTextInput
                                label='Email Addres'
                                name='email'
                                placeholder='prueba@gmail.com'
                                type='email'
                            />

                            <MySelect label='Job Type' name='jobType' >

                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT senior</option>
                                <option value="it-jr">IT Jr</option>


                            </MySelect>

                            <MyCheckbox label='Terns & conditios' name='terms'/>
                            

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
