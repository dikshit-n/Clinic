import axios from "axios";
import { getCookie } from "./cookies";

export const axiosInstance = axios.create({
  // baseURL: "https://cors-anywhere.herokuapp.com/https://ezwalkin.herokuapp.com",
  baseURL: "http://13.233.83.5:5000/api/",
  // baseURL: "https://cors-anywhere.herokuapp.com/http://65.0.203.228:5000/",
  // baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${getCookie("token")}`,
  },
});
