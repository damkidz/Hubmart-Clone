import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authUserSelector } from "../../reducers/authReducer/selector";
import "./styles/user-drop-down.scss";
import { toggleUserDropHidden } from "../../actions/header/actions";
const UserDropDown = ({ userSignedIn, UserDropHidden, history }) => {
  return (
    <div className="user_dropdown">
      {userSignedIn ? (
        <div className="user-drop-down-menu">
          <ul className="user-menu">
            <li>Download</li>
            <li>Download</li>
            <li>Download</li>
          </ul>
        </div>
      ) : (
        <div className="user-drop-down-login-signin">
          <p className="signin_qus">Returning Customer ?</p>
          <div className="login_user_btn_div">
            <button
              className="drop_btn"
              onClick={() => {
                UserDropHidden();
                history.push("/login-signup");
              }}
            >
              Sign in
            </button>
          </div>
          <div className="register_user_btn_div">
            <p className="signin_qus">Don't have an account ?</p>
            <p
              className="register_user_btn"
              onClick={() => {
                UserDropHidden();
                history.push("/login-signup");
              }}
            >
              Register
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userSignedIn: authUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  UserDropHidden: () => dispatch(toggleUserDropHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDropDown));
