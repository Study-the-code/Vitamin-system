import {getMenu} from '../../server/index';
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
   let res= await getMenu(payload);
   await commit("setMenuData",res.data)      
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}