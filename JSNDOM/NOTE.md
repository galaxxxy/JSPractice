# Javascript DOM 编程艺术
## Note for chapter 4
### nodeType属性

nodeType属性共有12种可选值，只有三种具有实用价值:
* 元素节点属性值为1
* 属性节点属性值为2
* 文本节点属性值为3


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
### 渐进增强(progressive enhancement)
#### 对象检测(object detection)
让脚本具有良好的向后兼容性
```
if(method) {
    //statements
}

if(!method) return false;
```
#### 浏览器嗅探(browser sniffing)
通过提取浏览器供应商提供的信息来解决向后兼容问题
使用浏览器嗅探技术的风险:
* 浏览器提供的信息可能不准确
* 为了适配各种浏览器嗅探脚本会变得复杂
* 许多嗅探脚本要求浏览器版本号精准匹配，不便修改

### 考虑性能
#### 减少DOM的访问和标记的数量
在多个元素都会取得一组类似元素的情况下，可以考虑重构代码，将搜索结果保存在一个全局变量里，或者把一组元素直接以参数形式传递给函数。<br/>
过多不必要的元素会增加DOM树的规模，进而增加遍历DOM树查找特定元素的时间。
#### 合并与放置脚本
```
<script src="script/functionA.js"></script>
<script src="script/functionB.js"></script>
<script src="script/functionC.js"></script>
<script src="script/functionD.js"></script>
```
推荐将四个脚本合并到一个脚本文件中，这样可以减少加载页面时发送的请求数量。（减少请求数量为性能优化的首选考虑项）<br/>
```
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="script/jQuery.js"></script>
</head>
```
位于`<head>`块中的脚本会导致浏览器无法并行加载其他文件(如图像或其他脚本)。根据HTTP规范，浏览器每次从同一个域名中最多只能同时下载两个文件。在下载脚本期间，浏览器不会下载其他任何文件，所有其他资源都要等脚本加载完毕之后才能下载。<br/>
```
<body>
    //statements
    <script src="script/jQuery.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            //statements
        });
    </script>
</body>
```
把所有`<script>`标签都放在文档末尾，`</body>`标记之前，可以使页面变得更快。
#### 压缩脚本
使用代码压缩工具来删去不必要的字节(注释和空格等)。压缩后的精简副本用于放在站点上，为与工作副本区分开，通常在文件名中加上min字样。

---
## Note for chapter 6
### nodeName
nodeName属性总是返回一个大写字母的值，例:
```
if(placeholder.nodeName != 'IMG') return false;
//检查placeholder是否为<img>标签
```
```
if(description.firstChild.nodeType == 3) {
    //检查description元素的第一个子元素是否为文本节点
    description.firstChild.nodeValue = text;
}
```
### 键盘访问
onkeypress事件处理函数专门用于处理键盘事件，按下键盘上的任何一个按键都会触发onkeypress(在某些浏览器中甚至包括TAB键)。<br/>
在几乎所有浏览器中，用TAB键移动到某个链接然后按下回车键的动作也会触发onclick事件。
因此最好不要使用onkeypress事件处理函数，而采用onclick事件。
### DOM-Core&HTML-DOM
HTML-DOM只能用于处理Web文档，通常比DOM-Core代码更短；DOM-Core不专属于JavaScript支持DOM的任何一门程序设计语言都能使用。

---
## Note for chapter 7
### 动态创建标记
#### 传统方法
##### document.write
缺点:
* 行为未与表现分离
* MIME类型application/xhtml+xml与document.write不兼容

##### innerHTML
缺点:
* 不能精确的操作HTML
* MIME类型application/xhtml+xml与innerHTML不兼容

#### DOM方法
##### createElement方法
创建节点
##### appendChild方法
作为某节点的子节点插入
##### createTextNode方法
创建文字节点
###改进图片库
#### insertBefore方法
```
parentElement.insertBefore(newElement,targetElement)
//parentElement:targetElement.parentNode
```
##### 编写insertAfter函数
```
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        //判断targetElement是否是parentElement最后一个子元素
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
        //如果不是则将newElement插入到targetElement的下一个兄弟元素前
    }
}
```

### Ajax
通过XMLHttpRequest对象发送请求和处理响应
#### XMLHttpRequest对象
```
function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");//IE5
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();//其他浏览器
}
```
XMLHttpRequest的open方法用来指定服务器上将要访问的文件，指定请求GET,POST,或SEND,第三个参数用于指定请求是否以异步方式发送和处理。
`request.open("GET","example.txt",true);`
服务器在向XMLHttpRequest对象发回响应时，浏览器更新readyState的值:
* 0表示未初始化
* 1表示未正在加载
* 2表示加载完毕
* 3表示正在交互
* 4表示完成

当readyState的值为4时就可以访问服务器返回的数据了。responseText属性保存文本字符串形式的数据；
responseXML属性用于保存Content-Type头部中指定为"text/xml"的数据，实际上是一个DocumentFragment对象，可以用DOM方法处理。

---
## Note for chapter 8
#### abbr标签
IE浏览器统计abbr元素的子节点个数时总会返回一个错误的值--0
#### 换行符
有些浏览器会把换行符解释为文本节点。很多DOM方法都只能用于元素节点，如果没有百分百的把握一定要检查nodeType。
```
function lastChildElement(parentElement){
    // 获取最后一个子元素节点
    // 方法1
    var children = parentElement.getElementsByTagName("*");
    if (children.length != 0) {
        return children[children.length-1];
    } else {
        return false;
    }
    // 方法2
    // var children = parentElement.childNodes;
    // for(var i = children.length-1; i > 0; i--){
    //     if(children[i].nodeType == 1){
    //         return children[i];
    //     }
    // }
    // return false;
}
```

---
## Note for chapter 9
### CSS-DOM
#### style属性
css样式属性采用驼峰命名法来表示
style属性只能返回内嵌样式
#### 用DOM脚本设置样式
* CSS无法让我们找到目标元素
* CSS寻找目标元素的方法未受广泛支持
#### className属性
```
className <=> setAttribute("class",className)
```
className属性在赋值时会覆盖该元素原有的class的值

---
## Note for chapter 10
### overflow属性
overflow属性用于处理元素尺寸超出其容器尺寸<br/>
overflow属性可取四个值:
* visible:不剪裁溢出内容
* hidden:隐藏溢出内容
* scroll:隐藏溢出内容并显示滚动条
* auto:只有发生溢出才显示滚动条

### 变量
* 全局变量:没有用var声明或在最外部声明
* 局部变量
* 属性:只与某个特定元素有关的变量

### 使用Math对象取整
#### ceil方法
大于方向取整
#### floor方法
小于方向取整
#### round方法
四舍五入取整
