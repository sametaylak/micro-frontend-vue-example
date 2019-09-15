import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.renderBrowse = containerId => {
  new Vue({
    render: h => h(App),
  }).$mount(containerId) 
}

