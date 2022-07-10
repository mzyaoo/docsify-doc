# Docker环境搭建

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
```shell
docker search 镜像名称
```
> 下载镜像
```shell
docker pull 镜像名称:版本号
```