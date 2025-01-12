import axios from "axios";


const AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDMxNTE3MzRjYTI5ZjM1YTY0YTkyMDAyZTA4NTZlNiIsIm5iZiI6MTczNjU2NzgwNy4yODMsInN1YiI6IjY3ODFlYmZmMmIyOWE5MThkMDRlOWM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUvxAkzmQwfgJiJ51zrdKQ6lmEh6sTAE_nLJEu8YY5Q",
  },
});

export default AxiosInstance;
