import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import PageShell from "../../UI/PageShell/PageShell";
import "./Auth.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = (props) => {
  useEffect(() => {
    localStorage.removeItem("route");
  }, []);

  return (
    <div>
      <Switch>
        {props.verified ? (
          <Route path={props.match.url + "/signup"} component={SignUp} />
        ) : (
          <Route path={props.match.url + "/signin"} component={SignIn} />
        )}
        {props.verified ? (
          <Redirect to="/auth/signup" />
        ) : (
          <Redirect to="/auth/signin" />
        )}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    verified: state.login.verified,
  };
};

export default connect(mapStateToProps)(Auth);

// http://localhost:3000/auth/verifytoken/verify?token=dl9tcxk6tzlwnrjd
