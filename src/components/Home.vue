<template>
  <div >
      <h1>家</h1>
      <h1>{{userId}}</h1>
  </div>
</template>

<script>
export default {
name:'Home',
  components:{},
  data(){
    return {
    }
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  // created(){
  //   document.title = 'home'
  // }
}
</script>
<style  scoped>
</style>