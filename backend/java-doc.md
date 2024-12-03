## Stream流式计算

> 1、集合中是否包含某个元素
```java
// 写法1:list集合中是否包含id为4的元素
List<String> list = Arrays.asList(new String[] {"1","2","3"});
String id = "4";
boolean anyMatch = list.stream().filter(w -> w.equals(id)).findAny().isPresent();

// 写法2
boolean anyMatch = list.stream().anyMatch(s -> s.equals(id));
```
> 2、根据条件过滤集合
```java
// filter作用：对流中的元素进行过滤
List<String> list = new ArrayList<String>();
Collections.addAll(list, "迪丽热巴", "唐嫣", "罗晋", "郝泽宇", "艾伦");
// 筛选保留名字为3位的元素
list.stream().filter(name -> name.length() == 3).forEach(name -> System.out.println(name));
```
