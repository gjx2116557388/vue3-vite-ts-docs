# path模块

## 导入path模块
> Node.js path 模块提供了一些用于处理文件路径的小工具 也是内置直接引入就可以  
> 路径推荐使用`path.join(__dirname,"./src","./index.html")`这样的写法

## path.join() (基本上就只常用这个)
> `__dirname` 表示当前文件所在的目录的绝对路径  
> `__filename` 表示当前文件的绝对路径

```js
 const path  = require("path")
 path.join("./src","index.html")  // 返回 ./src/index.html

 path.join(__dirname,"./src","index.html")

```
## path.extname(p)
> 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串

## path.dirname(p) 
> 返回路径中代表文件夹的部分

## path.basename(p[, ext])
> 返回路径中的最后一部分

## path.resolve()  path.relative()  (基本上不常用)
```js
path.resolve() // 绝对路径
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
```js
path.relative() // 相对路径

// 在 Linux 上：
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'

// 在 Windows 上：
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// 返回: '..\\..\\impl\\bbb'
```
## path.parse(pathString)
>  返回路径字符串的对象

## path.format(pathObject)
> 从对象中返回路径字符串，和 path.parse 相反

## path.isAbsolute(path)
> 判断参数 path 是否是绝对路径

<center>后续更新。。。。。</center>
