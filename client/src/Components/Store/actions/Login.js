import * as actionTypes from "./actionTypes";
import { getCookie, setCookie } from "../../Utility/cookies";
import { axiosInstance } from "../../Utility/axiosInstance";

export const loginSuccess = (token, userType, logo) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    userType: userType,
    logo: logo ? logo : null,
  };
};
export const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

export const setTemporaryToken = (token, email) => {
  return {
    type: actionTypes.SET_TEMPORARY_TOKEN,
    token: token,
    email: email,
  };
};

export const setVerified = (status) => {
  return {
    type: actionTypes.SET_VERIFIED,
    status: status,
  };
};

export const start = () => {
  return {
    type: actionTypes.START_LOGIN,
  };
};

export const checkAuthStatus = () => {
  var token = getCookie("token");
  return (dispatch) => {
    if (
      token === null ||
      token === "null" ||
      token === "" ||
      token === undefined
    ) {
      return dispatch(loginFailure());
    }
    dispatch(start());
    axiosInstance
      .post("/checkauthstatus", { token: token })
      .then((res) => {
        if (res.status === 200) {
          dispatch(loginSuccess(res.data.token, res.data.type, res.data.logo));
          setCookie("token", res.data.token, {
            expires: new Date(3030, 0, 1).toUTCString(),
          });
          console.log(new Date(3030, 0, 1).toUTCString());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure());
      });
  };
};
