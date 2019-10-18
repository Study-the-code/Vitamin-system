import http from '@/api/index'
const state = {
    categoryList:[],
}
const mutations = {
 setCategoryList(state:any,payload:any){
      state.categoryList=payload
   },
}
const actions = {
 async getCategoryList({commit}:any){
   let res= await http.categoryList();
   await commit("setCategoryList",res.data)      
  },
  async getFloorList({commit}:any){
   let res= await http.floorList();
    await commit("setCategoryList",res.data.list)
  },
  async addCategorySave({commit}:any,params:any){
    let res= await http.categorySave(params);
    return res
  },
  async categoryDelete({commit}:any,params:any){
    let res= await http.categoryDelete(params);
    return res
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}