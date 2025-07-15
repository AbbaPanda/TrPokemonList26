import axios from 'axios';
import { APIConfig}  from '../../config/APIConfig';

export const api = axios.create({
  baseURL: APIConfig.BASE_URL,headers: {
    "Content-Type": "application/json",
  },
});