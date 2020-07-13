# 项目运行

## 项目启动

`yarn start` 执行package.json中配置的start脚本，启动项目

## 目录结构
```
| -- src文件夹 项目源码    
|     | -- components 组件
|     | -- images 图片
|     | -- pages 页面
|     | -- styles 样式
|
| -- dist 文件夹 webpack 打包后的项目
|
| -- package.json
|
| -- tsconfig.json
|
| -- webpack.config.js
```

# 项目搭建脚手架

React + Ant Design

## 初始化

`yarn init` 创建Node项目

## TypeScript

TypeScript 具有类型系统，且是 JavaScript 的超集。 它可以编译成普通的 JavaScript 代码。 TypeScript 支持任意浏览器，任意环境，任意系统并且是开源的。TypeScript 相比 JavaScript 增加了类型声明。这些类型声明帮助编译器识别类型，从而防止开发者“搬起石头砸自己的脚”。
原则上，TypeScript 需要开发者做到先声明后使用。这就导致开发者在调用很多原生接口（浏览器、Node.js）或者第三方模块的时候，因为某些全局变量或者对象的方法并没有声明过，导致编译器的类型检查失败。

`yarn add typescript` 安装 ts 库

`tsc --init` 生成 tsconfig.json 配置文件

- 如果一个目录下存在一个 tsconfig.json 文件，那么它意味着这个目录是 TypeScript 项目的根目录。

- 不带任何输入文件的情况下调用 tsc，编译器会从当前目录开始去查找 tsconfig.json 文件，逐级向上搜索父目录。

- 不带任何输入文件的情况下调用 tsc，且使用命令行参数--project（或-p）指定一个包含 tsconfig.json 文件的目录。

## Webpack

Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要通过 loader 的转换。Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

`yarn add webpack` 安装 Webpack 库

`yarn add webpack-dev-server --dev` 安装 webpack-dev-server 库

`yarn add webpack-cli --dev`

- webpack-dev-server 是 webpack 官方提供的一个小型 Express 服务器。使用它可以为 webpack 打包生成的资源文件提供 web 服务。

`touch webpack.config.js` 生成配置文件

`yarn add ts-loader --dev` 安装 TypeScript loader 库

- 也可以使用 awesome-typescript-loader 库 https://github.com/s-panferov/awesome-typescript-loader_

## Babel

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。支持 React 的一些特性（如 JSX 语法）

`yarn add babel-loader --dev` 安装 babel-loader 库

`yarn add babel-core --dev`

`yarn add babel-preset-es2015 --dev`

`yarn add babel-preset-react --dev`

## React

TypeSearch 搜索 @types 库 https://microsoft.github.io/TypeSearch/

`yarn add @types/react @types/react-dom react react-dom`

## SCSS 预处理器

SCSS 是 CSS3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。另外，SCSS 还能识别大部分 CSS hacks（一些 CSS 小技巧）和特定于浏览器的语法，例如：古老的 IE filter 语法。

另一方面，Sass 换行和缩进比较影响阅读，所以选择使用 SCSS

SCSS 主要有变量、嵌套、@import、@mixin、继承等特性，具体的在开发过程中可以具体感受

`yarn add sass-loader style-loader css-loader --dev`

`yarn add node-sass --dev`

_由于 node-sass 安装太慢，使用淘宝镜像`yarn add node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass`_

`yarn add mini-css-extract-plugin --dev`


