import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import loginReducer from "./Components/Store/reducers/loginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//   () => {
//   window.OneSignal = window.OneSignal || [];
//   OneSignal.push(function () {
//     OneSignal.init({
//       appId: "09352329-344d-4e28-9a74-1037b187730b",
//       notifyButton: {
//         enable: true,
//       },
//       allowLocalhostAsSecureOrigin: true,
//     });
//   });
// };
