import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../Utility/axiosInstance";
import "./ViewClinics.css";
import EachClinic from "./EachClinic/EachClinic";
import ClinicDetails from "./ClinicDetails/ClinicDetails";
import Spinner from "../../../UI/Spinner/Spinner";
const ViewClinics = (props) => {
  const [data, setData] = useState([
    { clinicName: "Mani Clinic", location: "Coimbatore" },
    { clinicName: "Dinesh Clinic", location: "Coimbatore" },
    { clinicName: "Giri Clinic", location: "Coimbatore" },
    { clinicName: "Gokul Clinic", location: "Coimbatore" },
    { clinicName: "Hari Clinic", location: "Coimbatore" },
    { clinicName: "Akash Clinic", location: "Coimbatore" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // request details
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axiosInstance
      .post("/viewclinics")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setData([]);
        // setError("Something went Wrong !");
      });
  };

  const openClinic = (id) => {
    setOpen(true);
    getClinicDetails(id);
  };

  const goback = (reload) => {
    console.log(reload);
    if (reload) {
      setOpen(false);
      fetchData();
    } else {
      setOpen(false);
    }
  };

  const getClinicDetails = (id) => {
    setDetailLoading(true);
    axiosInstance
      .post("/requestDetail", { clinicId: id })
      .then((res) => {
        console.log(res.data);
        setDetailLoading(false);
        setDetails({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
        setDetailLoading(false);
        setDetails({});
        setDetailError("Something went wrong !");
      });
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <h4>Something went wrong !</h4>
  ) : data.length === 0 ? (
    <h4>No Clinics !</h4>
  ) : open ? (
    <ClinicDetails
      close={goback}
      {...details}
      loading={detailLoading}
      error={detailError}
    />
  ) : (
    <div className="flex-row flex-wrap">
      {data.map((el, index) => (
        <EachClinic
          {...el}
          key={index}
          onClick={() => openClinic(el.clinicId)}
        />
      ))}
    </div>
  );
};

export default ViewClinics;
