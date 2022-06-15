# CentosOS 环境搭建

### JDK
[JDK-1.8 点击下载](https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/jdk-8u333-linux-x64.tar.gz)
> 下载 JDK-1.8
```shell
wget https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/jdk-8u333-linux-x64.tar.gz
```
> 上传并解压至opt目录下
```shell
tar -zxvf jdk-8u333-linux-x64.tar.gz -C /opt
```
###### 如图
![解压示例图](../static/img/centos/java_1.png)
> 配置java全局环境变量
```shell
# 1.编辑系统环境配置文件
vim /etc/profile

# 2.将一下内容copy至系统环境配置文件
#java
JAVA_HOME=/opt/jdk1.8.0_333
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH

# 3.刷新配置文件
source /etc/profile
```
> 检查是否安装成功
```shell
java -version
```
###### 如图
![img.png](../static/img/centos/java_2.png)

### MySql-8.0
>创建并进入mysql文件夹
```shell
mkdir /opt/mysql

cd /opt/mysql
```
> 下载mysql rpm包
```shell
wget https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
```
> 安装mysql
```shell
yum localinstall -y mysql80-community-release-el7-5.noarch.rpm
```
> yum仓库中查找mysql
```shell
yum search mysql-community
```
> 安装 mysql-community-server
```shell
yum install -y mysql-community-server
```
> 以上没有报错的情况下，表示mysql安装完成，启动mysql
```shell
systemctl start mysqld
```
> 查看mysql当前状态
```shell
systemctl status mysqld
```
> 设置mysql开机启动
```shell
systemctl enable mysqld
```
> 查看mysql运行日志，获取默认密码
```shell
vi /var/log/mysqld.log
```
> 登录mysql
```shell
mysql -uroot -p
输入从日志获取到的默认密码
```
> 修改密码
```shell
alter user 'root'@'localhost' identified with mysql_native_password by '66alwWqIat!sas';
```
> 查看所有的数据库
```shell
show databases;
```
> 使用mysql库
```shell
use mysql;
```
> 让root用户可以在任意主机登陆
```shell
update user set host = '%' where user = 'root';
```
> 使以上配置生效
```shell
flush privileges;
```
> 打开防火墙,放行对应mysql服务端口,如果是云服务器，可以在控制台配置防火墙规则
```shell
# 添加放行3306端口
firewall-cmd --zone=public --permanent --add-port=3306/tcp

# 将防火墙配置重载
firewall-cmd --reload
```
> mysql配置完成，接下来就可以使用外部可视化工具进行连接

### Maven
[maven-3.8.5 点击下载](https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/apache-maven-3.8.5-bin.tar.gz)
> 下载 maven-3.8.5
```shell
wget https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/apache-maven-3.8.5-bin.tar.gz
```
> 上传并解压至/opt/maven目录下
```shell
mkdir /opt/maven

tar -zxvf apache-maven-3.8.5-bin.tar.gz -C /opt/maven

cd /opt/maven

mkdir MyRepository
```

![解压示例图](../static/img/centos/maven_1.png)
> 配置Maven全局环境变量
```shell
# 1.编辑系统环境配置文件
vim /etc/profile

# 2.将一下内容copy至系统环境配置文件
# Maven
export MAVEN_HOME=/opt/maven/apache-maven-3.8.5
export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin

# 3.刷新配置文件
source /etc/profile
```
> 检查是否安装成功
```shell
mvn -version
```
###### 如图
![示例图](../static/img/centos/maven_2.png)

### Git
> yum安装git
```shell
yum install git
```
> 生成Key
```shell
ssh-keygen -t rsa -b 2048 -C "任意字符建议邮箱"
```
> 配置用户名和邮箱：
```shell
git config --global user.name "username"
git config --global user.email "useremail@qq.com"
```
> 清除配置中纪录的用户名和密码：
```shell
git config --system --unset credential.helper
```
> 执行pull或push后，缓存git用户名和密码
```shell
git config --global credential.helper store
```
> 清除git缓存中的用户名的密码
```shell
git credential-manager uninstall
```

### Nginx
[nginx-1.22 点击下载](https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/nginx-1.22.0.tar.gz)
> 下载nginx-1.22
```shell
wget https://zhongyi-z.oss-cn-beijing.aliyuncs.com/file/nginx-1.22.0.tar.gz
```
> 安装nginx依赖环境
```shell
# 1.编译依赖 gcc 环境
yum install gcc-c++
# 2.安装pcre
yum install -y pcre pcre-devel
# 3.安装zlib
yum install -y zlib zlib-devel
# 4.安装openssl库,支持https
yum install -y openssl openssl-devel
```
> 上传并解压至opt目录下
```shell
tar -zxvf nginx-1.22.0.tar.gz -C /opt
```
> 安装前配置nginx(Nginx安装目录为 /opt/nginx)
```dtd
默认配置命令
./configure
指定一些特定参数的配置(更改安装目录为 /opt/nginx)
./configure --prefix=/opt/nginx
```
> 执行编译和安装
```shell
make && make install 
```
> 查看nginx安装目录
```shell
whereis nginx
默认安装目录: /usr/local/nginx
```
> 配置nginx全局环境变量
> 将nginx安装目录下的启动文件建立软连接至系统环境变量目录中
```shell
ln -s /opt/nginx/sbin/nginx /usr/local/bin/
```
> 相关命令
```shell
# 重新加载配置文件
nginx -s reload
# 杀死所有nginx进程
killall nginx
# 停止服务
nginx -s stop
# 检查配置文件
nginx -t
# 启动nginx并指定配置文件
nginx -c /opt/conf/nginx.conf
```