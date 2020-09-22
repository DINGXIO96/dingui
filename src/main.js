import Vue from 'vue';
import App from './App.vue'

import './components/index';

Vue.config.productionTip = false;

var vm = new Vue({
    el: "#app",
    // render:(h) => { return h(App)},
    components: {
        App
    },
    template: "<App />"
})

