import axios from 'axios'
import {baseUrl} from '../constants/constanst'
 const instance = axios.create({
    baseURL: baseUrl,
  
  });

export default instance  