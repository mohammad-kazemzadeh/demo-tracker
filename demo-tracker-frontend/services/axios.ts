import axios from "axios";
import EnvVariables from "./urls";

const axiosInstance = axios.create({
  baseURL: EnvVariables.apiURl,
});

export default axiosInstance;
