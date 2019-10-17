import instance from '@/utils/request'
import qs from 'query-string'
let params = {
    page: 1,
    scene_type: 1,
}
class Http {
    [key: string]: any;
    public getshoplist = async () => {
        console.log(qs.stringify(params))
        const result = await instance.post('/store/get-store-list', qs.stringify(params))
        return result
    };

    public getrepertory = async () => {
        const result = await instance.post('/prod/stock-list', qs.stringify({
            page: 1,
            pageSize: 10,
            status: 1,
            vm_store_id: 3446
        }))
        return result
    };
    public getList = (params: any) => {
        return instance.post('/order/get-main-order-list', params)
    };
    public getMenu = async (params: any) => {
        let newparams = qs.stringify(params);
        return instance.post('/privilege/get-privilege-set', newparams);
    };
    public getTabList=async (params:any)=>{
        return instance.post('/order/get-order-search',params);
    };
    public getbrand =async ()=>{
        return instance.post('/store/brand-list')
    };
    public categoryList =async ()=>{
        return instance.post('/store/category-list')
    }
    public getTuan=async (params:any)=>{
        return instance.post('/user/list',params);
    }

}
export default new Http()