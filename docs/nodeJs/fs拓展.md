# fs拓展

## fs同步读取文件

```js
const fs = require("fs");
const data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
```

## fs同步写入文件

```js
const fs = require("fs");
fs.writeFile('input.txt',data,res=>{
    console.log(res,11111);
})
```

## fs流文件

1. 读取流文件
```js
const fs = require("fs");
console.log(111111);
const read = fs.createReadStream('1.txt')
read.setEncoding('utf-8')
read.resume();//让文件流开始'流'动起来
read.on('data',data =>{//监听读取的数据，如果打印data就是文件的内容
    console.log('正在读');
})
read.on('end', () => { //监听状态
    console.log('文件读取结束');
})
console.log(222222);

```

2. 写入流文件
```js
const fs = require("fs");
console.log(111111);
const read = fs.createReadStream('1.txt')
read.setEncoding('utf-8')
read.resume();//让文件流开始'流'动起来
read.on('data',data =>{
    console.log('正在读');
})
read.on('end', () => { //监听状态
    console.log('文件读取结束');
})
console.log(222222);

console.log(333333);
const write = fs.createWriteStream('2.txt')
read.pipe(write) //pipe就是那根水管，抽向2.txt
console.log(444444);
````