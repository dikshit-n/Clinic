import React from "react";
import MyCard from "../../../../../UI/MyCard/MyCard";
import "./EachAppointment.css";

const EachAppointment = (props) => {
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
    </MyCard>
  );
};

export default EachAppointment;
