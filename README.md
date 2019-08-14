# CodeAcademy

## 简介

仿照慕课网开发的教育平台，利用现在比较流行的 mono 模式，也就是把多个 project 放在一个 repository 中，这样就方便我们系统内的一些公共模块的调用，而不用发布 npm 包。

### platform 文件夹

platform 文件夹，该平台所有的系统主要代码都在这个文件夹中开发，目前来说，这个项目暂时就是以下三个系统组成。其中，前端网站和后端接口是最重要的，因为是面向 client 端的。

- 前端网站 web
  web 项目：使用 react.js 框架，graphql client 作为接口技术，UI 设计采用 ant 框架

- 后端接口 server
  server 项目：使用 express 框架搭建接口服务开发一些需要的 restful 接口，并且使用 graphql server 开发后端 graphql 接口

- 后台管理系统 dashboard
  dashboard 项目：后端管理系统主要是内部员工使用的数据可视化管理平台

### @public 文件夹

由于之前开发采坑项目所用到的一些公共函数或代码，比如 mongoose 的 schema 定义、集成微信登录的代码、发送邮件的代码等基础功能代码，都可以放在这里面开发，这样就不用发 npm 包了，通过 ts-config 的配置直接可以引用进来。

## 技术栈介绍

### react.js

自行 google，不多说了，说的话就是没完没了的，我也是初学前端，对 react.js 了解的也不是很深入，所以说的不如写的，自行实践，等后面熟悉了以后，对这块内容在做补充。

### graphQL

FackBook 在 2012 年 开发的一个开源 API 接口，为的是在 native mobile app 中应用。后来，在 2015 年的 react 大会上，FB 宣称开源 graphQL 项目。它与 react.js 的完美搭配，属于描述性查询语言，查询方便理解，提供了一套易于理解的完整描述。

特点

- 请求的数据不多不少，要什么字段，就定制什么字段

- 获取多个资源，只用一个请求。Restful 请求多个资源需要多次请求，tcp 协议的请求非常消耗时间，所以一次请求，减少了耗时

- 描述所有可能类型的系统，增、删字段都非常方便，而且每个字段都有自己的类型，配合 ts 使用，就无敌强大了

## 本项目开发代码规范

### 通用性/重用性

代码和 bug 总是形影不离的。减少 bug 的最好方式就是减少代码本身。用更少的代码完成同样的任务迫使你投入更多的时间思考和设计。更少的代码更易于维护，因为你要读的代码更少。更少的代码还带来了一致性。想象一下如果同样的逻辑在 3 处重复了 3 遍，当你修改时你可能只改了 1 处，不一致就产生了。关于重用性有一种思想误区：库的代码才需要有重用性，我的代码不需要，因为没人会重用我的代码。重用性是一种写代码时的思考方式，应该成为一种写代码的习惯。就算没有别人会重用你的代码，你自己也要重用你的代码。

- 职责划分清楚
  为了使代码具备重用性，很重要的一个因素就是职责划分。通俗一点讲就是“管好你该管的事，不要管你不该管的事”。如果一段代码的职责是调用发送邮件，那它就做好这件事。至于使用这个 api 的人是谁，在什么场景使用，都不是这个 api 该管的事。如果一个功能需要 300 行代码来完成，我们该如何去划分职责？又该如何去把这些代码归类放到哪些函数/类/文件中呢？这时候你就要在脑中形成几个各自独立的模块，把功能相关的代码聚到一起放在一个模块中。同时还要思考模块之间的接口如何定义。比如我们要处理一个商品被购买后发货的处理。这时你大概就可以在脑中模糊地形成这么几个模块：商品、订单、支付、物流。然后再去细想各个模块的职责边界在哪。模块之间的交互是怎样的。如果商品模块里有订单的内部逻辑代码，然后订单模块里有顺丰物流的 api 细节。很快你就会发现这些模块很难被重用了。

- 代码分层
  任何复杂的事情都是通过分层来降低认知和管理的难度。国家分为省、市、区、镇。学校按照年级和班级划分。写文章也要有开头、中间和收尾，每一部分又可以再分几个步骤。互联网分了 4 层，各司其职，应用层不用去担心物理层。写代码也是一样。逻辑是要一层一层展开，而不是 500 行代码平铺在一个函数里。

### 可读性

- 代码命名规范
  该 repo 的命名全部采用“驼峰式”
  当一段代码很长的时候要把它拆分然后用函数或变量给予有意义的名称。我们人脑喜欢看人类语言，而不是程序语言。所以我们写的代码要尽可能像英语，而不是编程语言。
  命名时要注意动词、名词和形容词的区分。动词来代表一个指令动作，名词代表一个对象名称，形容词来表示一个状态（往往是 boolean 或 enum）
  举例：
  动词：login addUser
  名词：user
  形容词：isAdmin

- 避免多次 callback 回调或多次嵌套 if 判断
  callback 由于 async 和 promise 的使用，出现的情况不太多。但是，if 的多层判断，一定会经常的出现，所以，做判断的时候，要注意，不要一直嵌套嵌套 if，这样代码 review 很费力很费力。

  ```js
  if (a) {
    if (b) {
      if (c) {
        // 需要执行的方法A(缩进太多，review起来真费劲)
      }
    }
  }

  if (!a || !b || !c) {
    return;
  }
  // 需要执行的方法A(没缩进，review起来真舒服)
  ```

### 正确性

- 不要用 any 类型

众所周知，js 是灵活的弱类型语言，我们永远无法确定一个变量的实际类型，这在开发的时候也就造成了一定的“恐慌”，比如：

```js
if (typeof a === "string")
if (Array.isArray(a) && a.length > 0)
if (a)
if (!a)
if (a != NaN)
```

自从 ts 出现以后，一切都变得奇迹。ts 具有类型系统，且是 js 的超集。比如，我用 ts 定义了一个变量是 string 类型，那么就不能把 number 类型的值赋值给他。
但是，ts 也有一个漏洞，就是可以定义 any 类型，比如，我们下面这个例子。

```js
const anyThing:any = {
  name: string
  age?: number
}
```

虽然 name 是 string 类型，但是 anyThing 不是啊，这个就尴尬了，这样的话，name 是有可能为任何值的。所以，我们尽量少用 any（除非迫不得己）。因为每增加一个 any，代码就增加了一份风险和恐慌。

- 减少使用 var 定义变量，使用 const > let

js 有一个很恐怖的事情就是“变量提升”，就是 js 引擎在解析代码的时候，先把 var 定义和函数定义提到最前面去，这就是所谓的“变量提升”和“函数提升”。而且，var 是全局变量，看下面一个经典的错误案例。

```js
var a = 99; // 全局变量a
f(); // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。
console.log(a); // a=>99,  此时是全局变量的a
function f() {
  console.log(a); // 当前的a变量是下面变量a声明提升后，默认值undefined
  var a = 10;
  console.log(a); // a => 10，这个a是上一行赋值的
}
```

let 和 const 是 ES6 新增的定义类型

let 是不会变量提升的，而且有暂时性死区。也就是 let 必须先声明，后面的代码才能够使用，否则 Uncaught ReferenceError 错误。
const 只能够初始化赋值，相当于是定义一个常量
。
