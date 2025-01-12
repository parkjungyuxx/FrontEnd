import axios from "axios";

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default AxiosInstance;
