# Mac相关

### 使用iTerm2连接远端服务器

[//]: # (<details>)
[//]: # (  <summary><font color="red"></font></summary>)
> 查看并复制配置文件，放置指定目录
```shell
#!/usr/bin/expect

set PORT 22
set HOST [你连接的主机名]
set USER root
set PASSWORD [密码]

spawn ssh -p $PORT $USER@$HOST
expect {
    "yes/no" {send "yes\r";exp_continue;}
    "*password:*" { send "$PASSWORD\r" }
    }
interact
```
[//]: # (</details>)

> 详细配置如图

![](../static/img/mac/iTerm2.png)
