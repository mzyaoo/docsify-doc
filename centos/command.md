# CentOS 命令大全

#### 通过端口号查看进程号
```shell
# 安装lsof命令
yum install lsof

# 查看某个端口的使用情况
lsof -i :端口 
```

#### PS 相关命令
```shell
# 查看相关程序PID，例
ps -ef | grep java
```

#### 防火墙相关命令
```shell
# 查看运行状态
# 命令一
systemctl status firewalld
# 命令二
firewall-cmd --state

# 开启防火墙
systemctl start firewalld

# 关闭防火墙
systemctl stop firewalld

# 重启防火墙
systemctl restart firewalld

# 查看防火墙所有开放的端口
firewall-cmd --zone=public --list-ports

# 开放防火墙端口
firewall-cmd --zone=public --add-port=端口号/tcp --permanent

# 关闭防火墙某个端口
firewall-cmd --zone=public --remove-port=5672/tcp --permanent

# 重新加载防火墙配置
firewall-cmd --reload
```

#### 清空日志文件
```shell
# 命令1：
> fileName

# 命令2：
echo > fileName
```

#### 查看磁盘占用情况
**查看当前目录下占用磁盘清空**
```shell
du --max-depth=1 -h
```
**查看磁盘使用情况**
```shell
df -h
```

#### tail
**监听日志**
```shell
tail -f file.log
```
**监听指定日志内容输出**
```shell
tail -f file.log | grep '日志内容' -5
```

#### vim

**编辑文件**
```shell
vim fileName
```

**查找**

在查找结果中，用N、n可以切换上下结果；输入`nohl`，可以取消高亮

| 快捷键           | 功能描述        |
|---------------|-------------|
| /word         | 向光标之下寻找一个名称为 word 的字符串。 |
| ?word         | 向光标之上寻找一个字符串名称为 word 的字符串。 |
| ZZ            | 命令模式下保存当前文件所做的修改后退出vi |
| :行号           | 光标跳转到指定行的行首 |
| :$            | 光标跳转到最后一行的行首 |
| dd            | 删除光标行正行内容 |
| ndd           | 删除当前行及其后n-1行 |
| :w [filename] | 将编辑的数据储存成另一个档案（类似另存新档） |
| yy            | 复制游标所在的那一行 |
| nyy           | n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行 |
| dd            | 删除游标所在的那一整行 |
| ndd           | n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行 |
