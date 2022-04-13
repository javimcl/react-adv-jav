import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const { onChange, reset, isValidEmail , name, email, password1, password2 } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',

    })





    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


    }


    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={(ev) => onChange(ev)}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es válido </span>}


                <input
                    type="password"
                    placeholder='Password'
                    name='password1'
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 6 && <span>La contraseña debe de tener 6 caracteres</span>}

                <input
                    type="password"
                    placeholder='Repeat Password'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}
                <button >Create</button>
                <button type='submit' onClick={reset} >Reset</button>
            </form>
        </div>
    )
}
