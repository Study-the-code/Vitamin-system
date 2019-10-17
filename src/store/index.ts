import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

declare module 'vue/types/vue' {
  interface Vue {
    [moduleName:string]:any
  }
}

const modulesFiles = require.context('./modules', true, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules:any, modulePath:any) => {
  const moduleName= modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store
