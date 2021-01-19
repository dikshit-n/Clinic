import React, { useEffect, useState } from "react";
import MyCard from "../../../../UI/MyCard/MyCard";
import Spinner from "../../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../../Utility/axiosInstance";
import "./Appointments.css";
import EachAppointment from "./EachAppointment/EachAppointment";

let country_state_district = require("country_state_district");

let districts = country_state_district.getDistrictsByStateId(32);

const Appointments = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clinics, setClinics] = useState([
    {
      clinicName: "Dinesh Clinics",
      doctorName: "Dr.Dinesh kumar",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
      date: "14-06-2001",
    },
    {
      clinicName: "Giri Clinics",
      doctorName: "Dr.Giri Sukesh",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
      date: "14-06-2001",
    },
    {
      clinicName: "Hari Clinics",
      doctorName: "Dr.Hari Hara Suthan",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
      date: "14-06-2001",
    },
    {
      clinicName: "Aakash Clinics",
      doctorName: "Dr.Aakash Don",
      workingHours: "9:00am to 10:00pm",
      location: "Namakkal",
      date: "14-06-2001",
    },
  ]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .post("/getallappointments")
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

  return loading ? (
    <Spinner />
  ) : error ? (
    <MyCard>Something went wrong !</MyCard>
  ) : clinics.length === 0 ? (
    <>
      <MyCard>
        <h4>No Appointments so far</h4>
      </MyCard>
    </>
  ) : (
    <>
      <div className="flex-row flex-wrap">
        {clinics.map((el, index) => (
          <EachAppointment {...el} key={index} />
        ))}
      </div>
    </>
  );
};

export default Appointments;
