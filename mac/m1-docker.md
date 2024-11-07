### Docker环境

#### Elasticsearch

```shell
docker pull elasticsearch:7.17.25
```

```shell
# 注意：挂载的目录需要读写权限，对应命令为：chmod -R 777 文件地址/目录地址
docker run --name Elasticsearch-8.12.2 -p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
-e "ELASTIC_PASSWORD=your_password_here" \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/data:/usr/share/elasticsearch/data \
-v /Library/MyFolder/Environment/Docker/Elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-d elasticsearch:8.12.2
```

```yaml
# elasticsearch.yml配置文件
network.host: 0.0.0.0
http.port: 9200
# 取消安全认证
xpack.security.enabled: false
```

#### Kibana

```shell
docker pull kibana:7.17.25
```

```shell
# 查询elasticsearch中的内部IP
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' elasticsearch:8.12.2
```

```shell
# 启动Kibana
docker run --name kibana -e ELASTICSEARCH_HOSTS=http://172.17.0.2:9200 -p 5601:5601 -d kibana:7.16.2
```

```markdown
# 中文友好地分词插件，官方地址

# 注意，下载分词器版本要与es、kibana版本一致

https://github.com/infinilabs/analysis-ik

https://release.infinilabs.com/analysis-ik/stable/
```

```shell
# 下载对应版本的ik分词器

# 将下载好的ik分词器copy到es容器中

# 执行安装分词器命令
docker exec -it elasticsearch:8.12.2 /bin/bash

bin/elasticsearch-plugin install file:分词器压缩包路径
```