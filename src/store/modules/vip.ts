import http from '@/api/index'
export default {
    namespaced: true,
    state: {
        cardPicture:[],
        messageList:[],
        message:[],
        msg:[],
        shopList:[],
        cityList:[],
        membersetList:[],
        qrcore:[],
        processlog:[],
        upList:[]
    },
    mutations: {
        setcardPicture(state:any,payload:any){
            state.cardPicture=payload
        },
        setMessage(state:any,payload:any){
            state.messageList=payload
        },
        setMsg(state:any,payload:any){
            state.message=payload
        },
        setmsg(state:any,payload:any){
            state.msg=payload
        },
        setshop(state:any,payload:any){
            state.shopList=payload
        },
        setCityTree(state:any,payload:any){
            state.cityList=payload
        },
        setBindbak(state:any,payload:any){
            state.membersetList=payload
        },
        setqrcord(state:any,payload:any){
            state.qrcore=payload
        },
        setProcess(state:any,payload:any){
            state.processlog=payload
        },
        setupload(state:any,payload:any){
            state.upList=payload
        }
    },
    actions: {
        async getcardPicture({ commit }: any, payload: any) {
            let res = await http.getCardbgList();
            await commit("setcardPicture", res.data);
        },
        async getMessage({commit}:any,payload:any){
            const res=await http.goMessage()
            await commit('setMessage',res.data)
        },
        async _getMsg({commit}:any,payload:any){
            const res=await http.getMsg()
            await commit('setMsg',res.data)
        },
        async useMsg({commit}:any,payload:any){
            const res=await http.useMsg()
            await commit('setmsg',res.data)
        },
        async getshop({commit}:any,payload:any){
            const res=await http.getShop()
            await commit('setshop',res.data)
        },
        async getCityTree({commit}:any,payload:any){
            const res=await http.getCity()
            await commit('setCityTree',res.data)
        },
        async getBindbank({commit}:any,payload:any){
            const res=await http.Bindbank()
            await commit('setBindbak',res.data)
        },
        async getqrcode({commit}:any,payload:any){
            const params={
                page: 1,
                page_size: 10
            }
            const res=await http.dragging(params)
            await commit('setqrcord',res.data)
        },
        async Processing({commit}:any,payload:any){
            const res=await http.Download()
            await commit('setProcess',res.data)
        },
        async Uploadling({commit}:any,payload:any){
            const params={
                page: 1,
                page_size: 10 
            }
            const res=await http.Upload(params)
            console.log(res)
            await commit('setupload',res.data)
        }
    }
}