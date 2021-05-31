import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElBigdataTable from 'vue-elementui-bigdata-table'
import  mycomp   from '@/components/mycomp'
Vue.use(mycomp)

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(ElBigdataTable)

new Vue({
    render: h => h(App),


}).$mount('#app')
