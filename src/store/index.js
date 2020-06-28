import Vue from 'vue'
import Vuex from 'vuex'
import {Plus,PlusNum} from './mutations-types'
Vue.use(Vuex)//安装插件

const store = new Vuex.Store({
    state:{
        counter:0
    },
    mutations:{
        [Plus](state){
            state.counter++
        },
        [PlusNum](state,num){
            state.counter+=num
        }
    },
    actions:{

    },
    getters:{
        moreCount(state){
            return function(num){
                return state.counter+num
            }
        }
    },
    modules:{
        
    }
})

export default store//导出