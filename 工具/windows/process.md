## 端口对应进程
```shell
netstat -ano | findstr :<port>
```

## kill进程
```shell
taskkill /pid <pid> /f
```