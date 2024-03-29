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

删除所选节点及其包含的所有后代节点，返回一个指向被删节点的引用。remove()不会保留元素的 jQuery 数据。其他的比如绑定的事件、附加的数据等都会被移除。
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

原则一:只添加属性名称该属性就会生效应该使用prop()<br/>
原则二:只存在true/false的属性应该使用prop()
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

 ---
## Note for chapter 4
### 添加事件
在常规JavaScript代码中，通常使用window.onload方法；在jQuery中，使用的是$(document).ready()方法。
#### 执行时机
window.onload方法是在网页中所有的元素(包括元素的所有关联文件)完全加载到浏览器后才执行。而通过jQuery中的$(document).ready()方法注册的事件处理程序，在DOM完全就绪时就可以被调用。<br/>
jQuery还有一个关于页面加载的load()方法。load()方法会在元素的onload事件中绑定一个处理函数。如果处理函数绑定给window对象，则会在所有内容(包括窗口、框架、对象和图像等)加载完毕后触发，如果处理函数绑定在元素上，则会在元素的内容加载完毕后触发。
#### 事件绑定
在文档装载完成后，若打算为元素绑定事件来完成某些操作，则使用bind()方法来对匹配元素进行特定事件的绑定，其调用格式为:
```
bind(type [,data] , fn);
```
第一个参数是事件类型:jQuery中的事件绑定类型比普通JavaScript事件绑定类型少了"on"。<br/>
第二个参数可选，作为event.data属性值传递给事件对象的额外数据对象。<br/>
第三个参数用来绑定的处理函数。
#### 合成时间
jQuery有两个合成事件:hover()方法和toggle()方法。
##### hover()方法
用于模拟光标悬停事件:
```
hover(enter,leave);
```
hover()方法准确来说替代jQuery中的bind("mouseenter")和bind("mouseleave"),而不是bind("mouseover")和bind("mouseout")。
##### toggle()方法
模拟鼠标连续点击事件和切换元素的可见状态:
```
toggle(fn1,fn2,...fnN);
```
#### 事件冒泡
事件会按照DOM的层次结构像水泡一样不断向上直至顶端。
##### 事件对象
由于IE-DOM和标准DOM实现事件对象的方法各不相同，导致在不同浏览器中获取事件对象变得比较困难。针对此问题，jQuery进行了必要的扩展和封装，使得在任何浏览器中都能轻松获取事件对象及其一些属性:
```
$("element").bind("click",function(event){ //event:事件对象
    //statement
});
```
当点击"element"元素时，事件对象被创建。这个事件对象只有事件处理函数才能访问到。事件处理函数执行完毕后，事件对象就被销毁。
##### 停止事件冒泡
停止事件冒泡可以阻止事件中其他对象的事件处理函数被执行。在jQuery中提供了是stopPropagation()方法来停止事件冒泡。
##### 阻止默认行为
网页中的元素有自己的默认行为，有时需要阻止元素的默认行为。在jQuery中，提供了preventDefault()方法来阻止元素的默认行为。如果想同时对事件对象停止冒泡和默认行为，可以在事件处理函数中返回false。
##### 事件捕获
事件捕获是从最顶端往下开始触发。并非所有主流浏览器都支持事件捕获，而且这个缺陷无法通过JavaScript修复。jQuery不支持事件捕获，如果需要使用事件捕获，需使用原生JavaScript。
#### 事件对象的属性
jQuery对常用的事件对象属性进行了封装，使事件处理在各大浏览器下都可以正常运行而无需进行浏览器类型判断。
##### event.type
用于获取事件的类型。
```
$("a").click(function(event){
    alert(event.type);//获取事件类型
    return false;//阻止链接跳转
})
```
##### event.preventDefault()方法
用于阻止默认的事件行为，JavaScript中的preventDefault()方法在IE浏览器中无效，jQuery对其进行封装使其兼容各浏览器。
##### event.stopPropagation()方法
用于阻止事件的冒泡，JavaScript中的stopPropagation()方法在IE浏览器中无效，jQuery对其进行封装使其兼容各浏览器。
##### event.target
用于获取触发事件的元素
##### event.relatedTarget
标准DOM中，mouseover和mouseout所发生的元素通过event.target访问，相关元素是通过event.relatedTarget访问。event.relatedTarget在mouseover中相当于IE浏览器的event.fromElement，在mouseout中相当于IE浏览器的event.toElement。
##### event.pageX和event.pageY
用于获取光标相对页面的x坐标和y坐标。若不用jQuery，IE浏览器中应使用event.x/event.y，Firefox浏览器中应使用event.pageX/event.pageY。如果页面上有滚动条，还要加上滚动条的宽度或高度。
##### event.which
用于在鼠标点击事件中获取鼠标的左、中、右键，在键盘事件中获取键盘的按键。
##### event.metaKey
针对不同浏览器对键盘中ctrl按键解释不同，jQuery也进行了封装，并规定event.metaKey为键盘事件中获取ctrl按键。
#### 移除事件
使用unbind()方法来移除事件:
```
unbind([type],[data]);
```
第一个参数为事件类型，第二个参数是要移除的函数；若无参数则删除所有绑定的事件；若提供了事件类型则只删除该类型的绑定事件；若把绑定时传递的处理函数作为第二个参数则只删除这个特定的事件处理函数。<br/>
对于只要触发一次，随后即可解除绑定的情况，jQuery提供了one()方法:
```
one(type,[data],fn);
```
#### 模拟操作
##### 常用模拟
用trigger()方法完成模拟操作
##### 触发自定义事件
trigger()方法不仅能触发浏览器支持的具有相同名称的事件，也可以触发自定义名称的事件。
##### 传递数据
```
trigger(type,[data]);
```
第一个参数是要触发的事件类型，第二个参数是要传递给事件处理函数的附加数据，以数组形式传递。通常可以通过传递一个参数给回调函数来区别这次事件是代码触发的还是用户触发的。
##### 执行默认操作
trigger()方法触发事件后，会执行浏览器默认动作。如果只想触发绑定的事件而不想执行浏览器默认操作，可以使用triggerHandler()方法。
##### bind()的其他用法
###### 绑定多个事件类型
为元素一次性绑定多个事件类型:
```
$(function(){
    $("div").bind("mouseover mouseout",function(){
        $(this).toggleClass("over");
    });
});
```
当光标滑入div元素时，该元素的class切换为"over"；当光标滑出div元素时，class切换为先前的值。
###### 添加事件命名空间
可以把为元素绑定的多个事件类型用命名空间规范起来，便于管理:
```
$(function(){
    $("div").bind("click.plugin",function(){
        $("body").append("<p>click事件</p>");
    });
    $("div").bind("mouseover.plugin",function(){
        $("body").append("<p>mouseover事件</p>");
    });
    $("div").bind("dblclick",function(){
        $("body").append("<p>dblclick事件</p>");
    });
    $("button").click(function(){
        $("div").unbind(".plugin");
    });
});
```
在所绑定的事件类型后面添加命名空间，这样在删除事件时只需要指定命名空间即可。
###### 相同事件名称，不同命名空间执行方法
可以为元素绑定相同的事件类型，然后以命名空间的不同按需调用:
```
$(function(){
    $("div").bind("click",function(){
        $("body").append("<p>click事件</p>");
    });
    $("div").bind("click.plugin",function(){
        $("body").append("<p>click.plugin事件</p>");
    });
    $("button").click(function(){
        $("div").trigger("click!");//!的作用是匹配所有不包含在命名空间中的click方法
    });
});
```
### jQuery动画
#### show()和hide()方法
通过这两种方法可以控制"内容"的显示和隐藏。隐藏内容的代码与设置display属性效果相同，:
```
$("element").css("display","none");
```
为show()方法指定一个速度参数，例如"slow":
```
$("element").show("slow");
$("element").show(1000);
$("element").hide(1000);
```
动画会同时减少"内容"的高度宽度和不透明度,然后从上到下增大"内容"宽度，从左到右增大"内容"宽度，同时增加"内容"不透明度，直至内容完全显示。
#### fadeIn()和fadeOut()方法
fadeIn()和fadeOut()只改变元素的不透明度
#### slideUp()和slideDown()方法
slideUp()和slideDown()方法只改变元素的高度
#### 自定义动画方法animate()
jQuery中，可以使用animate()方法来自定义动画:
```
animate(params, speed, callback);
```
第一个参数包含样式属性及值的映射，如{property1:"value1", property2:"value2",...}；第二个为速度参数，可选；callback为在动画完成时执行的函数，可选。
##### 累加减动画
```
$(function(){
    $("#panel").click(function(){
        $(this).animate({left:"+=500px"},3000);//在当前位置累加500px
    });
});
```
##### 多重动画
###### 同时执行
```
$(function(){
    $("#myImg").click(function(){
        $(this).animate({left:"500px",height:"200px"},3000);
    });
});
```
###### 按顺序执行
```
$(this).animate({left:"500px"},3000);
$(this).animate({height:"200px"},3000);
//也可改为链式写法
$(this).animate({left:"500px"},3000)
       .animate({height:"200px"},3000);
```
动画效果的执行具有先后顺序，称为"动画队列"。
###### 综合动画
为同一元素应用多重效果时，可以通过链式方式对这些效果进行排队。
##### 动画回调函数
css()方法并不会加入到动画队列中，而是立即执行。可以使用回调函数对非动画方法实现排队，只要把css()方法写在最后一个动画的回调函数中即可。<br/>
callback回调函数适用于jQuery所有的动画效果方法，例如slideDown()方法。
##### 停止动画
需要在某处停止动画，需要使用stop()方法:
```
stop([clearQueue],[gotoEnd]);
```
参数clearQueue和gotoEnd都是可选参数，为Boolean值。clearQueue代表是否要清空未执行完的动画队列，gotoEnd代表是否直接将正在执行的动画跳转到末状态。<br/>
如果直接使用stop()方法，会立即停止当前正在进行的动画，如果接下来还有动画等待继续进行，则以当前状态开始接下来的动画。如在为一个元素绑定hover事件后，用户把光标移入元素会触发动画效果，当这个动画未结束时，用户就将光标移出这个元素了，那么光标移出的动画效果将会被放入队列中，等待移入动画结束后在执行。因此若光标移入移出过快会导致动画效果与光标动作不一致，此时只要在移入移出之前加入stop()方法就能解决此问题:
```
$(document).ready(function () {
    $("#panel").hover(function(){
        $(this).stop()
               .animate({height:"150",width:"300"},200);
    },function(){
        $(this).stop()
               .animate({height:"22",width:"60"},300);
    });
});
```
下例stop()方法只会停止正在进行的动画，如果动画正执行第一阶段(改变height)，则光标移出后，只会停止当前动画，继续进行下面改变width的动画，而光标移出事件动画要等这个动画结束之后才会执行。这种情况下把stop()方法的第一个参数设置为true，此时程序会把当前元素接下来尚未执行完的动画队列都清空。
```
$(document).ready(function () {
    $("#panel").hover(function(){
        $(this).stop()
               .animate({height:"150"},200)
               .animate({width:"300"},300);
    },function(){
        $(this).stop()
               .animate({height:"22"},200)
               .animate({width:"60"},300);
    });
});
```
第二个参数可以用于让正在执行的动画直接到达结束时刻的状态，通常用于后一个动画需要基于前一个动画的末状态的情况，可以通过`stop(false,true)`这种方式让当前动画直接到达末状态。<br/>
jQuery只能设置当前执行动画的最终状态，不能直接到达未执行动画队列的最终状态。
##### 判断元素是否处于动画状态
为了避免出现动画累积，判断元素是否处于动画状态，若不处于，才为元素添加新动画，否则不添加:
```
if(!$(element).is(":animated")){
    //追加新动画
}
```
##### 延迟动画
可以使用delay()方法对动画进行延迟操作:
```
$(this).animate({left:"400px",height:"200px",opacity:"1"},3000)
       .delay(1000)
       .animate({top:"200px",width:"200px",3000})
       .delay(2000)
       .fadeOut("slow");
```
delay()方法既可以推迟动画队列中函数的执行，也可以用于自定义队列。
##### 其他动画方法
###### toggle()方法
toggle()方法用于切换元素的可见状态
###### slideToggle()方法
slideToggle()方法通过高度变化来切换匹配元素的可见性，这个动画效果只调整元素的高度。
###### fadeTo()方法
fadeTo()方法可以把元素的不透明度以渐进方式调整到指定值，这个动画效果只调整元素的不透明度:
```
$(element).click(function(){
    $(this).next().fadeTo(600, 0.2);
});
```
###### fadeToggle()方法
fadeToggle()方法可以通过不透明度变化来切换匹配元素的可见性，这个动画效果只调整元素的不透明度。
##### 动画方法概括
|方法名|说明|
|:-:|:-:|
|hide()和show()|同时修改高度宽度和不透明度|
|fadeIn()和fadeOut()|只改变不透明度|
|slideUp()和slideDown()|只改变高度|
|fadeTo()|只改变不透明度|
|toggle()|代替hide()和show()方法|
|slideToggle()|代替slideUp()和slideDown()方法|
|fadeToggle()|代替fadeIn()和fadeOut()方法|
|animate()|属于自定义动画方法|

