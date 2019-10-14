
import axios from 'axios';
import { AxiosResponse } from 'axios/index';

let getToken=()=>{
   return window.localStorage.getItem("x-nideshop-token")
}

const instance = axios.create({
    //  baseURL:/jasonandjay.com\/1701E\/yushiquan/.test(window.location.host)?"":"//169.254.198.188:8888",
     baseURL: 'https://betapartnerapi.weitaming.com',
     timeout: 1000,
     headers: {
        'Content-Type': 'application/json',
        'x-nideshop-token': getToken()
      }
})

//请求拦截器
instance.interceptors.request.use((config: any) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

//响应拦截器
instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;
