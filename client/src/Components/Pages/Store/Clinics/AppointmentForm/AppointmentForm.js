import React, { useState } from "react";
import Alert from "../../../../UI/Alert/Alert";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";
import EachField from "../../../../UI/FormField/FormField";
import MyCard from "../../../../UI/MyCard/MyCard";
import { axiosInstance } from "../../../../Utility/axiosInstance";
import "./AppointmentForm.css";

const AppointmentForm = (props) => {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "",
    problem: "",
    appointmentTime: "",
  });

  const changeHandler = ({ target: { value, name } }) => {
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  var schema = [
    {
      displayName: "Patient Name",
      value: formData.patientName,
      onChange: changeHandler,
      required: true,
      name: "patientName",
    },
    {
      displayName: "Problem",
      value: formData.problem,
      onChange: changeHandler,
      required: true,
      name: "problem",
    },
    {
      displayName: "Appointment Time",
      value: formData.appointmentTime,
      onChange: changeHandler,
      required: true,
      name: "appointmentTime",
      placeholder: "eg. 9:00am  to 10:00pm",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    // setLoading(true)
    // axiosInstance.post('/addappointment')
    // .then(res => {
    //     console.log(res.data)
    //     setLoading(false)
    //     setAlertInfo({
    //         show: true,
    //         type: 'success',
    //         message: 'Appointment Requested'
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     setLoading(false)
    // setError(true)
    //     setAlertInfo({
    //         show: true,
    //         type: 'error',
    //         message: "Appointment Request Failed"
    //     })
    // })
  };

  const valid = () => {
    return Object.values(formData).every((el) => el.toString().trim() !== "");
  };

  const hideAlert = () => {
    if (error) {
      setAlertInfo({
        show: false,
        message: "",
        type: "",
      });
      setError(false);
    } else {
      setError(false);
      setAlertInfo({
        show: false,
        message: "",
        type: "",
      });
      props.goback();
    }
  };

  return (
    <MyCard>
      <Alert {...alertInfo} hideAlert={hideAlert} />
      <AsyncButton
        type="button"
        onClick={() => props.close()}
        className="bg-red white"
      >
        <i className="fa fa-chevron-left" /> &nbsp;&nbsp;Back
      </AsyncButton>
      <br />
      <form onSubmit={submitHandler}>
        {schema.map((el, index) => (
          <EachField {...el} key={index} />
        ))}
        <AsyncButton loading={loading} type="submit" disabled={!valid()}>
          Request
        </AsyncButton>
      </form>
    </MyCard>
  );
};
export default AppointmentForm;
