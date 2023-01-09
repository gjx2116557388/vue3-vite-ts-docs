# 实现登录注册

> 框架的选择看个人喜好 但是我这里使用的Express因为出现的年代较早所以异步使用`callback`的形式
> 这里基于本人常用的Express框架 当然了还是推荐使用更新更好的Koajs（还有许多很优秀的框架选择比如 Nestjs Eggjs等等。。。） 
> 对于一些很基础的东西是没有写到的 所以需要有点点小基础或者自己去看官方文档

### 准备条件
1. 需要有[数据库](./mysql.md)（点击数据库查看教程）
2. 需要有token
3. 密码加密
4. 引入Express框架

```js
// 首先引入mysql创建一个数据库存储用户的账号密码信息（不会mysql的直接使用navicaht的可视化软件）
// 需要用到一个叫做JWT东西生成token
// 密码为了安全跟隐私是不能明文保存在数据库的，需要加密保存（加密方式有很多hash（哈希） base64 md5等等。。。）
// 本文是使用的是bcrypt加密登录的密码（bcrypt的优点是每次加密后的字符都不一样）
```
### 安装Express 
安装express的包
`npm install express --save`  
运行就很简单了 直接使用 `node 文件名.js` 就好了  
或者安装nodemon运行 全局安装`npm install -g nodemon`（nodemon监控文件更改并重启服务` nodemom 文件名.js `）

```js
// 引入
const express = require('express')
const cors = require('cors')  // 这个是用来实现跨域的也可以不用

// 初始化
const app = express()
    // 解析带有json的请求（nodejs内置中间件）
    app.use(express.json())
    // 开启cors允许跨域（需要引入，当然了不跨域也可以不用，或者前端使用proxy代理来解决跨域）
    app.use(cors())

// 端口号
const port = 8001

// 测试get接口
app.get("/",async (req,res)=>{
    res.send("这是一个Get的接口")
    // req 请求 里面有前端提交的请求参数 全称 request
    // res 响应 函数的执行结果或者回调信息 给全端返回消息 全称 response
    // 具体详细的自己看Nodejs的官方文档
    // 其实也不需要看文档直接打印下req跟res里面有哪些方法就知道了
    // 无非就是一些常用的
})

// 测试post接口
app.post("/api",async (req,res)=>{
    console.log(req.body)
    res.send("这是一个Post的接口")
    // 上面说了req里面是前端提交的参数 post的参数是在body里面
    // 所以拿到参数就是 req.body
})

app.listen(port,()=>{
    console.log(`监听端口: ${port} @代码酱`);
})
```

### 加密跟对比密码

也是一样要用npm安装下 `npm install bcrypt`  
`saltRounds` 值越高 哈希算法花费的时间越多 你希望选择一个足以防止攻击但又不低于潜在用户耐心的数字 在此示例中 我们使用默认值10

```js
// 建议创建一个bcrypt文件夹 里面有个index.js
const bcrypt = require("bcrypt")

// 加密
const hashSync = function(myPlaintextPassword,saltRounds){
    return bcrypt.hashSync(myPlaintextPassword, saltRounds);
}

// 对比
const compareSync = function(myPlaintextPassword,hash){
    return bcrypt.compareSync(myPlaintextPassword, hash);
}

// 用法
// hashSync(需要加密的密码 , 加密的等级)
// compareSync(你的密码 , 保存的加密过的密码)

module.exports = {
    hashSync,
    compareSync
}

```

### 生成token
也是一样要用npm安装下 `npm install jsonwebtoken`

```js
// 建议创建一个token文件夹 里面有个index.js
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'login2022' // 秘钥
let token = function(user){
    // 这里面的数据可以加的 但是不要加入敏感隐私的数据
    return jwt.sign(
        { user}, //用户信息
        SECRET_KEY, //自定义字符串
        { expiresIn: '4h' } //有效时间，这里我设置3个小时
    )
    
}

// 验证token
let verify = (token)=>{
   return jwt.verify(token,SECRET_KEY,(err,data)=>{
            if(err){
                // console.log("请求失败");
                return {
                  state: false,
                  info: "token验证失败"
                };
              }else{
                // console.log("请求成功");
               return {
                  state: true,
                  info: "token验证成功"
                };
            }
        })
}

module.exports = {
    token,
    verify
}
```

### 登录/注册接口

```js
// 根据上面的说的 所以就很容易就能实现一个登录接口
// 因为账号密码为了安全是需要用Post请求的
const express = require('express')
const { hashSync,compareSync } = require("./bcrypt/index") //引入加密的方法
const { token,verify } = require("./jwt/index")  //引入token的方法
const { db } = require('./mysql/index')
const cors = require('cors')  // 这个是用来实现跨域的也可以不用

// 初始化
const app = express()
    // 解析带有json的请求（nodejs内置中间件）
    app.use(express.json())
    // 开启cors允许跨域（需要引入，当然了不跨域也可以不用，或者前端使用proxy代理来解决跨域）
    app.use(cors())

// 端口号
const port = 8001

// 登录
app.post("/login",async (req,res)=>{
    // 拿到提交的账号密码 并且跟数据库里的账号密码对比
    // 这里让前端提交 {username: "张三",password: "xxx0527"}
    db.query(`select * from info where account="${req.body.username}";`,(err,data)=>{
        // 判断下数据库是否有这个账号
        // 如果有的话就会返回一个账号密码的数组 没有的话则是一个空数组
        if(data.length){
            // 对比下密码是否一致
            if(compareSync(req.body.password,data[0].password)){
                 res.send(
                    {
                     status:200,
                     token: token(req.body.username),
                     data:"登陆成功",
                     account: data[0].account
                 }
                 )
                return console.log(`登录成功`);
            }else{
                res.send({data:"密码错误"})
                return console.log(`密码错误`);
            }
        }else{
            res.send({data:"账号错误"})
            return console.log(`账号错误`);
        }
    })
})

// 注册
app.post('/register', ()=>{
    db.query(`select account from info where account="${req.body.username}";`,(err,data)=>{
        if(!data.length){
            connection.query(`insert into info(account,password) values("${req.body.username}","${hashSync(req.body.password,10)}");`,(err,data)=>{
                if(err){
                    return console.log(err.message);
                }
                res.send({
                    status:200,
                    data:"注册成功"
                })
            })
        }else{
            res.send({data:"用户名已经被使用"})
            return console.log(`用户名已经被使用！`)
        }
    }) 

})


app.listen(port,()=>{
    console.log(`监听端口: ${port} @代码酱`);
})
````
<center>
    <p>看到了这里那么恭喜你 Express你大概就简单的入门了 剩下的自己去深入。。。。</p>
    <p>其实说实话这里用到的Express已经不是很合适使用了</p>
    <p>因为js版本的更新总会导致框架的落后</p>
    <p>年轻人还是要拥抱新框架</p>
    <p>@代码酱 2023/01/09 from ShenZhen</p>
</center>