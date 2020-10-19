import React from "react";
import { Link, withRouter } from "react-router-dom";

 function MyAccount({ currentUser,logout,history }) {
  const { user } = currentUser;
  return (
    <>
    <div>
      <p
        
        style={{ textDecoration: "none", color: "#00aeff" }}
        onClick={() => {
          logout();
            history.push("/");
          }}
          >
          Hello {user.username} not {user.username}?{" "}
          Logout
       
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

export default withRouter(MyAccount)