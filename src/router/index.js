import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home.vue'
// import Car from '../components/Car.vue'
Vue.use(VueRouter)
const Home = () => import('../components/Home')
const Car = () => import('../components/Car.vue')
const routes = [
{
    path:'/',
    redirect:'/home'
},
{
    path:'/home/:userId',
    component:Home,
    // meta:{
    //     title:"home"
    // }
},
{
    path:'/user',
    component:Car,
    // meta:{
    //     title:"car"
    // }
}
// {
//     path:'/car',
//     component:Car
// }
]//配置url和组件间的映射关系
const router = new VueRouter({
    routes,
    mode:"history",
    linkActiveClass:'active'
})
// router.beforeEach((to,from,next) => {
//     document.title = to.matched[0].meta.title
//     next()
// })
export default router