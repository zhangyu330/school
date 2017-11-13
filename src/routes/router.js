import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.config'
Vue.use(VueRouter)
var router = new VueRouter({
    routes:routes
})

export default router