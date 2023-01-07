# 配置Vite Server
```ts
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:"0.0.0.0",
    port:8080,
    open:true
  }
})
```
