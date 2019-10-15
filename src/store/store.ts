import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home'
import createLogger from 'vuex/dist/logger'
import repertory from './modules/repertory'
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLogger()],
  modules:{
    home,
    repertory
  }
});