animate()方法可以用来代替其他所有方法,代替show():
```
$("p").animate({height:"show",width:"show",opacity:"show"},400);
```
用animate()方法代替fadeIn()方法:
```
$("p").animate({opacity:"show"},400);
```
用animate()方法代替slideDown()方法:
```
$("p").animate({height:"show"},400);
```
用animate()方法代替fadeTo()方法:
```
$("p").animate({opacity:"0.6"},400);
```
animate()方法中，特定样式的属性值可为"show"、"hide"和"toggle"，也可以是自定义数字(值)。
###### 动画队列
一组元素上的动画效果:
* 当在一个animate()方法中应用多个属性时,动画是同时发生的
* 当以链式写法应用动画方法时，动画按顺序发生

多组元素上的动画效果:
* 默认情况下，动画都是同时发生的
* 当以回调形式应用动画方式时，按回调顺序发生

另外在动画方法中，非动画方法会插队，如css()方法。要使非动画方法也按照顺序执行，需要把这些方法写在动画方法的回调函数中。

- - -
## Note for chapter 5
### 表单应用
表单有三个基本组成部分:
- 表单标签:包含处理表单数据所用服务器端程序URL及数据提交到服务器的方法
- 表单域
- 表单按钮:包括提交按钮、复位按钮和一般按钮，用于将数据传送到服务器上或取消传送，还可以控制其他定义了处理脚本的处理工作

