import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions/auth/actions';
import { authUserSelector , errorSelector } from '../../reducers/authReducer/selector';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
  );
};

const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div >
      <input type={type} />
      {error && <div>{error}</div>}
    </div>
  );
};
function LoginSignupForm(props){

  const onSubmit = formValues => {
    props.loginUser(formValues);
  };

 
    if (props.isAuthenticated) {
      return <Redirect to='/my-account' />;
    }
const {error, pristine, reset, submitting, authError } = props
console.log(authError)
    return (
      <div className='ui container'>
        <div className='ui segment'>
          <form
            onSubmit={props.handleSubmit(onSubmit)}
            className='ui form'
          >
            <Field
              name='username'
              type='text'
              component={renderField}
              label='Username'
            />
            <Field
              name='password'
              type='password'
              component={renderField}
              label='Password'
            />
            <Field
              name='non_field_errors'
              type='hidden'
              component={hiddenField}
            />
            <button type='submit'  disabled={submitting}>Login</button>
           
          </form>
          {authError && NotificationManager.error(authError)}
        <NotificationContainer/>
          <p style={{ marginTop: '1rem' }}>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: authUserSelector(state),
  authError: errorSelector(state),
});

LoginSignupForm = connect(
  mapStateToProps,
  {loginUser}
)(LoginSignupForm);

export default reduxForm({
  form: 'loginSignupForm',
  validate,
})(LoginSignupForm);