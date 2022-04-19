import { Form, Formik } from 'formik'
import { FormEvent } from 'react'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {


    // name: '',
    // email: '',
    // password1: '',
    // password2: '',


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


    }


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}

                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                            .max(15, 'El nombre debe de ser menor de 15 caracters')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Revise el formato de correo')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Minimo 6 letras')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las constraseñas no son iguales')
                            .required('Requerido')
                    })
                }

            >

                {
                    ({handleReset}) =>
                    (<Form>

                        <MyTextInput
                            label='Nombre'
                            name='name'
                            placeholder='Javier' />
                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='prueba@gmail.com' />

                        <MyTextInput
                            label='Password'
                            name='password1'
                            type='password'
                            placeholder='******' />

                        <MyTextInput
                            label='Confirmar password'
                            name='password2'
                            type='password'
                            placeholder='******' />

                        <button type='submit' >Create</button>
                        <button type='submit' onClick={handleReset} >Reset</button>
                    </Form>)

                }
            </Formik>
        </div>
    )
}
