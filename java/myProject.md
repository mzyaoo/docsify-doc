## 1、SpringBoot自定义@Enable*注解

##### 例如：自定义 @EnableLogs 开启全局注解
> 创建注解
```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import({LogsConfiguration.class})
public @interface EnableLogs {
}
```
