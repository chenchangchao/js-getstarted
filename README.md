## JS Engine 

## JS Data Structure and Algorithm

###  this的指向问题



| 调用方式 | 示例 | this指向 |
|:------|:-------:|------:|
| 通过new调用 | new Foo() | 新对象 |
| 直接调用 | method() | 全局对象 |
| 通过对象调用 | obj.method() | 前面的对象 |
| 通过call/apply调用 | method.call(ctx) | 第一个参数ctx 
| 通过bind调用 | method.bind(ctx) | 第一个参数ctx
| 通过DOM事件调用 | element.addEventListener('click', method) | 事件目标element

## JS animation
```bash
npm i animejs
npm install gsap
npm install motion
```

## git operation
```bash
git config --list --global
it  config  --global user.name "dustin.chen"
git config  --global user.email "648023262@qq.com" // 设置全局配置，笔误
git config --global --unset user.emmail // 删除全局配置
git config --list --global
ssh-keygen -t rsa -C "648023262@qq.com" // 生成ssh key
cat ~/.ssh/id_rsa.pub // 查看ssh key
ssh  -T git@github.com // ssh验证
git status // 检查本地 Git 状态
git add .  //将所有文件添加到 Git 暂存区
git commit -m "初始化项目，完成 js-getstarted 基础开发" //提交暂存区文件到本地仓库
git remote add origin git@github.com:chenchangchao/js-getstarted.git //关联远程仓库
git remote -v  //验证远程仓库关联是否成功 
# 首次推送建议加 -u，绑定本地 main 分支与远程 main 分支（后续推送可直接 git push）
git push -u origin main  //
git add .  # 标记冲突已解决
git rebase --continue  # 继续完成变基
git push -u origin main //重新推送本地分支
```
- tsc operation
```bash
- tsc -v
- ./node_modules/.bin/tsc -v
- ./node_modules/.bin/tsc --init # create tsconfwig.json
- package.json的test在win系统跟*ux系统有所差异,
- win系统:"test": "set NODE_ENV=test && set PORT=7788 && jest",
- *ux系统:"test": "NODE_ENV=test PORT=7788 jest"  

-  pnpm run  test
-  pnpm run  test:watch
```
