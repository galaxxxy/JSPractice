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
