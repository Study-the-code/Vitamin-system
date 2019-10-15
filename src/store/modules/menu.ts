import { getList, getTabList } from '../../server/index';

const state = {
  arr: [],
  tabList: []
}

const mutations = {
  orderData(state: any, payload: any) {
    state.arr = payload;
    //console.log(state.arr,'1111')
  },
  tabData(state: any, payload: any) {
    state.tabList = payload;
    console.log(state.tabList)

  }
}

const actions = {
  //全部：
  async getOrder({ commit }: any, payload: any) {
    let obj = {
      org_id: 61500,
      page: 1,
      org_type: 5,
      status: '',
      sort: ''
    };
    let res = await getList(obj);
    console.log(res.data)
    await commit("orderData", res.data);
  },
  async getTab({ commit }: any, payload: any) {
    // let obj={
    //   org_id:61500,
    //   org_type:5,
    //   status:2
    // };
    let res = await getTabList({});
    console.log(res.data)
    await commit("tabData", res.data);
  },
  async susList({ commit }: any, payload: any) {
    let obj = {
      org_id: 61500,
      page: 1,
      org_type: 5,
      status: 4,
      sort: ''
    };
    let res = await getList(obj);
    console.log(res.data.list);
  },
  //代付款：
  async waitList({ commit }: any, payload: any) {
    let obj = {
      org_id: 61500,
      page: 1,
      org_type: 5,
      status: 1,
      sort: ''
    }
    let res = await getList(obj);
    console.log(res.data.list);
  },
  //待发货：
  

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}