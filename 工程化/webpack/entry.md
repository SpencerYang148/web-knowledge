## entry

### 用法
[entry配置](https://webpack.docschina.org/configuration/entry-context/#entry)
```ts
/**
 * @see Description https://webpack.docschina.org/concepts/entry-points/#entry-description-object
 **/
type Entry = string | string[] | { [name: string]: string | string[] | Description }
```
> webpack >= 4 推荐optimization.splitChunks，将vendor和app模块分开，为其创建一个单独的文件。不要为vendor或其他不是执行起点创建entry。