# CentOS 命令大全

#### 通过端口号查看进程号
```shell
# 安装lsof命令
yum install lsof

# 查看某个端口的使用情况
lsof -i :端口 
```

#### 查看磁盘占用情况
> 查看当前目录下占用磁盘清空
```shell
du --max-depth=1 -h
```
> 查看磁盘使用情况
```shell
df -h
```







[//]: # (#### 编辑文件Vim)