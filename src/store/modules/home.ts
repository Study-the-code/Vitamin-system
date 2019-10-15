
import http from '@/api/index'

export default ({
    namespaced: true,
    state: {
        storelist: {}
    },
    mutations: {
        setStorelist(state: any, payload: any) {
            state.storelist = payload;
        }
    },
    actions: {
        async getshoplist({ commit }: any, payload?: any) {
            const result = await http.getshoplist()
            console.log(result,'-------------')
            commit('setStorelist', result.data)
            return result
        }
    },
});