#### focus/blur与focusin/focusout
- focus/blur不冒泡，focusin/focusout冒泡
- focus/blur兼容性好，focusin/focusout在除FireFox外的浏览器下都保持良好兼容性
- 可获得焦点的元素:window、链接、表单和设置tabindex属性的元素

#### defaultValue属性
用于获取文本框的初始值，为DOM属性
#### $(selector,this)
等价于`$(this).find(selector)`
#### keyup事件
每次松开按键时触发
#### end()方法
用于结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态
#### 三元运算
```
$(this)[hasSelected?"removeClass":"addClass"]('selected');
//代表这两种情况
$(this)["removeClass"]('selected');
$(this)["addClass"]('selected');
//等价于
$(this).removeClass('selected');
$(this).addClass('selected');
```
#### toggleClass()方法
该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之，实现所谓的切换效果。
- - -
## Note for chapter 6
先跳过此章内容

- - -
## Note for chapter 7
### 表单验证插件Validation
### 表单插件Form
### 模态窗口插件SimpleModal
### 管理Cookie插件Cookie
### jQuery UI插件
jQuery UI主要分为三部分，交互、微件和效果库。
- 交互:包括一些与鼠标交互相关的内容。需要引入核心库ui.core.js。
- 微件:包括一些界面的扩展。部分微件基于交互组建制作，因此也需要引入ui.core.js。
- 效果库:提供丰富的动画效果。效果库由自己的核心库effects.core.js。

