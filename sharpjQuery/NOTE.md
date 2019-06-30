# 锋利的jQuery
## Note for chapter 1
### jQuery与DOM对象的相互转换
jQuery->DOM [index]/get(index)<br/>
DOM->jQuery $(DOM object)
### 解决jQuery与其他库的冲突
1. jQuery在其他库之后导入
```
jQuery.noConflict();
jQuery(function(){//<=>$(document).ready(function(){});
    //statement
});
```
或者自定义快捷方式
```
var $j = jQuery.noConflict();//自定义快捷方式--$j
$j(function(){<=>$(document).ready(function(){});
    //statement
});
```
或者
```
jQuery.noConflict();
jQuery(function(argument){<=>$(document).ready(function(){});
    //函数内部的argument均为jQuery
});
```
或者使用匿名函数
```
jQuery.noConflict();
(function(argument){//内部函数内部的argument均为jQuery
    argument(function(){});//<=>$(document).ready(function(){});
})
```
2. jQuery在其他库之前导入
可以直接使用"jQuery",无需调用jQuery.noConflict();
---
## Note for chapter 2
### jQuery选择器
#### 基本选择器
选择器|描述|返回
 :-: | :-: | :-: 
 #id | 根据给定的id匹配元素 | 单个元素
 .class | 根据给定的类名匹配元素 | 集合元素
 element | 根据给定的元素名匹配元素 | 集合元素
 selector1, selector2, ..., selectorN | 将每个选择器匹配到的元素集合一起返回 | 集合元素
  \* | 匹配所有元素 | 集合元素
 
#### 层次选择器
选择器|描述|返回
 :-: | :-: | :-: 
 $("ancestor descendant") | 选取ancestor元素里所有descendant(后代)元素 | 集合元素
 $("parent>child") | 选取parent元素下的child元素 | 集合元素
 $("prev+next") | 选取紧接prev元素后的next元素 | 集合元素
 $("prev~siblings") | 选取prev元素后的所有siblings元素 | 集合元素
 
\$("prev+next") <=> \$("prev").next("next")<br/>
\$("prev~siblings") <=> \$("prev").nextAll("siblings")
#### 过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :first | 选取第一个元素 | 单个元素
 :last | 选取最后一个元素 | 单个元素
 :not(selector) | 去除所有与给定选择器匹配的元素 | 集合元素
 :even | 选取索引是偶数的所有元素，索引从0开始 | 集合元素
 :odd | 选取索引是奇数的所有元素，索引从0开始 | 集合元素
 :eq(index) | 选取索引等于index的元素，index从0开始 | 单个元素
 :gt(index) | 选取索引大于index的元素，index从0开始 | 集合元素
 :lt(index) | 选取索引小于index的元素，index从0开始 | 集合元素
 :header | 选取所有标题元素 | 集合元素
 :animated | 选取当前正在执行动画的所有元素 | 集合元素
 :focus | 选取当前获取焦点的元素 | 集合元素
#### 内容过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :contains(text) | 选取含有文本内容为"text"的元素 | 集合元素
 :empty | 选取不包含子元素或文本的空元素 | 集合元素
 :has(selector) | 选取含有选择器所匹配的元素的元素 | 集合元素
 :parent | 选取含有子元素或文本的元素 | 集合元素
#### 可见性过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :hidden | 选取所有不可见的元素 | 集合元素
 :visible | 选取所有可见的元素 | 集合元素
#### 属性过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 [attribute] | 选取拥有此属性的元素 | 集合元素
 [attribute=value] | 选取属性的值为value的元素 | 集合元素
 [attribute!=value] | 选取属性的值不等于value的元素 | 集合元素
 [attribute^=value] | 选取属性的值以value开始的元素 | 集合元素
 [attribute$=value] | 选取属性的值以value结束的元素 | 集合元素
 [attribute*=value] | 选取属性的值含有value的元素 | 集合元素
 [attribute\|=value] | 选取属性等于给定字符串或以该字符串为前缀(字符串后跟一个连字符"-")的元素 | 集合元素
 [attribute~=value] | 选取属性用空格分割的值中包含一个给定值的元素 | 集合元素
 [attribute1][attribute2][attributeN] | 用属性选择器合并成一个复合属性选择器，满足多个条件。 | 集合元素
 #### 子元素过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :nth-child(index/even/odd/equation) | 选取每个父元素下的第index个子元素或奇偶元素,index从1开始 | 集合元素
 :first-child | 选取每个父元素的第一个子元素| 集合元素
 :last-child | 选取每个父元素的最后一个子元素 | 集合元素
 :only-child | 如果某个元素是他父元素中唯一的子元素，则将会被匹配 | 集合元素
 #### 表单对象属性过滤选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :enabled | 选取所有可用元素 | 集合元素
 :disabled | 选取所有不可用元素| 集合元素
 :checked | 选取所有被选中的元素(单选框，复选框) | 集合元素
 :selected | 选取所有被选中的选项元素(下拉列表) | 集合元素
