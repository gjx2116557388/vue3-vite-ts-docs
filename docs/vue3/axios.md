# 引入Axios
`npm i vue-axios`  
```
import VueAxios from 'vue-axios'

// baseUrl
const baseUrl = 'https://api.lovelilin.com/';
axios.defaults.baseURL = baseUrl;

// 请求头
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("token") != null &&  localStorage.getItem("token") != "") {
            // 请求头的 Authorization 加上 token 数据
            config.headers.Authorization = localStorage.getItem("token");
        }else {
            console.log('no token');
        }
        return config;
    },
    error => {
        console.log('error in request');
        return Promise.reject(error);
    }
);


// 导入vue实例中
const app = createApp(App)
app.use(VueAxios,axios)
app.mount('#app')

```