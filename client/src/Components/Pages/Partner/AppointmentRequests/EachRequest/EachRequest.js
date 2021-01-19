import React from "react";
import Col from "reactstrap/lib/Col";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";
import MyCard from "../../../../UI/MyCard/MyCard";
import "./EachRequest.css";

const EachRequest = (props) => {
  return (
    <Col lg="6" md="6" sm="12" className="each-request-container">
      <MyCard
        className="hover-grow each-request d-flex justify-content-between"
        onClick={props.onClick}
      >
        {/* <i className="fas fa-clinic-medical" /> */}
        <div className="flex-row">
          {props.clinicName}
          <br />
          {props.location}
        </div>
        <AsyncButton
          type="button"
          className="bg-blue white"
          onClick={props.onClick}
        >
          View
        </AsyncButton>
      </MyCard>
    </Col>
  );
};

export default EachRequest;
