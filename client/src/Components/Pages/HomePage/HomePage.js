import React, { useState } from "react";
import AsyncButton from "../../UI/AsyncButton/AsyncButton";
import { deleteCookie } from "../../Utility/cookies";
import ClinicForm from "./ClinicForm/ClinicForm";
import "./HomePage.css";
import UserForm from "./UserForm/UserForm";

const HomePage = (props) => {
  const [type, setType] = useState("home");

  const goBack = () => setType("home");

  return (
    <div className="homepage full-page-wrapper flex-center">
      <AsyncButton
        className="bg-blue white login-button box-shadow-none"
        onClick={() => {
          deleteCookie("token");
          props.history.push("/auth/signin");
        }}
      >
        Login
      </AsyncButton>

      {type === "home" ? (
        <div className="flex-row flex-wrap">
          <AsyncButton
            className="bg-light-red-gradient white box-shadow-none"
            onClick={() => setType("clinic")}
          >
            Create Clinic Account
          </AsyncButton>
          &nbsp;&nbsp;&nbsp;
          <AsyncButton
            className="bg-red white box-shadow-none"
            onClick={() => setType("user")}
          >
            Create User Account
          </AsyncButton>
        </div>
      ) : type === "user" ? (
        <UserForm close={goBack} />
      ) : (
        <ClinicForm close={goBack} />
      )}
    </div>
  );
};

export default HomePage;
