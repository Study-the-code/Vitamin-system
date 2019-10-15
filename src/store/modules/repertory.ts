import http from '@/api/index'
export default ({
    namespaced: true,
    state: {
        repertory: {}
    },
    mutations: {
        setStorelist(state: any, payload: any) {
            state.repertory = payload;
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