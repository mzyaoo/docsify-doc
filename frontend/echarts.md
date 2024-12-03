### 实现区域地图

[官方文档](https://echarts.apache.org/zh/index.html)

[查看依赖版本](https://www.npmjs.com/package/echarts)

> GeoJSON 地理数据格式

[GeoJSON文件参考](https://github.com/TangSY/echarts-map-demo)

```javascript
// 此处案例使用jquery请求json文件获取geojson数据
// 加载geojson.json文件
$.get('本地geojson.json文件', function (geoJson) {
    // 在这里处理返回的JSON数据
    echarts.registerMap('区域别名', geoJson);
    let option = {
        geo: {
            map: '区域别名',
            //... 自定义配置
        }
        //... 自定义配置
    }
    // 加载option对象
    myChart.setOption(option);
}, 'json').fail(function (xhr, status, error) {
    // 在这里处理错误
});
```