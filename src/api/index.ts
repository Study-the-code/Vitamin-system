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
    };
    //设置的tab表格
    public categoryList = async () => {
        return instance.post('/store/category-list')
    }
    public getTuan = async (params: any) => {
        return instance.post('/user/list', params);
    };
    // 楼层数据
    public getfloor = async () => {
        const result = await instance.post('/store/floor-list')
        console.log(result)
        return result
    };
    // e店铺数据
    public getshopList = async () => {
        const result = await instance.post('/store/get-store-list', {
            page: 1,
            is_e_shop: 1,
            scene_type: 1
        })
        console.log(result)
        return result
    };
    /**
     * 全部店铺跳详情
     * 参数 :id
     */
    public getAllshopdetail = async (id: any) => {
        const result = await instance.post('/store/get-store-info', {
            id: id
        })
        return result
    };
    /**
     * 获取操作历史数据
     * 参数：vm_store_id
     */
    public getHistory = async (id: any) => {
        const result = await instance.post('/store/get-store-history-list', {
            vm_store_id: id
        })
        return result
    }
    public gethome = async (params: any) => {
        const result = await instance.post('page-manage/list', {
            page: 1
        })
        return result
    }
    public getjiao = async (params: any) => {
        const result = await instance.post('/user/role-select-list', {
            role_type: 2
        })
        return result

    }
    public getmiao = async (params: any) => {
        const result = await instance.post('/role/role-desc-list', {
            mall_id: 61500,
            type: 1,
            page: 1
        })
        return result
    };
    /**
     * 会员
     *      会员卡
     *             会员卡图案接口
     *  不传递任何参数 post请求
     *   membership-setting/card-bg-list
     *              注册信息接口
     *  不传递任何参数 post请求
     *  membership-setting/register-info
     *              保存推荐提示语
     *  不传递任何参数 post请求
     *              使用条款
     *  不传递任何参数 post请求
     *              所属城市
     *    不传递任何参数 post请求
     *  membership-setting/city-tree
     *              商品门店
     *  /membership-setting/mall-store-list
     *      绑定银行卡设置
     *  /member/member-setting
     *      自拖二维码管理
     *  /vm-staff/list
     *  post请求
     *  参数：    page: 1
                page_size: 10
     */
    public getCardbgList = async () => {
        const result = await instance.post('/membership-setting/card-bg-list')
        return result
    };
    public goMessage = async () => {
        const result = await instance.post('/membership-setting/register-info')
        return result
    };
    public getMsg = async () => {
        const result = await instance.post('/membership-setting/reminder-info')
        return result
    }
    public useMsg = async () => {
        const result = await instance.post('/membership-setting/terms-info')
        return result
    };
    public getCity = async () => {
        const result = await instance.post('/membership-setting/city-tree')
        return result
    };
    public getShop = async () => {
        const result = await instance.post('/membership-setting/mall-store-list')
        return result
    };
    public Bindbank = async () => {
        const result = await instance.post('/member/member-setting')
        return result
    };
    public dragging = async (params:any) => {
        const result = await instance.post('/vm-staff/list',params)
        return result
    }

}
export default new Http()