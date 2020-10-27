import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import { logoutUser } from "../../actions/auth/actions";

 function MyAccount({auth:{currentUser},history}) {
  // const { user } = currentUser;
  return (
    <>
    <div>
      <p
        
        style={{ textDecoration: "none", color: "#00aeff" }}
        onClick={() => {
          logoutUser();
            // history.push("/");
          }}
          >
          {/* Hello {currentUser.username} not {currentUser.username}?{" "} */}
          {/* <span onClick={() => props.logout()}>Logout</span> */}
          {/* <span>Logout</span> */}
       logout
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link style={{ textDecoration: "none", color: "#00aeff" }}>recent orders, </Link> manage
        your{" "}
        <Link style={{ textDecoration: "none", color: "#00aeff" }}>
          shipping and billing addresses,
        </Link>
      </p>
      <p>
        and{" "}
        <Link style={{ textDecoration: "none", color: "#00aeff" }}>
          edit your password and account details.
        </Link>
      </p>
    </div>
    </>
  );
}
const mapStateToProps = state => ({
  auth: state.authReducer
});

export default withRouter(connect(mapStateToProps,{logoutUser})(MyAccount));