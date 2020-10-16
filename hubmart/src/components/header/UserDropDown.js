import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authUserSelector } from "../../reducers/authReducer/selector";
import "./styles/user-drop-down.scss";
import { toggleUserDropHidden } from "../../actions/header/actions";
const UserDropDown = ({ userSignedIn, UserDropHidden, history }) => {
  return (
    <>
      {userSignedIn ? (
        <div className="user-drop-down-menu">
          <ul>
            <li>Download</li>
            <li>Download</li>
            <li>Download</li>
          </ul>
        </div>
      ) : (
        <div className="user-drop-down-login-signin">
          <button
            onClick={() => {
              UserDropHidden();
              history.push("/login-signup");
            }}
          >
            Login
          </button>
          <p className="signin_qus">Dont have an account ?</p>
          <button
            onClick={() => {
              UserDropHidden();
              history.push("/login-signup");
            }}
          >
            Sign up
          </button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userSignedIn: authUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  UserDropHidden: () => dispatch(toggleUserDropHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDropDown));
