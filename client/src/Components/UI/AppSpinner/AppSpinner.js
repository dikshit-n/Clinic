import React from "react";
import "./AppSpinner.css";

const AppSpinner = (props) => {
  return (
    <div className="app-spinner full-page-wrapper">
      <img
        className="app-spinner-logo"
        alt="loading..."
        src={require("../../../assets/images/EZWalkin-Logo.jpg")}
      />
      <div className="progress-bar-container">
        <div className="progress-loader"></div>
      </div>
    </div>
  );
};

export default AppSpinner;
