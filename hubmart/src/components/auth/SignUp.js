import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions/auth/actions';
import { authUserSelector , showMessageSelector, alertMessageSelector} from '../../reducers/authReducer/selector';
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
      <div className='signin-renderfield-layout'>
      <label>{label}</label>
      <div className='signin-renderfield'>
        <input {...input}  type={type}  className='signin-renderfield-input'/>
        {touched && error && <p className='signin-renderfield-error'>{error}</p>}
      </div>
    </div>
    );
  };


  const hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='hiddenfield-layout'>
        <input type={type}  className='hiddenfield-input'/>
        {error && <div className='hiddenfield-error'>{error}</div>}
      </div>
    );
  };
function SignupForm(props){

  const onSubmit = formValues => {
    props.loginUser(formValues);
  };

 
    if (props.isAuthenticated) {
      return <Redirect to='/my-account' />;
    }
const { pristine, reset, submitting, alertMessage, showMessage} = props

    return (
      <div className='signup-container'>
        <p className='auth-title'>Register</p>
          <form
            onSubmit={props.handleSubmit(onSubmit)}
            className='signup-form'
          >
            <Field
              name='username'
              type='text'
              component={renderField}
              label='Email'
            />
            <Field
              name='non_field_errors'
              type='hidden'
              component={hiddenField}
            />
           
            <button className='signup-btn'  disabled={pristine || submitting}>Register</button>
          </form>
          <div>
            {showMessage && <div className='renderfield-error'>{alertMessage}</div>}
            </div>
          <p className="text">
            Don you have an account? <Link to='/login-signup'>Login</Link>
          </p>
        
      </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: authUserSelector(state),
  showMessage: showMessageSelector(state),
  alertMessage: alertMessageSelector(state),
});

Form = connect(
  mapStateToProps,
  {loginUser}
)(SignupForm);

export default reduxForm({
  form: 'SignupForm',
  validate,
})(Form);