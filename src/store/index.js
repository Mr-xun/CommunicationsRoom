import Vue from 'vue'
import vuex from 'vuex'

/* 引入各部分组件 */
import meeting from './modules/meeting'
/* End 引入各部分组件 */
Vue.use(vuex)
export default new vuex.Store({
  modules: {
    meeting,
  }
})
