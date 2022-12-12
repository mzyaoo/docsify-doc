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

#### tail
> 监听日志
```shell
tail -f file.log
```
> 监听指定日志内容输出
```shell
tail -f file.log | grep '日志内容' -5
```

#### vim

> 编辑文件
```shell
vim fileName
```

> 查找

在查找结果中，用N、n可以切换上下结果；输入`nohl`，可以取消高亮

| 快捷键 | 功能描述           |
|-----|----------------|
| /   | 从光标所在位置向前查找字符串 |
| ?   | 从光标所在位置向后查找字符串 |
