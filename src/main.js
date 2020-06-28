import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(result =>{
//   console.log(result)
// })
axios.get('http://123.207.32.32:8000/home/data',
{params:{type:'sell',page:1}})
.then(res => {
  console.log(res)
})