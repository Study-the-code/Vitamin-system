import instance from '@/utils/request'

const getshoplist =async  () => {
    const result = await instance.post('/store/get-store-list')
    return result
    // return instance({
    //     url:"/store/get-store-list",
    //     method:'post',
    //     baseURL:'/api'
    // })
}
export {
    getshoplist
}