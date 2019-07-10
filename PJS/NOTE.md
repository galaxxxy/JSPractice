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
### \<script\>元素
#### defer属性
立即下载，延迟执行<br/>
H5规范要求脚本按照他们出现的先后顺序执行，且这些脚本会先于DOMContentLoaded事件执行；但在现实中，延迟脚本并不一定会按照顺序执行，也不一定在DOMContentLoaded事件触发前执行，因此最好只包含一个延迟脚本。
#### async属性
立即下载，异步执行<br/>
标记为async的脚本并不保证按照指定他们的先后顺序执行，因此要确保其之间互不依赖。指定async属性的目的是不让页面等待脚本的下载和执行，从而异步加载页面其他内容。因此异步脚本最好不要在加载期间修改DOM。<br/>
异步脚本一定会在页面的load事件之前执行，但可能会在DOMContentLoaded事件触发之前或之后执行。

---
## Chapter 3
### 语法
#### 严格模式
严格模式为JavaScript定义了一种不同的解析与执行模式。严格模式下，ECMAScript3中一些不确定行为将得到处理，且对某些不安全的操作也会抛出错误。通过包含一个编译指示(pragma)来启用严格模式。
```
"use strict";//在整个脚本中启用严格模式
function doSomething(){
    "use strict";
    //函数体
}
```
#### 变量
用var操作符定义的变量将成为定义该变量的作用域中的局部变量；可以省略var操作符来创建一个全局变量，但不建议这么做(可维护性差)。
### 数据类型
ECMASCript中有5中简单数据类型(基本数据类型)：Undefined、Null、Boolean、Number和String。和一种复杂数据类型Object。
#### Undefined类型
字面值undefined用于比较空对象指针与未经初始化的变量。<br/>
包含undefined值的变量与尚未定义的变量是不一样的：
```
var message = undefined;
//age未声明
alert(message);//"undefined"
alert(age);//产生错误
```
对未初始化和未声明的变量执行typeof操作符都会返回undefined值。若做到显式地初始化变量，当typeof操作符返回"undefined"值时，我们就可以知道被检测的变量还未声明，而不是未初始化。
#### NUll类型
null值表示一个空指针对象，因此用typeof操作符检测null值会返回"object"。<br/>
如果定义的变量在将来用于保存对象，那么将该对象初始化为null。直接检查null值就可以知道相应的变量是否已经保存了一个对象的引用。
```
if(object != null){
    //对object对象执行操作
}
```
undefined值派生自null值，因此相等性测试为true:
```
alert(undefined == null)//true
```
#### Boolean类型
##### 转型函数Boolean()
|数据类型|转换为true的值|转换为false的值|
|:-:|:-:|:-:|
|Boolean|true|false|
|String|任何非空字符串|""（空字符串）|
|Number|非零数字值(包括无穷大)|0和NaN|
|Object|任何对象|null|
|Undefined|N/A(not applicable)|undefined|
#### Number类型
八进制字面量的第一位必须是0，十六进制字面量的前两位必须是0x。八进制字面量在严格模式下是无效的，会导致支持的JS引擎抛出错误。在进行算术计算时，所有以八进制和十六进制表示的数值最终将转换成十进制数值。
##### NaN
非数值(Not a Number)是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况。<br/>
任何涉及NaN的操作(例如NaN/10)都会返回NaN，且NaN与任何值都不相等，包括本身。<br/>
##### 数值转换
有三个函数可以把非数值转换为数值:Number()、parseInt()和parseFloat()。<br/>
Number()函数的转换规则:
```
//如果Boolean值，true和false分别转换为1和0
Number(true);//1
//如果null值，返回0
Number(null);//0
//如果是undefined，返回NaN
Number(undefined);//NaN
//如果字符串只包含数字(包括前面带正负号的情况)，则将其转换成十进制数值(前导0会被省略)。
Number("0000011");//11
//如果字符串包含有效浮点格式，则转换成相应浮点数值(省略前导0)。
Number("-000.002");//-0.002
//如果字符串包含有效的十六进制格式，则转换为相同大小的十进制数值。
Number("0x2f");//47
//如果为空字符串，返回0。
Number("");//0
//如果不包含其他情况，返回NaN
Number("hello");//NaN
//如果是对象，调用对象的valueOf()方法，然后依照规则转换返回后的值。
//若转换后的结果为NaN，则调用对象的toString()方法，然后按照规则转换返回后的值。
```
parseInt()函数转换字符串时会忽略字符串前面的空格，直到找到第一个非空格字符。若第一个字符不是数字字符或负号，则返回NaN；若第一个字符是数字字符，会继续解析直到解析完所有后续字符或遇到一个非数字字符。
parseInt()函数的转换规则:
```
parseInt("123nlue");//123
parseInt("");//NaN
parseInt("0xA");//10
parseInt("33.2");//33
//ECMAScript 3 JS引擎中，"070"被当成八进制字面量，因此转换后的值为56
//ECMAScript 5 JS引擎中，parseInt()不再具有解析八进制值的能力，因此前导0会被认为无效，因此转换后的值为70
parseInt("070");//56
```
为了消除parseInt()函数使用时可能产生的疑惑，可以为其提供第二个参数:转换时使用的基数:
```
parseInt("0xAF",16);//175
//若指定了16为第二个参数，字符串可以不带前面的"0x"
parseInt("AF",16);//175
parseInt("AF");//NaN

parseInt("10",2);//2
parseInt("10",8);//8
parseInt("10",10);//10
parseInt("10",16);//16
```
parseFloat()函数允许第一个小数点有效，且始终会忽略前导0。如果字符串包含的是一个可以解析为整数的数(无小数点或小数点后全是0)，则该函数会返回整数。
```
parseFloat("1234ffdf");//1234(整数)
parseFloat("0xA");//0
parseFloat("22.3);//22.3
parseFloat("22.3.2);//22.3
parseFloat("022.02);//22.02
parseFloat("3.12e7");//31200000
```
#### String类型
字符串是不可变的，一旦创建，它们的值就不能改变。要改变某变量保存的字符串，首先要销毁原字符串，再用另一个包含新值的字符串填充该变量。
##### 转换为字符串
要把某个值转换成字符串，可以使用两种方法或者用加号操作符把它和一个字符串("")加在一起。
###### toString()函数
数值、布尔值、对象和字符串值都有toString()方法，但null和undefined值没有这个方法。toString()函数可以接收一个参数:输出数值的基数:
```
let num = 10;
num.toString();//"10"
num.toString(2);//"1010"
num.toString(8);//"12"
num.toString(10);//"10"
num.toString(16);//"a"
```
###### 转型函数String()
此函数可以将任何类型的值转换为字符串，其转换规则为:
```
//如果值有toString()方法，则调用该方法(无参数)并返回相应结果
String(10);//"10"
String(true);//"true"
//如果值是null,则返回"null"
String(null);//"null"
//如果值是undefined,则返回"undefined"
String(undefined);//"undefined"
```
#### Object类型
Object类型所具有的任何属性和方法也同样存在于更具体的对象中。Object的每个实例都具有下列属性和方法:
* constructor:保存用于创建该对象的函数。
* hasOwnProperty(propertyName):用于检查给定属性在该对象实例(而不是该实例的原型)中是否存在。
* isPrototypeOf(object):用于检查调用对象是否在另一个对象的原型链上。
* propertyIsEnumerable(propertyName):用于检查给定属性是否能够使用for-in语句来枚举。
* toLocaleString():
* constructor:
* constructor:
### 流控制语句
### 函数