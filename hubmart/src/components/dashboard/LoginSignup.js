// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form";
// import { loginUser } from "../../actions/auth/actions";
// import { authUserSelector } from "../../reducers/authReducer/selector";

// class LoginSignupForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: "",
//     };
//   }

//   renderField = ({ input, label, type, meta: { touched, error } }) => {
//     return (
//       <div className={`field ${touched && error ? "error" : ""}`}>
//         <label>{label}</label>
//         <input {...input} type={type} />
//         {touched && error && <span className="ui pointing red basic label">{error}</span>}
//       </div>
//     );
//   };

//   hiddenField = ({ type, meta: { error } }) => {
//     return (
//       <div className="field">
//         <input type={type} />
//         {error && <div className="ui red message">{error}</div>}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     this.props.loginUser(formValues);
//   };
//   // handleChange = (evt) => {
//   //   const value = evt.target.value;
//   //   this.setState({
//   //     [evt.target.name]: value,
//   //   });
//   // };
//   render() {
//     if (this.props.isAuthenticated) {
//       return <Redirect to="/my-account" />;
//     }
//     // const { username, password } = this.state;
//     return (
//       <div className="ui container">
//         <div className="ui segment">
//           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
//             <Field
//               name="username"
//               type="text"
//               onChange={(event) => this.setState({username: event.target.value})}
//                     defaultValue={username}
//               component={this.renderField}
//               label="Username"
             
//             />
//             <Field
//               name="password"
//               type="password"
//               component={this.renderField}
//               // onChange={(event) => this.setState({password: event.target.value})}
//               //       defaultValue={password}
//               label="Password"
             
//             />
//             <Field name="non_field_errors" type="hidden" component={this.hiddenField} />
//             <button
//               className="ui primary button"
//               onClick={() => this.props.loginUser({ username, password })}
//             >
//               Login
//             </button>
//           </form>
//           <p style={{ marginTop: "1rem" }}>
//             Don't have an account? <Link to="/register">Register</Link>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: authUserSelector(state),
// });

// LoginSignupForm = connect(mapStateToProps, { loginUser })(LoginSignupForm);

// export default reduxForm({
//   form: "loginSignupForm",
// })(LoginSignupForm);
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions/auth/actions';
import { authUserSelector } from '../../reducers/authReducer/selector';


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

renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className={`field ${touched && error ? 'error' : ''}`}>
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && error && (
        <span className='ui pointing red basic label'>{error}</span>
      )}
    </div>
  );
};

hiddenField = ({ type, meta: { error } }) => {
  return (
    <div className='field'>
      <input type={type} />
      {error && <div className='ui red message'>{error}</div>}
    </div>
  );
};
const LoginSignupForm = () => {

  onSubmit = formValues => {
    this.props.loginUser(formValues);
  };

 
    if (this.props.isAuthenticated) {
      return <Redirect to='/my-account' />;
    }

    return (
      <div className='ui container'>
        <div className='ui segment'>
          <form
            onSubmit={this.props.handleSubmit(onSubmit)}
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
            <button type='submit' className='ui primary button'>Login</button>
          </form>
          <p style={{ marginTop: '1rem' }}>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authUserSelector(state)
});

LoginSignupForm = connect(
  mapStateToProps,
  {loginUser}
)(LoginSignupForm);

export default reduxForm({
  form: 'loginSignupForm'
})(LoginSignupForm);