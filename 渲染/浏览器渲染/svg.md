## SVG
#### 概念：是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）
> 其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

#### 使用
- SVG 文件可以直接插入网页，成为 DOM 的一部分
- 也可以写在一个独立文件中，然后用`<img>、<object>、<embed>、<iframe>`等标签插入网页
- CSS 也可以使用 SVG 文件
- SVG 文件还可以转为 BASE64 编码，然后作为 Data URI 写入网页
```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 600"
>
  <circle id="mycircle" cx="400" cy="300" r="50" />
</svg>
<img src="circle.svg">
<object id="object" data="circle.svg" type="image/svg+xml"></object>
<embed id="embed" src="icon.svg" type="image/svg+xml">
<iframe id="iframe" src="icon.svg"></iframe>
```
```css
.logo {
  background: url(icon.svg);
}
```
```html
<img src="data:image/svg+xml;base64,[data]">
```

#### 细节
- SVG 图像默认大小是300像素（宽） x 150像素（高）
- [viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)
- [preserveAspectRatio](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio)