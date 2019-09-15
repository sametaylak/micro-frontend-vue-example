import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.renderBrowse = (containerId, props) => {
  new Vue({
    render: h => h(App, { props }),
  }).$mount(containerId)
}

