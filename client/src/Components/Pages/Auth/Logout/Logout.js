import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router";
import { loginFailure } from "../../../Store/actions/Login";
import Spinner from "../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../Utility/axiosInstance";
import { deleteCookie } from "../../../Utility/cookies";

const Logout = (props) => {
  localStorage.removeItem("route");
  useEffect(() => {
    deleteCookie("token");
    props.logout();
    axiosInstance.post("/logout");
    setTimeout(() => {
      props.history.push("/auth/signin");
      // window.location.reload();
    }, 2000);
  }, []);
  // useEffect(() => {
  // }, []);
  return (
    <div
      className="full-page-wrapper flex-center flex-column"
      style={{ background: "white" }}
    >
      <Spinner />
      <h4>Logging out...</h4>
    </div>
  );

  // <Redirect to="/auth/signin" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(loginFailure()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
