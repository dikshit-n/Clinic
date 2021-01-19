import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import PageShell from "../../UI/PageShell/PageShell";
import Sidebar from "../../UI/Sidebar/Sidebar";
import ClinicRequests from "./ClinicRequests/ClinicRequests";
import "./Superadmin.css";
import ViewClinics from "./ViewClinics/ViewClinics";

const SuperAdmin = (props) => {
  var superadminSidebar = [
    { name: "Clinics", to: "/viewclinics" },
    { name: "Requests", to: "/clinicrequests" },
    { name: "LOGOUT", to: "/logout" },
  ];

  return (
    <div>
      <Sidebar
        style={{ background: "transparent" }}
        routes={superadminSidebar}
        heading={
          <img
            src={require("../../../assets/images/EZWalkin-Logo.jpg")}
            alt="logo"
          />
        }
      />
      <br />
      <Switch>
        <Route path="/clinicrequests" component={PageShell(ClinicRequests)} />
        <Route path="/viewclinics" component={PageShell(ViewClinics)} />
        <Redirect to={props.auth ? "/clinicrequests" : "/auth"} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: true,
    // auth: state.login.token !== null,
    logo: state.login.logo,
  };
};

export default connect(mapStateToProps)(SuperAdmin);
