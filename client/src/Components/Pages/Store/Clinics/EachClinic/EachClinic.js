import MyCard from "../../../../UI/MyCard/MyCard";
import React from "react";
import "./EachClinic.css";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";

const EachClinic = (props) => {
  return (
    <MyCard
      className="each-user-clinic hover-grow pointer"
      style={{ textAlign: "left", marginTop: 20, paddingBottom: 20 }}
    >
      <strong>{props.clinicName}</strong>
      <br />
      <br />
      <small>
        <strong>Doctor Name</strong>
      </small>
      <h4 className="light-black">{props.doctorName}</h4>
      <small>
        <strong>Working Hours</strong>
      </small>
      <h4 className="light-black">{props.workingHours}</h4>
      <br />
      <AsyncButton style={{ margin: "auto" }} onClick={props.onClick}>
        Request Appointment
      </AsyncButton>
    </MyCard>
  );
};

export default EachClinic;
