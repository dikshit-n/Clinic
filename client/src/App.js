import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch, withRouter } from "react-router";
import { connect } from "react-redux";
import VerificationPage from "./Components/Pages/Auth/VerificationPage/VerificationPage";
import { checkAuthStatus } from "./Components/Store/actions";
import Logout from "./Components/Pages/Auth/Logout/Logout";
import PageShell from "./Components/UI/PageShell/PageShell";
import { axiosInstance } from "./Components/Utility/axiosInstance";
import AppSpinner from "./Components/UI/AppSpinner/AppSpinner";

const LazySuperadmin = lazy(() =>
  import("./Components/Pages/Superadmin/Superadmin")
);
const LazyPartner = lazy(() => import("./Components/Pages/Partner/Partner"));
const LazyStore = lazy(() => import("./Components/Pages/Store/Store"));
const LazyAuth = lazy(() => import("./Components/Pages/Auth/Auth"));

function App(props) {
  const [route, setRoute] = useState(
    props.location.pathname !== undefined && props.location.pathname !== null
      ? props.location.pathname
      : "/"
  );

  const [show, setShow] = useState(false);

  useEffect(async () => {
    if (!window.location.href.includes("verifytoken"))
      await props.checkAuthStatus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const setAxiosHeader = async () => {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = await `Bearer ${props.token}`;
    };
    setAxiosHeader();
  }, [props.token]);

  useEffect(() => {
    if (
      !window.location.href.includes("/auth") &&
      !window.location.href.includes("/verify")
    ) {
      localStorage.setItem("route", props.location.pathname);
      setRoute(
        props.location.pathname !== undefined && props.location.href !== null
          ? props.location.pathname
          : "/"
      );
    }
  }, [window.location.href]);

  let routes = (
    // <Route path="/" render={(props) => <LazySuperadmin {...props} />} />
    <Route path="/" render={(props) => <LazyPartner {...props} />} />
    // <Route path="/" render={(props) => <LazyStore {...props} />} />
  );

  // if (props.userType === "partner") {
  //   routes = <Route path="/" render={(props) => <LazyPartner {...props} />} />;
  // } else if (props.userType === "store") {
  //   routes = <Route path="/" render={(props) => <LazyStore {...props} />} />;
  // }

  return show ? (
    props.loading ? (
      <div className="full-page-wrapper flex-center bg-milky">
        <AppSpinner />
      </div>
    ) : (
      <div className="App">
        <Suspense
          fallback={
            <div className="full-page-wrapper flex-center bg-milky">
              <AppSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/verifytoken/:token" component={VerificationPage} />
            <Route path="/logout" component={PageShell(Logout)} />
            {props.auth ? (
              <Fragment>
                {routes}
                <Redirect to={route} />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/auth" component={LazyAuth} />
                <Redirect to="/auth" />
              </Fragment>
            )}
          </Switch>
        </Suspense>
      </div>
    )
  ) : (
    <AppSpinner />
  );
}

const mapStateToProps = (state) => {
  return {
    auth: true,
    // auth: state.login.token !== null && state.login.token !== undefined,
    verified: state.login.verified,
    loading: state.login.loading,
    userType: state.login.userType,
    token: state.login.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthStatus: () => dispatch(checkAuthStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
