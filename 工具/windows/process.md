## 端口对应进程
```shell
netstat -ano | findstr :<port>
```

## kill进程
```shell
taskkill /pid <pid> /f
```

## Windows杀掉(kill)占用端口的进程
1、Windows+r进入DOS窗口
2、查看占用端口号的进程id

netstat -ano |findstr "端口号"
  TCP    0.0.0.0:8888           0.0.0.0:0              LISTENING       21272
  TCP    [::]:8888              [::]:0                 LISTENING       21272
拿到进程id后可以通过以下命令查看占用端口的程序

tasklist |findstr "进程id号"
例如上面的21272

3、kill掉占用端口的进程

taskkill /f /t /im "21272"
也可以直接使用脚本：

@echo off
setlocal enabledelayedexpansion
set /p port=请输入端口号：
for /f "tokens=1-5" %%a in ('netstat -ano ^| find ":%port%"') do (
    if "%%e%" == "" (
        set pid=%%d
    ) else (
        set pid=%%e
    )
    echo !pid!
    taskkill /f /pid !pid!
)
pause
也可以直接指定需要杀掉的exe：

taskkill /F /IM helloWorld.exe