import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js";
createApp(App).use(store).use(router).mount('#app')
