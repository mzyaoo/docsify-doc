### Docker环境

#### Elasticsearch

拉取elasticsearch镜像

```shell
docker pull elasticsearch:7.17.25
```

运行elasticsearch容器，并挂载Elasticsearch配置文件、数据文件、插件文件。

`注意：挂载的目录需要读写权限，命令如下：`

```shell
chmod -R 777 文件地址/目录地址
```

`运行elasticsearch容器并挂载文件路径，命令如下：`

```shell
docker run --name Elasticsearch-8.12.2 -p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
-e "ELASTIC_PASSWORD=your_password_here" \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/data:/usr/share/elasticsearch/data \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-d elasticsearch:8.12.2
```

`elasticsearch.yml配置文件`

```yaml
# elasticsearch.yml配置文件
network.host: 0.0.0.0
http.port: 9200
# 取消安全认证
xpack.security.enabled: false
```

#### Kibana

拉取Kibana镜像，命令如下：

```shell
docker pull kibana:7.17.25
```

查询elasticsearch中的内部IP，命令如下：

```shell
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' Elasticsearch-7.17.25
```

启动Kibana，命令如下：

```shell
docker run --name kibana -e ELASTICSEARCH_HOSTS=http://172.17.0.2:9200 -p 5601:5601 -d kibana:7.17.25
```

中文友好地分词插件，遵循官方文档即可自定义词库，[官方地址](https://github.com/infinilabs/analysis-ik/)，官方推荐下载地址：

`注意，下载分词器版本要与es、kibana版本一致`

```markdown
https://release.infinilabs.com/analysis-ik/stable
```

安装Ik分词器插件

1、将下载好的ik分词器压缩包上传至es容器中：

方式一：把ik分词器压缩包上传指挂载目录plugins中，进入es器，将ik分词器压缩包移出plugins目录至其他文件夹中，执行安装插件命令

方式二：通过`docker cp`命令，将ik分词器插件copy到es容器中，进入es容器，执行安装插件命令。

进入es容器命令：
```shell
docker exec -it ES容器ID或容器名称 /bin/bash
```

进入ES安装目录后，安装命令如下：
```shell
bin/elasticsearch-plugin install file:分词器压缩包路径
```

#### Oracle

拉取Oracle镜像，命令如下：

镜像系统架构：``linux/amd64`` ``linux/arm64/v8``

```shell
docker pull kangaroo1122-docker.pkg.coding.net/project/public/oracle:19c-ee
```

运行容器，命令如下：

``注意：挂载目录时，需要该目录的读写权限``
```shell
# /vm-data/oracle-19c/oradata 为宿主机目录地址
docker run -d \
-p 1521:1521 \
-p 5500:5500 \
-e ORACLE_PDB=ORCL \
-e ORACLE_PWD=123456 \
-e ORACLE_CHARACTERSET=AL32UTF8 \
-e INIT_SGA_SIZE=3000 \
-e INIT_PGA_SIZE=1000 \
-v /vm-data/oracle-19c/oradata:/opt/oracle/oradata \
--name oracle19c \
oracle/database:19.19.0-ee
```

oracle创建用户
```sql
CREATE USER username IDENTIFIED BY password;
```

分配用户权限
```sql
GRANT CONNECT, RESOURCE TO username;
```