import http from '@/api/index'
export default {
    // namespaced: true,
    state:{
        list:{}
    },
    mutations:{
        setpage(state:any,payload:any){
            state.payload=payload
            console.log(state)
        }
    },
    actions:{
        async getpagelist({commit}:any,payload:any){
            const result=await http.getpagelist()
            commit('setpage',result.data.list)
            return result
        }
    },
}