#### 表单选择器
选择器|描述|返回
 :-: | :-: | :-: 
 :input | 选取所有\<input>,\<textarea>,\<select>和\<button>元素 | 集合元素
 :text | 选取所有单行文本框| 集合元素
 :password | 选取所有密码框 | 集合元素
 :radio | 选取所有单选框 | 集合元素
 :checkbox | 选取所有多选框 | 集合元素
 :submit | 选取所有提交按钮 | 集合元素
 :image | 选取所有图像按钮 | 集合元素
 :reset | 选取所有重置按钮 | 集合元素
 :button | 选取所有按钮 | 集合元素
 :file | 选取所有上传域| 集合元素
 :hidden | 选取所有不可见元素 | 集合元素
### toggle方法
.toggle(function1,function2)<br/>
function1与function2交替执行
- - -
## Note for chapter 3

### 插入节点方法
原HTML代码:`<p>我想说:</p>`

方法|描述|示例|结果
 :-: | :-: | :-: | :-:
 append()|在每个匹配的元素内部追加内容|`$('p').append("<b>你好</b>")`|`<p>我想说:<b>你好</b></p>`
 appendTo()|将匹配到的所有元素追加到指定元素中|`$('<b>你好</b>').appendTo('p')`|`<p>我想说:<b>你好</b></p>`
 prepend()|在每个匹配的元素内部前置内容|`$('p').prepend('<b>你好</b>')`|`<p><b>你好</b>我想说:</p>`
 prependTo()|将所有匹配的元素前置添加到指定元素中|`$('<b>你好</b>').prependTo('p')`|`<p><b>你好</b>我想说:</p>`
 insertAfter()|将所有匹配元素插入到指定元素后面|`$('<b>你好</b>').insertAfter('p')`|`<p>我想说</p><b>你好</b>`
 insertBefore()|将所有匹配元素插入到指定元素前面|`$('<b>你好</b>').insertBefore('p')`|`<b>你好</b><p>我想说</p>`
 after()|在每个匹配元素后添加内容|`$('p').after('<b>你好</b>')`|`<p>我想说</p><b>你好</b>`
 before()|在每个匹配元素前添加内容|`$('p').before('<b>你好</b>')`|`<b>你好</b><p>我想说</p>`

### 插入节点方法
#### remove()
用法:`.remove([selector])`

删除所选节点及其包含的所有后代节点，返回一个指向被删节点的引用
#### detach()
用法:`.detach([selector])`

和remove不同的是，此方法会保留所有绑定事件和附加的数据
#### empty()
清空所选节点及其所有后代节点

### 包裹节点方法
#### wrap()
用标签将匹配的元素包裹起来
#### wrapAll()
用一个标签将匹配的元素包裹起来，若被包裹的多个元素间有其他元素，其他元素会被放到包裹元素后
#### wrapInner()
将匹配元素的子内容（包括文本节点）用标签包裹起来
### 属性操作
属性|描述|方法
 :-: | :-: | :-: 
 attribute | 自定义DOM属性 | attr(attributeName)
 property | HTML元素固有属性 | prop(attributeName)
 
如`<a href="#" action="delete class="btn"">`中的`class`和`href`为固有属性,`action`为自定义属性<br/>
官网建议attr(),prop()的使用:<br/>

Attribute/Property|`.attr()`|`.prop()`
 :-: | :-: | :-: 
 accesskey|yes|
 align|yes| 
 async|yes|yes
 autofocus|yes|yes
 checked|yes|yes
 class|yes|
 contenteditable|yes|
 draggable|yes|
 href|yes|
 id|yes|
 label|yes|
 location(i.e.window.location)|yes|yes
 multiple|yes|yes
 readonly|yes|yes
 rel|yes|
 selected|yes|yes
 src|yes|
 tabindex|yes|
 title|yes|
 type|yes|
 width|yes|

 ### CSS-DOM操作
 #### 样式属性
 ##### css()
 属性若带有“-”符号，例如font-size，如果在设置该属性的值的时候不带引号，那么就要使用驼峰式写法，如“fontSize”。若带上了引号，既可以用“font-size”，也可以写成“fontSize”。<br/>
 若要取得某元素的高度可以使用`.css("height")`。或者也可以使用`height()`，它的作用是取得匹配元素当前计算的高度值(px)。<br/>
 两者的区别是：css()方法获取的高度值与样式的设置有关，可能会得到“auto”，也可能得到“10px”之类的字符串；而height()方法获取到的高度值则是元素在页面中的实际高度，与样式的设置无关，且不带单位。
 #### 元素定位
 ##### offset()
 作用是获取元素在当前视窗的相对偏移，只对可见元素有效。
 ```
 var offset = $("p").offset();
 var left = offset.left;
 var top = offset.top;
 ```
 ##### position()
 作用是获取元素相对于最近的一个position样式属性设置为relative或absolute的祖父节点的相对偏移。
 ```
 var position = $("p").position();
 var left = position.left;
 var top = position.top;
 ```
 ##### scrollTop()
 作用是获取元素的滚动条距顶端的距离
 ```
 $("textarea").scrollTop(300);//控制元素内的滚动条滚动到距顶端300的位置
 ```
 ##### scrollLeft()
 作用是获取元素的滚动条距左侧的距离
 ```
 $("textarea").scrollLeft(300);//控制元素内的滚动条滚动到距左侧300的位置
 ```
 ### 超链接提示效果
 #### MouseEvent
 ##### pageX&pageY
 鼠标相对于文档的坐标，非标准属性
 