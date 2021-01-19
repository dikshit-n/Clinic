import React, { useState } from "react";
import Alert from "../../../../UI/Alert/Alert";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";
import EachField from "../../../../UI/FormField/FormField";
import MyCard from "../../../../UI/MyCard/MyCard";
import Spinner from "../../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../../Utility/axiosInstance";
import { imageToPdf } from "../../../../Utility/base64ToPdf";
import "./RequestDetails.css";

const RequestDetails = (props) => {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [rejectLoading, setRejectLoading] = useState(false);
  const [acceptloading, setAcceptLoading] = useState(false);
  const [error, setError] = useState(null);
  var schema = [
    {
      displayName: "Clinic Name",
      value: props.clinicName,
    },
    {
      displayName: "Email",
      value: props.email,
    },
    {
      displayName: "Contact Number",
      value: props.contactNumber,
    },
    {
      displayName: "Address",
      type: "textarea",
      value: props.address,
    },
    {
      displayName: "workingTime",
      value: props.workingTime,
    },
  ];

  const rejectClinic = () => {
    setRejectLoading(true);
    axiosInstance
      .post("/rejectclinic", { clinicId: props.clinicId })
      .then((res) => {
        console.log(res.data);
        setRejectLoading(false);
        setAlertInfo({
          type: "success",
          message: "Rejected ",
          show: true,
        });
      })
      .catch((err) => {
        setAlertInfo({
          type: "error",
          message: "Something went wrong !",
          show: true,
        });
        setRejectLoading(false);
        setError(true);
      });
  };
  const acceptClinic = () => {
    setAcceptLoading(true);
    axiosInstance
      .post("/acceptclinic", { clinicId: props.clinicId })
      .then((res) => {
        console.log(res.data);
        setAcceptLoading(false);
        setAlertInfo({
          type: "success",
          message: "Accepted ",
          show: true,
        });
      })
      .catch((err) => {
        setAlertInfo({
          type: "error",
          message: "Something went wrong !",
          show: true,
        });
        setAcceptLoading(false);
        setError(true);
      });
  };

  const hideAlert = () => {
    if (!error) {
      setAlertInfo({
        type: "",
        message: "",
        show: false,
      });
      props.close(true);
    } else {
      setAlertInfo({
        type: "",
        message: "",
        show: false,
      });
      setError(null);
    }
  };

  return props.loading ? (
    <Spinner />
  ) : (
    <MyCard>
      <Alert {...alertInfo} hideAlert={hideAlert} />
      <AsyncButton
        type="button"
        onClick={() => props.close(false)}
        className="bg-red white"
      >
        <i className="fa fa-chevron-left" /> &nbsp;&nbsp;Back
      </AsyncButton>
      <br />
      {schema.map((el, index) => (
        <EachField {...el} readOnly key={index} />
      ))}
      <AsyncButton
        className="bg-light-blue-gradient"
        onClick={() => imageToPdf(props.proof)}
      >
        Download Certificate
      </AsyncButton>
      <br />
      <br />
      <div className="flex-row">
        <AsyncButton
          type="button"
          onClick={acceptClinic}
          loading={acceptloading}
        >
          Accept
        </AsyncButton>
        &nbsp;&nbsp;&nbsp;
        <AsyncButton
          type="button"
          className="bg-red white"
          onClick={rejectClinic}
          loading={rejectLoading}
        >
          Reject
        </AsyncButton>
      </div>
    </MyCard>
  );
};

export default RequestDetails;
