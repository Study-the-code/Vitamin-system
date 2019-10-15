import Vue from 'vue'
import Vuex from 'vuex'

// import menu from './modules/menu'
Vue.use(Vuex)

declare module 'vue/types/vue' {
  interface Vue {
    [moduleName:string]:any
  }
}

const modulesFiles = require.context('./modules', true, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules:any, modulePath:any) => {
  // set './app.js' => 'app'
  const moduleName= modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store;