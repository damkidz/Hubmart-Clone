import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../actions/auth/actions';
import { authUserSelector  , showMessageSelector, alertMessageSelector} from '../../reducers/authReducer/selector';


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
    <div className='login-renderfield-layout'>
    <label>{label}</label>
    <div className='login-renderfield'>
      <input {...input}  type={type}  className='login-renderfield-input'/>
      {touched && error && <span className='login-renderfield-error'>{error}</span>}
    </div>
  </div>
  );
};

const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div>
      <input type={type}  />
      {error && <div >{error}</div>}
    </div>
  );
};
function SignupForm(props){

  const onSubmit = formValues => {
    props.registerUser(formValues);
  };

 
    // if (props.isAuthenticated) {
    //   return <Redirect to='/' />;
    // }
const { pristine, reset, submitting, alertMessage, showMessage} = props

    return (
      <div className='login-container'>
        <p className='auth-title'>Login</p>
          <form
            onSubmit={props.handleSubmit(onSubmit)}
            className='login-form'
          >
            <Field
              name='username'
              type='text'
              component={renderField}
              label='Username'
            />
            <Field
              name='email'
              type='email'
              component={renderField}
              label='Email'
            />
            <Field
              name='password'
              type='password'
              component={renderField}
              label='Password'
            />
            <Field
              name='password2'
              type='password'
              component={renderField}
              label='Confirm Password'
            />
            <button  className='login-btn' disabled={pristine || submitting}>Login</button>
           
          </form>
          <div>
            {showMessage && <div className='renderfield-error'>{alertMessage}</div>}
            </div>
          <p className="text">
            Don't have an account? <Link to='/login-signup'>Register</Link>
          </p>
      </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: authUserSelector(state),
  showMessage: showMessageSelector(state),
  alertMessage: alertMessageSelector(state),
});

SignupForm = connect(
  mapStateToProps,
  {registerUser}
)(SignupForm);

export default reduxForm({
  form: 'SignupForm',
  validate,
})(SignupForm);