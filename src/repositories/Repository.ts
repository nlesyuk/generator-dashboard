import axios from "axios";
import { API_URL } from "@/helper/constants";

const instance = axios.create({
  timeout: 5000,
  baseURL: API_URL
});


export default instance;
