import http from '@/api/index'
export default {
    state:{
        list:{}
    },
    mutations:{
        setbrand(state:any,payload:any){
            state.payload=payload
            console.log(state)
        }
    },
    actions:{
        async getbrend({commit}:any,payload:any){
            const result=await http.getbrand()
            commit('setbrand',result.data)
            return result
        }
    },
}