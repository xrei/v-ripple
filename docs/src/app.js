import Vue from 'vue'
import App from './App.vue'

import ripple from '../../dist/ripple'

Vue.use(ripple)

new Vue({
  el: '#app',
  render: h => h(App),
})