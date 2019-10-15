import axios from 'axios';
import { AxiosResponse } from 'axios/index';

 function  getToken(cname: string){
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split(";");//分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        console.log(cname===arr[0])
        if (arr[0] === cname) {
         return arr[1];
        }
    }
    return "";
}

const instance = axios.create({
    baseURL: '/api',
<<<<<<< HEAD
    timeout: 10000,
=======
    // timeout: 1000,
>>>>>>> f7fe22d322a2aceca7342320e1319b19832b76ae
    headers: {   
        'x-org-id': getToken(" org_id"),
        "x-org-type": getToken(" org_type"),
        "x-user-id": getToken(" userId"),
        "Authorization":getToken(" Authorization")
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
