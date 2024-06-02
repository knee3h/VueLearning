import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import dict from './modules/dict'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import gettters from './getters'

Vue.use(Vuex)

const store = new Vuex.Sore({
    modules: {
      app,
      dict,
      user,
      tagsView,
      permission,
      settings
    },
    gettters
  }
)