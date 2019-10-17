
import http from '@/api/index'
const state = {
  arr: [],
  tabList: []
}

const mutations = {
  orderData(state: any, payload: any) {
    state.arr = payload;
  },
  tabData(state: any, payload: any) {
    state.tabList = payload;
    console.log(state.tabList)

  }
}

const actions = {
  async getOrder({ commit }: any, payload: any) {
    let obj = {
      org_id: 61500,
      page: 1,
      org_type: 5,
      status: '',
      sort: ''
    };
    let res = await http.getList(obj);
    console.log(res.data)
    await commit("orderData", res.data);
  },
  async getTab({ commit }: any, payload: any) {
    // let obj={
    //   org_id:61500,
    //   org_type:5,
    //   status:2
    // };
    let res = await http.getTabList({});
    console.log(res.data)
    await commit("tabData", res.data);
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}