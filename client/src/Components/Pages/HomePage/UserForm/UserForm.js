import React, { useEffect, useRef, useState } from "react";
import Alert from "../../../UI/Alert/Alert";
import AsyncButton from "../../../UI/AsyncButton/AsyncButton";
import EachField from "../../../UI/FormField/FormField";
import MyCard from "../../../UI/MyCard/MyCard";
import Spinner from "../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../Utility/axiosInstance";
import { imageToPdf } from "../../../Utility/base64ToPdf";
import { compressImage } from "../../../Utility/CompressImage";
import { filterNumbers } from "../../../Utility/filterNumbers";
import { processImage } from "../../../Utility/processImage";
import "./UserForm.css";

const UserForm = (props) => {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    contactNumber: "",
    gender: "",
  });

  const changeHandler = ({ target: { value, name } }) => {
    let numberTypes = ["contactNumber"];
    if (numberTypes.includes(name)) {
      value = filterNumbers(value);
    }
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const valid = () => {
    return Object.values(formData).every((el) => el.toString().trim() !== "");
  };

  var schema = [
    {
      displayName: "Name",
      value: formData.clinicName,
      onChange: changeHandler,
      required: true,
      name: "name",
    },
    {
      displayName: "Password",
      value: formData.password,
      onChange: changeHandler,
      required: true,
      type: "password",
      name: "password",
    },
    {
      displayName: "Email",
      type: "email",
      value: formData.email,
      onChange: changeHandler,
      required: true,
      name: "email",
    },
    {
      displayName: "Gender",
      options: ["Male", "Female", "Non-Binary"],
      type: "select",
      value: formData.gender,
      onChange: (value) => setFormData((prev) => ({ ...prev, gender: value })),
      required: true,
      name: "gender",
    },
    {
      displayName: "Contact Number",
      value: formData.contactNumber,
      onChange: changeHandler,
      type: "text",
      required: true,
      name: "contactNumber",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    let submitData = { ...formData };
    console.log(submitData);
    setSubmitting(true);
    axiosInstance
      .post("/giri/project", submitData)
      .then((res) => {
        console.log(res.data);
        setSubmitting(false);
        setAlertInfo({
          type: "Account Created !",
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
        setSubmitting(false);
        setError(true);
      });
  };

  const hideAlert = () => {
    setAlertInfo({
      type: "",
      message: "",
      show: false,
    });
    setError(null);
  };

  return loading ? (
    <Spinner />
  ) : (
    <MyCard title="User Account Creation" style={{ width: "80%" }}>
      <AsyncButton
        type="button"
        onClick={() => props.close()}
        className="bg-red white"
      >
        <i className="fa fa-chevron-left" /> &nbsp;&nbsp;Back
      </AsyncButton>
      <br />
      <Alert {...alertInfo} hideAlert={hideAlert} />
      <form onSubmit={submitHandler}>
        {schema.map((el, index) => (
          <EachField {...el} key={index} />
        ))}
        <br />
        <AsyncButton
          disabled={!valid()}
          type="submit"
          className="bg-red white"
          loading={submitting}
        >
          Update
        </AsyncButton>
      </form>
    </MyCard>
  );
};

export default UserForm;
