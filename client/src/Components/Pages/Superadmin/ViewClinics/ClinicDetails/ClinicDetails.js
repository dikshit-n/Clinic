import React, { useState } from "react";
import Alert from "../../../../UI/Alert/Alert";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";
import EachField from "../../../../UI/FormField/FormField";
import MyCard from "../../../../UI/MyCard/MyCard";
import Spinner from "../../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../../Utility/axiosInstance";
import { imageToPdf } from "../../../../Utility/base64ToPdf";
import "./ClinicDetails.css";

const ClinicDetails = (props) => {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [deleteLoading, setDeleteLoading] = useState(false);
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

  const deleteClinic = () => {
    setDeleteLoading(true);
    axiosInstance
      .post("/deleteclinic", { clinicId: props.clinicId })
      .then((res) => {
        console.log(res.data);
        setDeleteLoading(false);
        setAlertInfo({
          type: "success",
          message: "Deleted ",
          show: true,
        });
      })
      .catch((err) => {
        setAlertInfo({
          type: "error",
          message: "Something went wrong !",
          show: true,
        });
        setDeleteLoading(false);
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
      <AsyncButton
        type="button"
        onClick={() => props.close(false)}
        className="bg-red white"
      >
        <i className="fa fa-chevron-left" /> &nbsp;&nbsp;Back
      </AsyncButton>
      <br />
      <Alert {...alertInfo} hideAlert={hideAlert} />
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
      <AsyncButton
        type="button"
        className="bg-red white"
        loading={deleteLoading}
        onClick={deleteClinic}
      >
        Delete Clinic
      </AsyncButton>
    </MyCard>
  );
};

export default ClinicDetails;
