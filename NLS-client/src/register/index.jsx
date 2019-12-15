import React, { useState } from 'react';
import Styles from './Styles'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import { useHistory } from 'react-router-dom'
import UserService from '../utils/services/user-service'



const Register = () => {
    const [stateErrors, setErrors] = useState(null);
    const history = useHistory();
    const onSubmit = (values) => {
        UserService.register({ username: values.username, password: values.password, email: values.email }).then((user) => {
            history.push('/login');
        }).catch((err) => {
            setErrors({ err });});
    }
    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username</label>
                            <Field
                                name="username"
                                component="input"
                                type="text"
                                placeholder="Username"
                                required
                                minLength={4}
                                tooShort="You need a longer name"
                                valueMissing="Username missing!">
                            </Field>
                        </div>
                        <Field
                            name="password"
                            type="password"
                            autoComplete="password"
                            placeholder="Password"
                            required
                            valueMissing="Password missing!">
                            {({ input, meta: { error, touched }, ...rest }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} {...rest} />
                                    {error && touched && <span>{error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="Re-Password"
                            autoComplete="re-password"
                            type="password"
                            placeholder="Re-Password"
                            pattern={values["password"]}
                            patternMismatch="Passwords must match!"
                            required
                            valueMissing="Re-Password missing!">
                            {({ input, meta: { error, touched }, ...rest }) => (
                                <div>
                                    <label>Re-Password</label>
                                    <input {...input} {...rest} />
                                    {error && touched && <span>{error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>
                            <label>Email</label>
                            <Field
                                name="email"
                                type="Email"
                                typeMismatch="That's not an Email address"
                                component="input"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Register
                            </button>
                            {stateErrors && (stateErrors.err === 500) && <span>Username may already been taken</span>}
                        </div>
                    </form>
                )}
            />
        </Styles>

    )
}

export default Register