#### 拖动排序组件Sortable
### 编写jQuery插件
#### 插件的种类
1. 封装对象方法的插件
将对象方法封装起来，用于对通过选择器获取的jQuery对象进行操作，是最常见的插件。
2. 封装全局函数的插件
将独立函数加到jQuery命名空间之下。
3. 选择器插件
扩充选择器的种类。

#### 插件基本要点
- 所有对象方法都应该附加到jQuery.fn对象上，而所有全局函数应附加到jQuery对象本身上。
- 插件内部中，this指向通过选择器所获取的jQuery对象。
- 可以通过this.each来遍历所有元素。
- 插件应该返回一个jQuery对象，以保证插件的可链式操作。
- 避免在插件内部使用$作为jQuery的别名，而应用完整的jQuery来表示。也可以通过闭包来回避此问题。

#### 插件中的闭包
下列是常见的jQuery插件结构:
```
//为了更好的兼容性，开始前加上分号
;(function($){
    //这里放置代码，可以使用$作为jQuery的别名
})(jQuery);
```
#### jQuery插件机制
jQuery提供了两个用于扩展jQuery功能的方法，即jQuery.fn.extend()和jQuery.extend()方法。前者用于拓展第一种插件类型，后者拓展后两种插件。这两个方法都接受一个参数，类型为Object。<br/>
jQuery.extend()方法除了可以扩展jQuery对象外，还能扩展已有的Object对象:
```
jQuery.extend(target,object1,...[objectN]);
```
jQuery.extend()方法经常用于设置插件方法的一系列默认参数。通过使用此方法，可以方便的用传入参数覆盖默认值。
#### 编写jQuery插件
##### 封装jQuery对象方法的插件
jQuery的选择符可能会匹配一个或多个元素。因此可以在插件内部调用each()方法来遍历匹配元素，然后执行相应方法，this会依次引用每个DOM元素:
```
;(function($){
    $.fn.extend({
        "somePlugin": function(options){
            return this.each(function(){
                //这里放置插件代码
            });
        }
    });
})(jQuery);
```
##### 封装全局函数的插件
这类插件在jQuery命名空间内部添加一个函数。
##### 自定义选择器
jQuery提供了一套方法让用户可以通过制作选择器插件来使用自定义选择器，从而使选择器功能更加完善。jQuery的选择符解析器首先会使用一组正则表达式来解析选择器，然后针对解析出的每个选择符执行一个函数，称为选择器函数。最后根据选择器函数的返回值为true或false来决定是否保留这个元素。
```
$("div:gt(1)")
```
选择器首先会获取所有\<div\>元素，然后隐式遍历这些元素，逐个将这些元素作为参数，连同括号里的"1"等一些参数一起传递给gt对应的选择器函数进行判断。根据函数的返回值来判断是否保留该元素，最后所得结果为符合要求的元素集合。:gt()选择器的源代码:
```
gt:function(a,i,m){
    return i>m[3]-0;
}
```
选择器的函数一共接受三个参数:
```
function(a,i,m){
    //code
}
```
第一个参数a指当前遍历到的DOM元素，第二个参数i指当前遍历到的DOM元素的索引值，第三个参数m是由jQuery正则解析引擎进一步解析后的产物(用match匹配出来的)，是一个数组:

    - m[0]: :gt(1)，表示jQuery进一步要匹配的内容
    - m[1]: 选择器的引导符，匹配例子中的":"，除了冒号还能自定义其他引导符
    - m[2]: gt，确d调用的选择器函数
    - m[3]: 括号内的数字"1"
    - m[4]: 参数若包含另一个选择器函数，则指该选择器函数的带括号的参数。如"div:l(ss(dd))",指(dd)。m[3]指ss(dd)

选择器是jQuery.expr[":"]对象的一部分，所以要利用extend方法进行扩展。

