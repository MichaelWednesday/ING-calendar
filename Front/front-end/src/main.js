import Vue from 'vue'
import App from './App.vue'

window.axios = require('axios');


new Vue({
  el: '#app',

  render: h => h(App),
})
