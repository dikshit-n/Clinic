import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import PageShell from "../../UI/PageShell/PageShell";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Appointments from "./Clinics/Appointments/Appointments";
import Clinics from "./Clinics/Clinics";
import "./Store.css";

const Store = (props) => {
  var storeSidebar = [
    { name: "Clinics", to: "/clinics", initialActive: true },
    { name: "Appointments", to: "/appointments" },
    { name: "LOGOUT", to: "/logout" },
  ];
  return (
    <div>
      <Sidebar
        style={{ background: "transparent" }}
        routes={storeSidebar}
        heading={
          <img
            src={require("../../../assets/images/EZWalkin-Logo.jpg")}
            alt="logo"
          />
        }
      />
      <br />
      <Switch>
        <Route path="/appointments" component={PageShell(Appointments)} />
        <Route path="/clinics" component={PageShell(Clinics)} />
        <Redirect to={props.auth ? "/clinics" : "/auth"} />
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

export default connect(mapStateToProps)(Store);
