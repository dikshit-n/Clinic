import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userType: null,
  verified: false,
  temporaryToken: null,
  email: null,
  loading: false,
  logo: null,
  data: {},
};

const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: "bla",
        data: actions.data,
      };
    case actionTypes.SET_VERIFIED:
      return {
        ...state,
        verified: actions.status,
      };
    case actionTypes.SET_TEMPORARY_TOKEN:
      return {
        ...state,
        temporaryToken: actions.token,
        email: actions.email,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        userType: null,
        token: null,
        loading: false,
        temporaryToken: null,
        email: null,
      };
    case actionTypes.START_LOGIN:
      return {
        ...state,
        userType: null,
        token: null,
        loading: true,
        temporaryToken: null,
        email: null,
      };
    default:
      return state;
  }
};
export default loginReducer;
