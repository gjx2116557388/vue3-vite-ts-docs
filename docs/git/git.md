# Git的使用
## 第一次将本地创建的项目提交到Github
1. 在Github创建一个仓库 然后克隆到本地
2. 将本地项目的文件都复制到克隆的文件夹里
3. git bash打开克隆的文件夹
4. 添加文件到缓存
5. 提交缓存并添加描述
6. 提交到远程仓库
```
//克隆代码
git clone 地址

//cd进入 cd..退出
cd 文件名

//添加文件 ./*目录所有文件
git add ./*

//提交缓存
git commit -m "提交"

//提交到远程仓库
git push -u origin main
```
## 本地git仓库关联Github仓库 
```
git remote add origin git地址
```
## 初始化仓库
```
git init
```
## 查看状态
```
git status
```
## 同步远程仓库
```
git pull
```
