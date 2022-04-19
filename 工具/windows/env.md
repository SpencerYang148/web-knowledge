## 环境变量
> [powershell env](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_environment_variables)
### 命令
```shell
# cmd
set name
set name=value
```
```shell
# powershell
Get-ChildItem env:
Get-ChildItem env:name
Get-ChildItem env:name="value"
$env:name
$env:name="value"
```
