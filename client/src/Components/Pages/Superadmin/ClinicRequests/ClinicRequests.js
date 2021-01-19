import React, { useEffect, useState } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import { axiosInstance } from "../../../Utility/axiosInstance";
import "./ClinicRequests.css";
import EachRequest from "./EachRequest/EachRequest";
import RequestDetails from "./RequestDetails/RequestDetails";
const ClinicRequests = (props) => {
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
      .post("/clinicrequests")
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
    getRequestDetails(id);
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

  const getRequestDetails = (id) => {
    setDetailLoading(true);
    axiosInstance
      .post("/requestDetail", { requestId: id })
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
    <RequestDetails
      close={goback}
      {...details}
      loading={detailLoading}
      error={detailError}
    />
  ) : (
    <div className="flex-row flex-wrap">
      {data.map((el, index) => (
        <EachRequest
          {...el}
          key={index}
          onClick={() => openClinic(el.requestId)}
        />
      ))}
    </div>
  );
};

export default ClinicRequests;
