import http from '@/api/index'
const state = {
  menuData:[]
}
const mutations = {
   setMenuData(state:any,payload:any){
      state.menuData=payload
   }
}
const actions = {
 async getMenuData({commit}:any,payload:any){
   let res= await http.getMenu(payload);
   await commit("setMenuData",res.data)      
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}