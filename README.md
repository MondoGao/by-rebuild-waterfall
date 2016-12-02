## Task1

瀑布流

## 更新记录
### 0.1.0 - 2016-12-02
#### Added
- 增加瀑布流一列 img-list 组件，完成其基本样式
- 完成主组件中的渲染，刷新，重排，添加等函数

### 0.0.1 - 2016-11-01
#### Added
- 初始化仓库
- 位于 mondo/task1 下
- 学习 vue 的测试文件

## 学习记录
### 准备
- 学习并使用 vue 2.0 进行任务实践

### 完成
- 学习 vue 基本用法
    - $nextTick 函数传回调相当于本次元素渲染结束后执行回调
    - 注意 this 的指向
    - 注意绑定引用类型的数据时的引用问题
    - 单文件组件中使用 lang 属性可以自动引用对应 loader，无需再次配置
    - 添加 key 属性会影响渲染结果，待解决
- 尝试使用 vue-router 和 vue-resource
- 配置并使用 eslint 和其 YAML 格式配置文件
    - .eslintignore 中相对路径不能加 ./
- 使用 vue-cli 进行简单的 vue 项目结构构建，并将其默认的 webpack-dev-server + webpack 改为 gulp + browser-sync + webpack-stream + webpack
    - webpack-stream 默认使用的 webpack 版本较低