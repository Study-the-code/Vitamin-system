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
    public getTabList = async (params: any) => {
        return instance.post('/order/get-order-search', params);
    };
    public getbrand = async () => {
        return instance.post('/store/brand-list')
    }
    public getTuan = async (params: any) => {

        const result = await instance.post('/user/list', {
            type: 2,
            page: 1,

        });
        console.log(result)
        return result
        // return instance.post('/user/list',params)
    }
    public gethome=async(params:any)=>{
        const result=await instance.post('page-manage/list',{
            page: 1
        })
        return result
    }
    public getjiao=async(params:any)=>{
        const result=await instance.post('/user/role-select-list',{
            role_type: 2
        })
        return result
        
    }
    public getmiao=async(params:any)=>{
        const result=await instance.post('/role/role-desc-list',{
            mall_id: 61500,
            type: 1,
            page: 1
        })
        return result
        
    }
    

}
export default new Http()