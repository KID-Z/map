/*
 * @Author: your name
 * @Date: 2021-06-09 09:44:33
 * @LastEditTime: 2021-06-09 10:06:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/main.js
 */
import { createApp } from 'vue'
import './assets/css/reset.less'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
