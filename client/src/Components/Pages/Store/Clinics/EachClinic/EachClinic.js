import MyCard from "../../../../UI/MyCard/MyCard";
import React from "react";
import "./EachClinic.css";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";

const EachClinic = (props) => {
  // const
  return (
    <MyCard
      className="each-user-clinic hover-grow pointer"
      style={{ textAlign: "left", marginTop: 20, paddingBottom: 20 }}
    >
      <strong>{props.name}</strong>
      <br />
      <br />
      <small>
        <strong>{props.description}</strong>
      </small>
      <br />
      <small>
        <strong>{props.seatsAvailable} seats available</strong>
      </small>
      <h4 className="light-black">{props.professor}</h4>
      {/* <small>
        <strong>Doctor Name</strong>
      </small>
      <h4 className="light-black">{props.doctorName}</h4>
      <small>
        <strong>Working Hours</strong>
      </small>
      <h4 className="light-black">{props.workingHours}</h4>
      <br /> */}
      <AsyncButton style={{ margin: "auto" }} onClick={() => {}}>
        {/* Request Appointment */}
        Register
      </AsyncButton>
    </MyCard>
  );
};

export default EachClinic;
