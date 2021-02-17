import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const [college, setCollege] = useState(null);
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.login);
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/college/list")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setColleges([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setClinics([]);
        // setError(true);
      });
  }, []);

  const getCourses = (id) => {
    setShow(true);
    setLoading(true);
    axiosInstance
      .get(`college/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setCourses([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setClinics([]);
        // setError(true);
      });
  };

  let afterFilter = data.registeredCourses;
  console.log(data);
  return loading ? (
    <Spinner />
  ) : error ? (
    <MyCard>Something went wrong !</MyCard>
  ) : afterFilter.length === 0 && !show ? (
    <>
      <EachField
        type="select"
        name="college"
        onChange={(value, name) => {
          setCollege(value);
          getCourses(colleges.find((el) => el.name === value)?.collegeId);
        }}
        options={[...colleges.map((el) => `${el.name}`)]}
        // options={[...districts.map((el) => el.name)]}
        value={college}
        placeholder="Choose College"
      />
      <MyCard>
        <h4>No Courses Found !</h4>
      </MyCard>
    </>
  ) : show ? (
    <>
      <EachField
        type="select"
        name="college"
        onChange={(value, name) => {
          setCollege(value);
          getCourses(colleges.find((el) => el.name === value)?.collegeId);
        }}
        options={[...colleges.map((el) => `${el.name}`)]}
        value={college}
        placeholder="Choose Location"
      />
      <div className="flex-row flex-wrap">
        {courses.map((el, index) => (
          <EachClinic {...el} key={index} />
        ))}
      </div>
    </>
  ) : null;
};

export default Clinics;
