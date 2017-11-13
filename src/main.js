// 引用全局reset.css
import './css/reset.css'

//引用框架脚本
import Vue from 'vue';
import axios from './axios/axios'
import app from './app.vue'
import router from './routes/router'
import store from './store/store'


// var abc ={
//     install:function(vue){
//         //添加全局方法或者属性
//         vue.test = function(){
//             console.log('test')
//         }
//         console.log(vue)
//         // 添加到实例方法或者属性
//         vue.prototype.$http = function(){
//             console.log('在这里请求数据')
//         }
//     }
// }
// // use 专门注册插件的  通过全局
// Vue.use(abc)
// Vue.prototype.$http = function(){
//     console.log('$http')
// }
new Vue({
    el:'.container',
    render:createElement => createElement(app),
    router:router,
    store:store,
    mounted:function(){
        //console.log(this)
        //Vue.test();
        // this.$http()
        //this.axios.get('')
        
    }
})
if(module.hot){
    module.hot.accept()
}