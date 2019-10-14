
import request from '../utils/index';
import qs from 'query-string'

export function getMenu(params:any){
    let newparams=qs.stringify(params);
    return request.post('/privilege/get-privilege-set',newparams);
}