import http from '@/api/index'
export default ({
    namespaced: true,
    state: {
        repertoryList: {}
    },
    mutations: {
        setrepertory(state: any, payload: any) {
            state.repertoryList = payload;
            console.log(state,'1111111111111111111')
        }
    },
    actions: {
        async getrepertory({ commit }: any, payload?: any) {
            const result = await http.getrepertory()
            commit('setrepertory', result.data)
            return result
        }
    },
});