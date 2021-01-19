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
import "./ClinicDetails.css";

const ClinicDetails = (props) => {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    clinicName: "",
    email: "",
    contactNumber: "",
    address: "",
    workingTime: "",
  });

  const inputRef = useRef();

  const [proof, setProof] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axiosInstance
      .post("/getprofile")
      .then((res) => {
        console.log(res.data);
        setFormData({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
    return (
      Object.values(formData).every((el) => el.toString().trim() !== "") &&
      proof !== null
    );
  };

  var schema = [
    {
      displayName: "Clinic Name",
      value: formData.clinicName,
      onChange: changeHandler,
      required: true,
      name: "clinicName",
    },
    {
      displayName: "Email",
      value: formData.email,
      onChange: changeHandler,
      required: true,
      name: "email",
    },
    {
      displayName: "Contact Number",
      value: formData.contactNumber,
      onChange: changeHandler,
      type: "text",
      required: true,
      name: "contactNumber",
    },
    {
      displayName: "Address",
      type: "textarea",
      value: formData.address,
      onChange: changeHandler,
      required: true,
      name: "address",
    },
    {
      displayName: "Working Time",
      value: formData.workingTime,
      onChange: changeHandler,
      required: true,
      name: "workingTime",
      placeholder: "eg: 9:00am to 10:00pm",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    let submitData = { ...formData, proof: proof };
    console.log(submitData);
    // setSubmitting(true);
    // axiosInstance
    //   .post("/updateprofile", { clinicId: props.clinicId })
    //   .then((res) => {
    //     console.log(res.data);
    //     setSubmitting(false);
    //     setAlertInfo({
    //       type: "success",
    //       message: "Deleted ",
    //       show: true,
    //     });
    //   })
    //   .catch((err) => {
    //     setAlertInfo({
    //       type: "error",
    //       message: "Something went wrong !",
    //       show: true,
    //     });
    //     setSubmitting(false);
    //     setError(true);
    //   });
  };

  const hideAlert = () => {
    setAlertInfo({
      type: "",
      message: "",
      show: false,
    });
    setError(null);
  };

  const checkForErrors = (file) => {
    const supportedFormats = ["pdf", "PDF"];
    return !supportedFormats.some((el) => file.name.endsWith(el));
  };

  const imageChangeHandler = (event) => {
    let file = event.target.files[0];
    setError(null);
    if (file) {
      let error = checkForErrors(file);
      if (error) {
        setFileName("");
        setProof(null);
        return setError("Invalid Format. Choose only PDF");
      } else {
        setFileName(file.name);
        setProcessing(true);
        processImage(file, (extractedData) => {
          setProof(extractedData);
          setProcessing(false);
        });
      }
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <MyCard>
      <br />
      <Alert {...alertInfo} hideAlert={hideAlert} />
      <form onSubmit={submitHandler}>
        {schema.map((el, index) => (
          <EachField {...el} key={index} />
        ))}
        <div className="flex-row">
          <AsyncButton
            type="button"
            className={
              "bg-light-blue-gradient white " +
              (processing ? "skeleton-loading" : "")
            }
            onClick={() => inputRef.current.click()}
          >
            Upload Certificate
          </AsyncButton>
          &nbsp;&nbsp;&nbsp;
          <p style={{ color: "green" }}>{fileName}</p>
        </div>
        <p style={{ color: "coral" }}>{error}</p>
        <input
          disabled={processing || loading || submitting}
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          onChange={imageChangeHandler}
        />
        <br />
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

export default ClinicDetails;
