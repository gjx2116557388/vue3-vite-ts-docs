# Vue3封装组件

1. 父传子`emit`

```ts
//父组件
   import friends from "../components/friends.vue"
   <friends title="title">
   </friends>
   
   // 子组件
   import { defineProps} from 'vue'
   const props =  defineProps({
           title: String,
   })
```


2.  子组件调用父组件的方法`emit`

   ```ts
   //父组件
   <friends  @alertBtn="alertBtn">  
   </friends>
   const alertBtn = data=>alert(data)
   
   //子组件
   <div>
         <div @click="handelClick">
             <div>
             	{{props.title}}
             </div>
       </div>
   </div>
   
   const emit = defineEmits(["alertBtn"])
   const handelClick = function  () {
       //调用父组件传递过来的方法，传入参数修改父组件的值 
       emit("alertBtn",'我是子组件的弹窗！！！')
   }
   ```

   



3. 插槽`slot`

```ts
//父组件
   <friends>
       <div slot="headers" >
      		我是交友组件
       </div>
   </friends>
   
   //子组件
   <div>
        <slot></slot>
   </div>
```