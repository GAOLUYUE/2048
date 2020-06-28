<template>
  <div id="app">
    <router-link :to="'/home/'+a" active-class='active'>hhh</router-link>
    <!-- <router-link to='/car' active-class='active'>car</router-link> -->
    <div @click="change()">aaaa</div>
    <router-view></router-view>
    <h1>{{$store.getters.moreCount(10)}}</h1>
    <button @click="add">{{$store.state.counter}}</button>
    <button @click="addNum(5)">{{$store.state.counter}}</button>
  </div>
</template>

<script>
import Home from './components/Home'
import {Plus,PlusNum} from './store/mutations-types'
export default {
  name: 'App',
  components: {
    Home
  },
  data(){
    return {
      a:"gly",
    }
  },
  methods:{
    change(){
      // 字符串
      // this.$router.push('home')
// // 对象
      // this.$router.push({ path: 'home' })
// // 命名的路由
      // this.$router.push({ name: 'user', params: { userId: 123 }})
// // 带查询参数，变成 /register?plan=123
      this.$router.push({ path: '/user', query: { plan: '123' }})
    },
    add(){
      this.$store.commit(Plus)
    },
    addNum(num){
      this.$store.commit(PlusNum,num)
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
