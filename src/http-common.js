import axios from "axios";

const API_SERVER = "http://54.167.85.36:8000/";

const apiClient = axios.create({
  baseURL: API_SERVER,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
