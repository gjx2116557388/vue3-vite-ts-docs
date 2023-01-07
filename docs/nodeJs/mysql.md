# MySQL数据库配置
```js
// 首先安装mysql的包
`npm i mysql`

// 创建一个文件 引入mysql的包 然后配置
const mysql = require('mysql')
// 创建mysql连接池（也可以使用 createConnection 连接，使用连接池有回收机制也可以多个连接）
const db = mysql.createPool({
    host: '59.xxx.1xx.200',
    port: 3306,
    user: 'love',
    password: 'XXXXXXXXXX',
    database: 'love',
    timezone: 'utc'
})
// timezone: 'utc'    时区（服务器是有时差的 所以要明确自己所在的时区）

// 暴露出去
module.exports = {
    db
}

// 在需要使用的地方导入db就行
```

```js
// 使用 引入
const { db } = require("./mysql/index.js")
// 查询（输入mysql的指令就好了）
db.query(`select * from love`,(err,data)=>{
    if(err){
        return err
    }
    console.log(data)
})


```