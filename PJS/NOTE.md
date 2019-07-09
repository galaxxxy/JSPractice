# JavaScript高级程序设计
## Chapter 1
### JavaScript
完整的JavaScript实现应该由三个不同的部分组成:
* 核心(ECMAScript)
* 文档对象模型(Document Object Model)
* 浏览器对象模型(Browser Object Model)

#### 文档对象模型(DOM)
DOM是针对XMl但经拓展用于HTML的应用程序编程接口(API),提供了访问和操作网页内容的方法和接口
#### 浏览器对象模型(BOM)
提供浏览器交互的方法和接口

---
## Chapter 2
### <script>元素
#### defer属性
立即下载，延迟执行<br/>
H5规范要求脚本按照他们出现的先后顺序执行，且这些脚本会先于DOMContentLoaded事件执行；但在现实中，延迟脚本并不一定会按照顺序执行，也不一定在DOMContentLoaded事件触发前执行，因此最好只包含一个延迟脚本。
#### async属性
立即下载，异步执行<br/>
标记为async的脚本并不保证按照指定他们的先后顺序执行，因此要确保其之间互不依赖。指定async属性的目的是不让页面等待脚本的下载和执行，从而异步加载页面其他内容。因此异步脚本最好不要在加载期间修改DOM。<br/>
异步脚本一定会在页面的load事件之前执行，但可能会在DOMContentLoaded事件触发之前或之后执行。

---
## Chapter 3