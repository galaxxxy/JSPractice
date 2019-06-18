# Javascript DOM 编程艺术
## Note for chapter 4

1. <details><summary>nodeType</summary>
    nodeType属性共有12种可选值，只有三种具有实用价值：<br/>
    元素节点属性值为1<br>
    属性节点属性值为2<br>
    文本节点属性值为3<br>
</details>

---
## Note for chapter 5
### 平稳退化(graceful degradation)
#### "javascript:"伪协议(pseudo-protocol)
非标准化协议，能够通过一个链接来调用Javascript函数<br/>
javascript:<br/>
```
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}
```
html:<br/>
```
<a href="javascript:popUp('http://www.example.com/);">Example</a>
```
<b>尽量不要使用这种做法</b>
#### 内嵌事件处理函数
```
<a href="#" onclick="popUp('http://www.example.com/');return false;">Example</a>
```
<b>尽量不要使用这种做法</b>
#### 分离javascript
html:<br/>
```
<a href="http://www.example.com/" class="popup">Example</a>
```
javascript:<br/>
```
var links = document.getElementsByTagName("a");
for(var i=0; i<links.length; i++) {
    if(links[i].getAttribute("class")=="popup") {
        links[i].onclick = function() {
            popUp(this.getAttribute("href"));
            return false;
        }
    }
}
```
这里遍历不能用`for/in`，因为`getElementsByTagName()`返回的是HTMLCollection对象而不是数组。