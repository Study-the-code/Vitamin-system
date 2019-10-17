import http from '@/api/index'
const state = {
    categoryList:[]
}
const mutations = {
 setCategoryList(state:any,payload:any){
      state.categoryList=payload
   }
}
const actions = {
 async getCategoryList({commit}:any){
   let res= await http.categoryList();
   await commit("setCategoryList",res.data)      
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}