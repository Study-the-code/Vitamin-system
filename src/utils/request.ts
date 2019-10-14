
import axios from 'axios';
import { AxiosResponse } from 'axios/index';

const instance = axios.create({
  baseURL:'/api',
    timeout: 5000, // request timeout
    headers: {
      Authorization: 'Bearer DgZcRu7p9X2bkMrTseNpc3Wa2Df00ovN',
      'x-org-id': 61500,
      'x-org-type': 5,
      'x-user-id': 963245015
    }
})

//请求拦截器
instance.interceptors.request.use((config: any) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

//响应拦截器
instance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        if (res.code === 200) {
            return res
        }
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {


            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)// for debug

        return Promise.reject(error)
    }
)
export default instance;
