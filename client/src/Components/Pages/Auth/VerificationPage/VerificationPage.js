import React, { Fragment, useEffect, useState } from "react";
import "./VerificationPage.css";
import Spinner from "../../../UI/Spinner/Spinner";
// import { Redirect } from "react-router";
import { connect } from "react-redux";
import { setVerified, setTemporaryToken } from "../../../Store/actions";
import AsyncButton from "../../../UI/AsyncButton/AsyncButton";
import { deleteCookie } from "../../../Utility/cookies";
import { axiosInstance } from "../../../Utility/axiosInstance";
import Alert from "../../../UI/Alert/Alert";

const VerificationPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    setLoading(true);
    let tokenArray = window.location.href.split("/");
    let token = tokenArray[tokenArray.length - 1];
    axiosInstance
      .post("/verifytoken", { token: token })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.status === 200) {
          props.setVerified(true);
          props.storeToken(token, res.data);
          deleteCookie("token");
          setType("success");
          setMessage("Verified");
          setText("Continue");
          setShow(true);
          setStatus(res.status);
          // setTimeout(() => {
          // }, 2000);
        } else setStatus(res.status);
      })
      .catch((err) => {
        setLoading(false);
        deleteCookie("token");
        setType("error");
        setMessage("Failed");
        setShow(true);
        setText("OK");
        setTimeout(() => {
          setStatus(err.response.status);
        }, 2000);
        console.log(err);
      });
  }, []);

  const hideAlert = () => {
    setShow(false);
    if (status === 200) {
      setTimeout(() => {
        props.history.replace("/auth/signup");
      }, 2000);
    }
  };

  return (
    <div className="full-page-wrapper flex-center flex-column">
      {loading ? (
        <Spinner />
      ) : show ? (
        <Alert
          type={type}
          message={message}
          hideAlert={hideAlert}
          show={show}
          confirmButtonText={text}
        />
      ) : status === 200 ? (
        <Fragment>
          <Spinner />
          <h4>Redirecting...</h4>
        </Fragment>
      ) : status === null ? (
        <Spinner />
      ) : (
        <div className="flex-column flex-center">
          <h4>Something went wrong !</h4>
          <AsyncButton onClick={() => props.history.push("/auth/signin")}>
            Login
          </AsyncButton>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVerified: (status) => dispatch(setVerified(status)),
    storeToken: (token, email) => dispatch(setTemporaryToken(token, email)),
  };
};

export default connect(null, mapDispatchToProps)(VerificationPage);
