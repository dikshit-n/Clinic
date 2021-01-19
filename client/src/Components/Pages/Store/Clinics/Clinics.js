import React, { useEffect, useState } from "react";
import MyDropDown from "../../../UI/DropDown/DropDown";
import EachField from "../../../UI/FormField/FormField";
import MyCard from "../../../UI/MyCard/MyCard";
import Spinner from "../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../Utility/axiosInstance";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import "./Clinics.css";
import EachClinic from "./EachClinic/EachClinic";

let country_state_district = require("country_state_district");

let districts = country_state_district.getDistrictsByStateId(32);

const Clinics = (props) => {
  const [district, setDistrict] = useState("All");
  const [show, setShow] = useState(false);
  const [clinics, setClinics] = useState([
    {
      clinicName: "Dinesh Clinics",
      doctorName: "Dr.Dinesh kumar",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
    },
    {
      clinicName: "Giri Clinics",
      doctorName: "Dr.Giri Sukesh",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
    },
    {
      clinicName: "Hari Clinics",
      doctorName: "Dr.Hari Hara Suthan",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
    },
    {
      clinicName: "Aakash Clinics",
      doctorName: "Dr.Aakash Don",
      workingHours: "9:00am to 10:00pm",
    },
  ]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .post("/getallclinics")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setClinics([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setClinics([]);
        // setError(true);
      });
  }, []);

  const getClinics = () => {
    let filteredClinics = [...clinics];
    if (district === "All") {
      return [...filteredClinics];
    } else {
      return [...filteredClinics.filter((el) => el.location === district)];
    }
  };

  let afterFilter = getClinics();

  return loading ? (
    <Spinner />
  ) : error ? (
    <MyCard>Something went wrong !</MyCard>
  ) : afterFilter.length === 0 ? (
    <>
      <EachField
        type="select"
        name="district"
        onChange={(value, name) => setDistrict(value)}
        options={[...districts.map((el) => el.name)]}
        value={district}
        placeholder="Choose Location"
      />
      <MyCard>
        <h4>No Clinics Found !</h4>
      </MyCard>
    </>
  ) : show ? (
    <AppointmentForm close={() => setShow(false)} />
  ) : (
    <>
      <EachField
        type="select"
        name="district"
        onChange={(value, name) => setDistrict(value)}
        options={[...districts.map((el) => el.name)]}
        value={district}
        placeholder="Choose Location"
      />
      <div className="flex-row flex-wrap">
        {afterFilter.map((el, index) => (
          <EachClinic {...el} key={index} onClick={() => setShow(true)} />
        ))}
      </div>
    </>
  );
};

export default Clinics;
