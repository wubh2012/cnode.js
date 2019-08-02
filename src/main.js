import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Loading from "@/components/Loading";

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('XLoading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





Vue.filter('formatterDate', function (str) {
  if (!str) {
    return ''
  }
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + ' 秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + ' 分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + ' 小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + ' 天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + ' 月前'
  } else {
    return parseInt(time / 31536000000) + ' 年前'
  }
})
Vue.filter('formatterTab', function (item) {
  if(!item){
    return ''
  }
  let tabObj = {
    ask: '问答',
    share: '分享',
    job: '招聘',
    dev: '客户端测试'
  };
  if (item.top === true) {
    return '置顶';
  } else if (item.good === true) {
    return '精华';
  } else {
    return tabObj[item.tab] || '其它';
  }
})