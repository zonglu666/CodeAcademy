# 笔记

本文档主要记录开发过程中的问题以及解决方案，本人的个人观点，如果各位有更好的解决方案，欢迎留言探讨。

## 项目中图片、声音等文件资源太多，如何在项目中引用？

这个涉及到 web 前端资源文件加载的性能优化问题，可以考虑把静态资源文件和动态网页分集群部署，静态资源会被部署到 CDN 节点上，网页中引用的资源也会变成对应的部署路径。

但是，为了本地开发方便，我们就将图片在本项目中存储了。使用到了 url-loader 加载
器，具体的配置在 webpack 中。

在 ts 文件中 import png 等格式的文件时，VS 提示找不到模块，所以需要将图片格式以申明为模块。可以建一个 typings 文件夹，在里面新建 images.d.ts 文件，最后在 tsconfig 文件中添加 include 即可。images.d.ts 代码如下:

```
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
```
