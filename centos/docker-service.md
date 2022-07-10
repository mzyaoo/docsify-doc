# Docker环境搭建

[<font color='red'>Docker镜像搜索</font>](https://hub.docker.com)

### Linux环境下Docker安装
> 安装 `yum-utils`
```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```
> 为yum源添加Docker仓库位置
```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
> 安装Docker
```shell
yum install docker-ce
```
> 启动Docker
```shell
systemctl start docker
```

### Docker镜像常用命令
> 搜索镜像
```dtd
docker search 镜像名称
```

> 下载镜像
```shell
docker pull 镜像名称:版本号
```

### Docker中安装Mongo
> 下载MongoDB的Docker镜像
```shell
docker pull mongo:4.2.5
```
> 使用Docker命令启动MongoDB服务
```shell
docker run -p 27017:27017 --name mongo \
-v /mydata/mongo/db:/data/db \
-d mongo:4.2.5
```
> 进入容器中的MongoDB客户端
```shell
docker exec -it mongo mongo
```
> 在`admin`集合中创建一个账号用于连接，这里创建的是基于`root`角色的超级管理员帐号
```shell
use admin

db.createUser({ 
    user: 'mongoAdmin', 
    pwd: 'secret', 
    roles: [ { role: "root", db: "admin" } ] 
});
```