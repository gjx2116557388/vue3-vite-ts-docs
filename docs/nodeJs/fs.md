# fs模块

## 导入fs模块
> Node.js内置的fs模块就是文件系统模块，负责读写文件
> 路径推荐使用`path.join(__dirname,"./src","./index.html")`这样的写法 

## 读取文件  fs.readFile
```
const fs  = require("fs")
// fs读取文件
fs.readFile("路径","编码格式",(err,data)=>{回调函数})
// 推荐写法
fs.readFile(__dirname+"./xxx.txt","utf-8",(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log(data) //数据就在data里面
})
```
> 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
> Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：
```
fs.readFile('sample.png', function (err, data) {
    if (err) {
        return console.log(err)
    }
        console.log(data)
        console.log(data.length + ' bytes')
    
})

let txt = data.toString('utf-8');
console.log(text);
```

## 写入文件  fs.writeFile
```
const fs  = require("fs")
let data = '我是大帅逼';
fs.writeFile('./index.html', data, err => {
    if(err){
        return console.log(err)
    }
        console.log('写入成功');
    
});
```

## 获取文件大小（不常用）  fs.stat
```
const fs  = require("fs")
fs.stat('./indedx.html',(err,data)=>{
    if(err){
        return console.log(err)
    }
    // 是否是文件:
        console.log('isFile: ' + stat.isFile())
    // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory())
    if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
    }
})
```