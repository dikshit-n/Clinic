import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import "./Partner.css";
import { Redirect, Route, Switch } from "react-router";
import { connect } from "react-redux";
import PageShell from "../../UI/PageShell/PageShell";
import ClinicDetails from "./ClinicDetails/ClinicDetails";
import AppointmentRequests from "./AppointmentRequests/AppointmentRequests";

const Partner = (props) => {
  var partnerSidebar = [
    { name: "APPOINTMENTS", to: "/appointments", initialActive: true },
    { name: "MY CLINIC", to: "/myclinic" },
    { name: "LOGOUT", to: "/logout" },
  ];

  return (
    <div>
      <Sidebar
        style={{ background: "transparent" }}
        routes={partnerSidebar}
        heading={
          <img
            src={require("../../../assets/images/EZWalkin-Logo.jpg")}
            alt="logo"
          />
        }
      />
      <br />
      <Switch>
        <Route path="/myclinic" component={PageShell(ClinicDetails)} />
        <Route
          path="/appointments"
          component={PageShell(AppointmentRequests)}
        />
        <Redirect to={props.auth ? "/appointments" : "/auth"} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // auth: state.login.token !== null,
    auth: true,
    logo: state.login.logo,
  };
};

export default connect(mapStateToProps)(Partner);
