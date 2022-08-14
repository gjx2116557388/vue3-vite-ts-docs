# Vuex的配置及使用方法
## 配置VueX
1. 安装
```
//yarn
yarn add vuex@4.*
//npm
npm install -save vuex@4.*
```
2. 创建store.ts并且配置
```
//store.ts
import {createStore} from 'vuex'
export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})

//main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import createStore from './vuex/store'


const app = createApp(App)
app.use(createStore)
app.mount('#app')
```
## 使用
```
开发中
```