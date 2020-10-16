import React from "react";
import { Link, withRouter } from "react-router-dom";

 function MyAccount({ currentUser,logout,history }) {
  const { user } = currentUser;
  return (
    <div>
      <p>
        {" "}
        Hello {user.username} (not {user.username}?{" "}
        <Link
          style={{ textDecoration: "none", color: "#00aeff" }}
          onClick={() => {
            logout();
            history.push("/");
          }}
        >
          Logout
        </Link>
        )
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
  );
}

export default withRouter(MyAccount)