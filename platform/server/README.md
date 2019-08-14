# 后端接口

Express + Apollo Server + Mongoose

Apollo Server 是开源的 GraphQL 服务器，可与许多 Node.js HTTP 服务器框架配合使用。Apollo Server 是目前使任何来源的数据快速构建为 GraphQL API 的最佳方式。

本项目考虑将 Apollo Server 与 Express 做集成，，apollo-server 库换成 apollo-server-express 库。

未来后端接口形式有两种:

- Restful API

用于未来与第三方系统做接口对接使用此类接口

- GraphQL API

用于本平台相关的业务接口

## 项目结构

- api 文件夹

所有接口开发都放在这个文件夹中，里面包括 graphql 文件夹和 rest 文件夹，分别存放不同类型的接口代码。

- service 文件夹

所有的业务逻辑层代码

- model 文件夹

所有的数据处理层代码

## 技术栈

### GraphQL

FackBook 在 2012 年 开发的一个开源 API 接口，为的是在 native mobile app 中应用。后来，在 2015 年的 React 大会上，FB 宣称开源 GraphQL 项目。它与 react.js 的完美搭配，属于描述性查询语言，查询方便理解，提供了一套易于理解的完整描述。

特点

- 请求的数据不多不少，要什么字段，就定制什么字段

- 获取多个资源，只用一个请求。Restful 请求多个资源需要多次请求，tcp 协议的请求非常消耗时间，所以一次请求，减少了耗时

- 描述所有可能类型的系统，增、删字段都非常方便，而且每个字段都有自己的类型，配合 ts 使用，就无敌强大了

### Mongoose

Mongoose 是 MongoDB 的一个对象模型工具，是基于 node-mongoldb-native 开发的 MongoDB nodes 驱动，可以在异步的环境下执行。同时它也是针对 MongoDB 操作的一个对象模型库，封装了 MongoDB 对文档的的一些增删改查等常用方法，让 NodeJS 操作 Mongodb 数据库变得更加灵活简单。
