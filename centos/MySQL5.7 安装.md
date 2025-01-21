

一、下载 MySQL yum包

```shell
wget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm
```

二、安装MySQL源

```shell
rpm -Uvh mysql57-community-release-el7-10.noarch.rpm
```

三、安装MySQL服务端

```shell
yum install -y mysql-community-server
```

安装过程中如果发现 mysql-server 的版本为 8.x，则取消安装，

查看可用的 mysql 版本

```shell
yum repolist enabled | grep "mysql.*-community.*"
```

查看所有的 mysql 版本

```shell
yum repolist all | grep mysql
```

如果看到 mysql-80 为`enable`，则执行一下命令

禁用 mysql8.0

```shell
sudo yum-config-manager --disable mysql80-community
```

启用 mysql5.7

```shell
sudo yum-config-manager --enable mysql57-community
```

检查是否设置成功

```shell
yum repolist enabled | grep mysql
```

再次执行安装命令

```shell
sudo yum install -y mysql-community-server
```

> 安装过程中的错误信息

1、`未找到匹配的参数： mysql-community-server
	错误：没有任何匹配`

解决方式：

官方提供方式，先禁用 mysql 模块，命令如下

```shell
sudo yum module disable mysql
```

重新执行安装命令

2、错误信息中出现：`错误：GPG 检查失败`，则修改安装命令为

```shell
# 禁用GPG安装
yum -y install mysql-community-server --nogpgcheck
```

3、错误信息为

`Error: Transaction test error:
  file /etc/my.cnf from install of mysql-community-server-8.0.15-1.el7.x86_64 conflicts with file from package mariadb-connector-c-config-3.1.11-2.el8_3.noarch`，大体意思为事务测试错误，原因应该是原系统中包含`Mariadb`，冲突导致的。则需要卸载默认安装的`Mariadb`，相关命令如下：

1. 查看本机被内嵌的Mariadb

```shell
rpm -qa | grep mariadb
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/df3a5cc0b344a3b6cbab5ebdc308b6e6.png)

1. 使用`rpm -e --nodeps package`将内嵌集成的Mariadb卸载掉，package为上图所示的报名信息，两个都需要卸载，卸载完成后，重新执行安装命令。至此就安装完成。

四、启动

```shell
sudo service mysqld start
```

设置开机自启动

```shell
sudo systemctl enable mysqld
```

查看状态

```shell
sudo service mysqld status
```

获取默认密码

```shell
sudo grep 'temporary password' /var/log/mysqld.log
```

连接

```shell
mysql -u root -p
```

修改密码

```shell
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';
```

允许远程连接

```shell
# 允许外部连接
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '修改后的密码' WITH GRANT OPTION;
# 刷新
FLUSH PRIVILEGES;
```



