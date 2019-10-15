import request from '../utils/index';

export function  getList(params:any){
    return request.post('/order/get-main-order-list',params)
}

export function getTabList(params:any){
    return request.post('/order/get-order-search',params)
}