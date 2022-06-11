# Vue
## 一、vue六种事件修饰符
* `prevent：阻止默认事件(常用)`
* `stop：阻止事件冒泡（常用）`
* `once：事件只触发一次（常用）`
* `capture：使用事件的捕获模式`
* `self：只有event.target是当前操作的元素才触发事件`
* `passive：事件的默认行为立即执行，无需等待事件回避执行完毕`

## 二、vue键盘事件

* `@keyup  按下`
* `@keyup  弹起`

> 常用的按键别名
- 回车 => enter
- 删除 => delete (捕获“删除”和“退格”键)
- 退出 => esc
- 空格 => space
- 换行 => tab (特殊，必须配合keydown去使用)
- 上 => up
- 下 => down
- 左 => left
- 右 => right

<font color='red'>Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）</font>




## 三、计算属性(computed)

## 四、监视属性(watch)
> 两种写法

- 1、new Vue传入watch配置
```dtd
1、函数式写法  
被监视属性: function (newValue, oldValue) {
    console.log(newValue, oldValue)
}
2、配置对象式写法
被监视属性: {
    immediate: true, // 初始化时调用一下handler
    deep: false, // 深度监视
    //被监视属性发生改变时，出发该函数
    handler(newValue, oldValue) {
        console.log(newValue, oldValue)
    }
}
```

- 2、
    vm.$watch("被监视属性",function(newValue, oldValue){
        console.log("")
    })



## 五、过滤器filters

官方文档：https://cn.vuejs.org/v2/guide/filters.html
filters:{
    过滤器名称(value){
        return value.toUpperCase();
    }
}

六、自定义指令
官方文档：https://cn.vuejs.org/v2/guide/custom-directive.html
directives:{

}

>生命周期函数

## 七、钩子函数
Vue完成模版的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
mounted:{

}
