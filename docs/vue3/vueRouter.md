# Vue3 配置路由
## 安装
1. npm  
```ts 
npm install vue-router@4 
```  
2. yarn  
```ts 
yarn add vue-router@4 
```

## 配置Router
1. 新建一个文件夹, 名字叫router
2. 创建一个index.ts
3. 配置router
```ts
//举列
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import(`../components/HelloWorld.vue`)),
      meta: {
        title: '首页',
      },
    },
  ]
})

export default router

```
4. 挂载到Vue上去
```ts
//举列
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```
5. 将路由的插槽放到首页
```ts
<template>
  <router-view/>
</template>
```
