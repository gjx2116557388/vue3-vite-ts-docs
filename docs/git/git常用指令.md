# Git 常用指令

> 常用的不多 写习惯了就好 也可以用可视化的软件

```js
git remote -v   //查看连接的远程仓库
git branch -a  //查看所有的本地和远程分支
git branch -r //查看所有远程分支
git checkout (分支名字)  //切换分支名字
git branch -d (分支名字) //删除分支
git merge   //合并分支

```

```js
//提交代码
//添加所有文件 
git add .

//提交缓存
git commit -m "提交"

//提交到远程仓库
git push -u origin main
```

```js
//取消关联远程仓库
git remote remove origin
//本地git仓库关联Github仓库
git remote add origin git地址
```

```js
// 把人家的代码库提交到自己的仓库
rm -r .git  //删除项目里所有的git文件 然后一直回车就可以
git init   //初始化仓库
git remote add origin 远程库地址 //关联远程仓库
git add .  //添加文件 . 目录所有文件
git commit -m "备注信息"  //提交缓存
git push --set-upstream origin master  //提交代码
(提交失败的话可以试试)
git push -f origin master //强制push就成功了 少用 因为-f意味着强制push，会覆盖掉远程的所有代码！

```

```js
//拉取远程分支
git fetch origin develop（develop为远程仓库的分支名）
//在本地创建分支dev并切换到该分支
git checkout -b dev(本地分支名称) origin/develop(远程分支名称)
//把远程分支上的内容都拉取到本地
git pull origin develop(远程分支名称)


//提交本地分支代码到远程分支(注意：该命令应该在本地分支下执行)
git push origin develop(远程分支名称/和本地分支名称一样)

```

