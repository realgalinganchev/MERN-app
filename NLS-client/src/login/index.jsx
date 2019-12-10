import React from 'react'
import Styles from './Styles'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import { useHistory } from 'react-router-dom'
//import {StoreContext} from '../store'
import UserService from '../utils/services/user-service'
import { Link } from 'react-router-dom';




const Login = () => {

  const history = useHistory();
  const onSubmit = (values) => {
    UserService.login(values).then((data) => {
      console.log(data);
      history.push('/');
      window.location.reload();
    }).catch(err=>console.log(err))


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
                autoComplete="username"
                type="text"
                placeholder="Username"
                required
                minLength={4}
                tooShort="You need a longer name"
              />
            </div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
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


            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Login
            </button>
            </div>
            <div>
              <p className="alreadyUser"> Don't have an account yet? Then just
              <Link className="navButtonsStyle"to='/register'> register here!</Link>
        </p>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  )
}

export default Login

// <div>
// <label>Feedback</label>
// <Field name="notes" component="textarea" placeholder="We are constantly trying to impove our customer's experience. Feel free to share your ideas here! " />
// </div>