import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (authUser.isLoading) {
        return <div>Loading...</div>;
      } else if (!authUser.isAuthenticated) {
        return <Redirect to={{
            pathname: '/login-signup',
            state: {from: props.location}
          }} />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  authUser: state.authUser
});

export default connect(mapStateToProps)(PrivateRoute);