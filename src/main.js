import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouer from 'vue-router'
import column from 'components/column/column'
import funnel from 'components/funnel/funnel'
import heat from 'components/heat/heat'
import point from 'components/point/point'
import line from 'components/line/line'
import dashboard from 'components/dashboard/dashboard'
import multipleColumn from 'components/multipleColumn/multipleColumn'
import bing from "./components/bingzhuangtu/bing";
import index from "./components/index/index";
import {DatePicker,Table,Button,TableColumn} from 'element-ui'
import singer from "./components/singer/singer";
import singerandsong from "./components/singerandsong/singerandsong";
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8882/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component(DatePicker.name, DatePicker)
Vue.component(Table.name, Table)
Vue.component(Button.name, Button)
Vue.component(TableColumn.name, TableColumn)
Vue.use(VueRouer)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#325B69', '#75852f', '#ae5548', '#4fa88b', '#9CC2B0', '#C98769', '#AE5548', '#4FA88B', '#75852F'],
    singerid: 1,
    singername: '1',
    singermg1v1url: 1,
    singerinformation: 1,
    singerpicurl: 1
  },
  mutations: {
    singerid(state, singerid){
      state.singerid = singerid
    },
    singername(state, singername){
      state.singername = singername
    },
    singermg1v1url(state, singermg1v1url){
      state.singermg1v1url = singermg1v1url
    },
    singerinformation(state, singerinformation){
      state.singerinformation = singerinformation
    },
    singerpicurl(state, singerpicurl){
      state.singerpicurl = singerpicurl
    }
  }
});
const router = new VueRouer({
  routes: [{
    path: '/column',
    component: column
  }, {
    path: '/funnel',
    component: funnel
  }, {
    path: '/heat',
    component: heat
  }, {
    path: '/point',
    component: point
  }, {
    path: '/dashboard',
    component: dashboard
  }, {
    path: '/multipleColumn',
    component: multipleColumn
  }, {
    path: '/line',
    component: line
  }, {
    path: '/bing',
    component: bing
  }, {
    path: '/index',
    component: index
  }, {
    path: '/singer',
    component: singer
  }, {
    path: '/singerandsong',
    component: singerandsong
  }],
  linkActiveClass: 'active'
})
new Vue({
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('singer')
