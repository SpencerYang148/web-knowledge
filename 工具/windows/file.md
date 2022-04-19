## 打开文件或文件夹
> [Invoke-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/invoke-item)
> [Start-Process](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process)
> [stackoverflow](https://stackoverflow.com/questions/8471106/how-to-open-a-folder-within-powershell)
### 命令
```shell
# Invoke-Item
Invoke-Item <String[]>
ii <String[]>
# Start-Process
Start-Process <String>
start <String>
# explorer.exe
explorer.exe <String>
```

## 删除文件夹
> [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item)
> [stackoverflow](https://stackoverflow.com/questions/186737/whats-the-fastest-way-to-delete-a-large-folder-in-windows)
### 命令
```shell
del <String> -Force -Recurse
```

## 重命名
> [Rename-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/rename-item)
### 命令
```shell
rni <String> <String>
Get-ChildItem <String> -Recurse | Rename-Item -NewName { $_.Name -replace '<String>','<String>' }
```
