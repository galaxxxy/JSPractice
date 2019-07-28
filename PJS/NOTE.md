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
#### Null类型
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
* toLocaleString():返回对象的字符串表示。该字符串与执行地区的地区对应。
* toString():返回对象的字符串表示。
* valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()的返回值相同。

### 操作符
##### 一元操作符
###### 递增和递减操作符
执行前置递增和递减操作时，变量的值都是在语句被求值之前改变的；而后置递增和递减操作是包含它们的语句被求值之后才执行的。<br/>
这四个操作符对任何值都适用，应用于不同的值时，递增和递减操作符遵循下列规则:
* 应用于包含有效数字字符的字符串时，先转换为数字值，在执行加减1的操作。
* 应用于不包含有效数字字符的字符串时，将变量的值设置为NaN。
* 应用于布尔值false时，将其转换为0在执行加减1的操作。
* 应用于布尔值true时，将其转换为1在执行加减1的操作。
* 应用于浮点数值时，执行加减1的操作
* 应用于对象时，先调用对象的valueOf()方法。然后对该结果应用上述规则。如果结果是NaN，则调用toString()方法后再应用上述规则。

```
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function(){
        return -1;
    }
};

s1++;//3
s2++;//NaN
b++;//1
f--;//0.10000000000000009(由于浮点舍入错误导致)
o--;//-2
```
###### 一元加和减操作符
对数值应用一元加或减操作符时，加号对数值不会产生任何影响，减号对数值取相反数；对非数值应用时，该操作符会像Number()转型函数一样对这个值执行转换。
```
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function(){
        return -1;
    }
};

s1 = -s1;//-1
s2 = -s2;//-1.1
s3 = -s3;//NaN
b = -b;//0
f = -f;//-1.1
o = -o;//1
```
##### 位操作符
（暂时不做了解 p39-p44）
##### 布尔操作符
###### 逻辑非
逻辑非操作符首先会将操作数转换为布尔值，然后进行求反。遵循下列规则:
* 操作数是对象，返回false。
* 操作数是空字符串，返回true。
* 操作数是非空字符串，返回false。
* 操作数是数值0，返回true。
* 操作数是任意非0数值(包括Infinity)，返回false。
* 操作数是null，返回true。
* 操作数是NaN，返回true。
* 操作数是undefined，返回true。

```
console.log(!false);//true
console.log(!"blue");//false
console.log(!0);//true
console.log(!NaN);//true
console.log(!"");//true
console.log(!12345);//false
```
逻辑非操作符可用于将一个值转换为相应布尔值。通过同时使用两个逻辑非操作符来模拟Boolean()转型函数的行为。
```
console.log(!!"blue");//true
console.log(!!0);//false
console.log(!!NaN);//false
console.log(!!"");//false
console.log(!!12345);//true
```
###### 逻辑与
逻辑与操作不一定返回布尔值，其规则如下:
* 第一个操作数是对象，返回第二个操作数。
* 第二个操作数是对象，则只有第一个操作数求值结果为true时返回该对象。
* 两个操作数都是对象，返回第二个操作数。
* 有一个操作数为null，返回null。
* 有一个操作数为NaN，返回NaN。
* 有一个操作数为undefined，返回undefined。

逻辑与操作属于短路操作，如果第一个操作数能够决定结果，那么就不再对第二个操作数求值。
###### 逻辑或
如果有一个操作数不是布尔值，逻辑或也不一定返回布尔值，其规则如下:
* 第一个操作数是对象，返回第一个操作数。
* 若第一个操作数求值结果为false，返回第二个操作数
* 两个操作数都是对象，返回第一个操作数。
* 两个操作数为null，返回null。
* 两个操作数为NaN，返回NaN。
* 两个操作数为undefined，返回undefined。

逻辑或操作符也是短路操作符。我们可以利用这一行为来避免为变量赋null或undefined值:
```
var object = preferredObject || backupObject;
//若preferredObject的值不是null，那么会被赋给object
//否则会将backupObject的值赋给object
```
##### 乘性操作符
操作数为非数值时，后台会使用Number()转型函数将其转换为数值。
###### 乘法
* 操作数都是数值，执行常规乘法计算。如果乘积超过数值的表示范围，则返回Infinity或-Infinity。
* 一个操作数是NaN，结果是NaN。
* Infinity与0相乘，结果是NaN。
* Infinity与非0数值相乘，结果是Infinity或-Infinity(取决于符号)。
* Infinity与Infinity相乘，结果是Infinity。
* 如果有一个操作数不是数值，则在后台调用Number()转型函数转换成数值后再应用上述规则。

###### 除法
其规则如下:
* 操作数都是数值，执行常规除法计算。如果乘积超过数值的表示范围，则返回Infinity或-Infinity。
* 一个操作数是NaN，结果是NaN。
* Infinity与Infinity相除，结果是NaN。
* 0与0相除，结果是NaN。
* 非0有限数被0除，结果是Infinity或-Infinity(取决于符号)。
* Infinity被任何非0数值除，结果是Infinity或-Infinity(取决于符号)。
* 操作数不是数值，在后台调用Number()转型函数转换为数值后应用上述规则。

###### 取模
其规则如下:
* 操作数都是数值，执行常规除法计算，返回余数。
* 被除数是无穷大值，除数为有限大的数值，结果为NaN。
* 被除数是有限大数值，除数是0，结果为NaN。
* Infinity被Infinity除，结果为NaN。
* 被除数是有限大数值，除数是无穷大数值，结果是被除数。
* 被除数是0，结果为0。
* 有一个操作数不是数值，则在后台调用Number()转型函数转换为数值后应用上述规则。

##### 加性操作符
###### 加法
若两个操作数都为数值，执行常规加法计算，然后依照下列规则返回结果:
* 若操作数为NaN，结果为NaN
* 若为Infinity加Infinity，结果为Infinity
* 若为-Infinity加-Infinity，结果为-Infinity
* 若为Infinity加-Infinity，结果为NaN
* 若为+0加+0，结果为+0
* 若为-0加-0，结果为-0
* 若为+0加-0，结果为+0
* 两个操作数都是字符串，将第二个操作数与第一个操作数拼接起来
* 只有一个操作数是字符串，将另一个操作数转换为字符串然后将其拼接起来
* 若有一个操作数是对象、布尔值或数值，先调用其toString()方法取得相应字符串值，再应用字符串规则。

###### 减法
减法规则如下:
* 两个操作数都是数值，执行常规算术减法操作并返回结果
* 一个操作数为NaN，结果为NaN
* Infinity减Infinity，结果为NaN
* -Infinity减-Infinity，结果为NaN
* Infinity减-Infinity，结果为Infinity
* -Infinity减Infinity，结果-Infinity
* 若为+0减+0，结果为+0
* 若为-0减-0，结果为+0
* 若为+0减-0，结果为—0
* 若有一个操作数是字符串、布尔值、null或undefined，先调用Number()转换为数值然后再遵循上述规则返回结果。若转换结果为NaN，则减法结果为NaN
* 若有一个操作数是对象，则调用valueOf()方法取得该对象数值。若转换结果为NaN，则减法结果为NaN。如果对象没有valueOf()方法，则调用toString()方法并将得到的字符串转换为数值

```
let result1 = 5 - true;//4
let result2 = NaN - 1;//NaN
let result3 = 5 - 3;//2
let result4 = 5 - "";//5
let result5 = 5 - "2";//3
let result6 = 5 - null;//5
```
##### 关系操作符
其规则如下:
* 两个操作数都为数值，执行数值比较
* 两个操作数都是字符串，比较两个字符串对应的字符编码值
* 一个操作数是数值，则将另一个操作数转换为数值，然后执行数值比较
* 一个操作数是对象，则调用该对象的valueOf()方法，用得到的结果按照上述规则进行比较。如果对象没有valueOf()方法则调用toString()方法，用得到的结果按照上述规则进行比较
* 一个操作数是布尔值，先转换为数值，然后执行数值比较

##### 相等操作符
ECMAScript提供两组操作符:相等与不相等(先转换后比较)，全等与不全等(比较而不转换)。
###### 相等与不相等
其转换不同数据类型的规则:
* 一个操作数是布尔值，则比较之前将其转换为数值
* 一个操作数是字符串，另一个操作数是数值，比较之前将字符串转换为数值
* 一个操作数是对象，另一个操作数不是，调用对象的valueOf()方法，用得到的基本类型值按上述规则进行比较

其进行比较遵循的规则:
* null和undefined相等
* 比较相等性之前，不能将null和undefined转换成其他任何值
* 若有操作数为NaN，相等操作数返回false，不等操作符返回true
* 若两个操作数都是对象，则比较他们是不是同一个对象。若两个操作数都指向同一对象，则相等操作符返回true

```
null == undefined;//true
"NaN" == NaN;//false
5 == NaN;//false
NaN == NaN;//false
NaN != NaN;//true
false == 0;//true
true == 1;//true
true == 2;//false
undefined == 0;//false
null == 0;//false
"5" == 5;//true
```
###### 全等与不全等
除了在比较前不转换操作数之外，全等与不全等操作符和相等与不相等操作符没有什么区别。
```
null == undefined;//true
undefined === null;//false
```
##### 条件操作符
`variable = boolean_expression ? true_value : false_value;`
##### 赋值操作符
每个主要算数操作符(以及个别其他操作符)都有对应的复合赋值操作符。如下所示:
* 乘/赋值(*=)
* 除/赋值(/=)
* 模/赋值(%=)
* 加/赋值(+=)
* 减/赋值(-=)
* 左移/赋值(<<=)
* 有符号右移/赋值(>>=)
* 无符号右移/赋值(>>>=)

##### 逗号操作符
使用逗号操作符可以在一条语句中执行多个操作:
```
var num1=1, num2=2, num3=3;
var num = (1,23,4,5,6,0);//num=0
```
### 流控制语句
#### if语句
#### do-while语句
do-while语句是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。在对条件表达式求值之前，循环体中的代码至少会被执行一次。
#### while语句
while语句属于前测试循环语句，在循环体内的代码执行之前，就会对出口条件求值。循环体内的代码有可能永远不会执行。
#### for语句
for语句是一种前测试循环语句，同时具有在执行循环之前初始化变量和定义循环后要执行代码的能力。
#### for-in语句
for-in语句是一种精准的迭代语句，可以用来枚举对象的属性。
`for(property in expression) statement`
ECMAScript对象的属性没有顺序，因此通过循环输出的属性名的顺序是不可预测的。但如果要迭代的对象的变量值为null或undefined，for-in语句会抛出错误。ECMAScript6更正了此行为:不再抛出错误，不执行循环体。在使用for-in循环之前，先检测确认该对象的值不是null或undefined。
#### label语句
用于给代码中添加标签以便将来使用。
`label: statement`
加标签的语句一般都与for语句等循环语句配合使用。
#### break和continue语句
使用break和continue语句都会立即退出循环，但break语句使用后会跳出当前循环，而continue语句会跳出当前循环的一次循环。
#### with语句
with语句的作用是将代码的作用域设置到一个特定的对象中。
`with (expression) statement;`
定义with语句的目的主要是为了简化多次编写同一对象的工作:
```
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with(location) {
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
```
使用with语句关联了location对象，意味着在with语句的代码块内部，每个变量首先被认为是一个局部变量，而如果在该局部环境中找不到该对象的定义，就会查询location对象中是否有同名的属性。如果发现同名属性，则以location对象属性的值作为变量的值。<br/>
严格模式不允许使用with语句，否则视为语法错误。大量使用with语句会导致性能下降，同时给调试代码造成困难。
#### switch语句
属于流控制语句。不同于其他语言的是:可以在switch语句中使用任何数据类型作为case；且可以不为常量，变量甚至表达式都可以作为case的值。
```
switch("hello world") {
    case "hello"+" world":
        alert("Greeting was found.");
        break;
    case "goodbye":
        alert("Closing was found.");
        break;
    default:
        alert("Unexcepted message was found.");
}

var num = 25;
switch(true) { //让每个case都有机会被执行
    case num < 0:
        alert("Less than 0");
        break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10");
        break;
    case num >= 10 && num <= 20:
        alert("Between 10 and 20");
        break;
    default:
        alert("More than 20");
}
```
switch语句在比较值时使用的是全等操作符，因此不会发生类型转换。
### 函数
严格模式对函数有一些限制:
* 不能用eval或arguments来命名函数或参数
* 不能出现两个命名参数同名的情况

#### 参数
ECMAScript中的参数在内部是用一个数组来表示的。在函数体内可以通过arguments对象来访问这个数组。arguments对象与数组类似(并不是Array的实例)，可以使用方括号语法访问他的每一个元素，使用length属性来确定传递进来多少个参数。没有传递值的命名参数将会自动被赋予undefined值。<br/>
在严格模式下，重写arguments的值会导致语法错误。
#### 重载
ECMAScript函数不能像传统意义上那样实现重载。在ECMAScript中定义了两个名字相同的函数，则该名字只属于后定义的函数。通过检查传入函数中参数的类型和数量并作出不同反应可以模仿方法的重载。

---
## Chapter 4
### 基本类型和引用类型的值
ECMAScript变量可能包含两种不同数据类型的值:基本类型值和引用类型值。基本类型值指的是简单的数据段，引用类型值指可能由多个值构成的对象。<br/>
将一个值赋给变量时，解析器必须确定值是基本类型值还是引用类型值。五种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。引用类型的值是保存在内存中的对象。在操作对象时，实际上是在操作对象的引用。
#### 复制变量值
复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。复制引用类型的值，同样会将储存在变量对象中的值放到为新变量分配的空间中。不同的是这个值的副本是一个指针，而这个指针指向存储在堆中的一个对象。复制结束后，两个变量实际上将引用同一个对象，改变其中一个变量，会影响另一个变量。
#### 传递参数
ECMAScript中所有函数的参数都按值传递。在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量(即命名参数)。在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。
```
function setName(obj){
        obj.name = "Nicholas";
        obj = new Object();
        obj.name = "Greg";
    }
    var person = new Object();
    setName(person);
    alert(person.name);//"Nicholas"
    //若person按引用传递，person将会指向name为"Greg"的新对象
```
#### 检测类型
在检测基本数据类型时使用typeof操作符；在检测引用类型的值时，使用instanceof操作符:
```
result = variable instanceof constructor
```
### 执行环境及作用域
执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中。<br/>
全局执行环境是最外围的一个执行环境。根据ECMAScript实现宿主环境不同，表示执行环境的对象也不一样。每个函数也有其执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。在函数执行完毕后，栈将其环境弹出，把控制权返回给之前的执行环境。<br/>
代码在一个环境中执行时，会创建变量对象的一个作用域链。作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端始终是当前执行代码所在环境的变量对象。如果环境是函数，则将其活动对象作为变量对象。活动对象在最开始只包含一个变量，即argument对象(此对象在全局环境中不存在)。作用域链中的下一个变量对象来自包含(外部)环境，再下一个变量对象来自下一个包含环境。这样一直延续至全局执行环境；全局执行环境的变量对象始终是作用域链中的最后一个对象。<br/>
标识符解析是沿着作用域链一级一级的搜索标识符的过程。搜索过程始终从作用域链的前端开始，然后逐级向后回溯，直到找到标识符为止(若找不到，通常会导致错误发生)。<br/>
内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。
#### 延长作用域链
执行环境的类型共有两种:全局和局部(函数),但仍有其他方法来延长作用域链:
* try-catch语句的catch块
* with语句

这两种语句都会在作用域链前端添加一个变量对象。对with语句来说，会将指定对象添加到作用域链中。对catch语句来说，会创建一个新的变量对象，其中包含被抛出的错误对象的声明。
```
function buildUrl() {
    var qs = "?debug=true";
    with(location){
        var url = href + qs;
    }
    return url;
}
```
with语句接收的是location对象，因此其变量对象包含location对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端。
#### 块级作用域
JavaScript没有块级作用域经常会导致理解上的困惑:
```
if(true) {
    var color = blue;
}
alert(color);//"blue"
```
在JavaScript中，if语句中的变量声明会将变量添加到当前的执行环境中。在使用for语句时尤其要牢记这一特性:
```
for(var i = 0; i < 10; i++) {
    doSomething(i);
}
alert(i);//10
```
对于有块级作用域的语言来说，for语句初始化变量的表达式所定义的变量，只会存在于循环的环境之中，而对于JavaScript而言，由for语句创建的变量i即使在for循环执行结束后，依旧会存在于循环外部的执行环境中。
##### 声明变量
使用var声明的变量会自动被添加到最接近的环境中。在函数内部，最接近的环境就是函数的局部环境；在with语句中，最接近的环境是函数环境。如果初始化变量时没有使用var声明，该变量会自动被添加到全局环境。
##### 查询标识符
当在某个环境中，为了读取或写入而引用一个标识符时，必须通过搜索来确定该标识符实际代表什么。搜索过程从作用域链前端开始，向上逐级查询与给定名字匹配的标识符。如果在局部环境中找到了该标识符，搜索过程停止，变量就绪。如果在局部环境中没有找到，则继续沿作用域链向上搜索。搜索过程将一直追溯到全局环境的变量对象。若全局环境中也没有找到，则该变量未声明。
### 垃圾收集
JavaScript具有自动垃圾收集机制，执行环境会负责管理代码执行过程中使用的内存。这种垃圾收集机制的原理是找出不再继续使用的变量并释放其占用的内存。因此垃圾收集器必须跟踪变量，对不再有用的变量打上标记，以备将来收回占用的内存。
#### 标记清除
JavaScript中最常用的垃圾收集方式是标记清除(mark-and-sweep)。垃圾收集器在运行时给储存在内存中的所有变量打上标记，然后去掉环境中的变量以及被环境中变量引用的变量的标记，在此之后任被加上标记的变量将被视为准备删除的变量，因为环境中的变量已经无法访问到这些变量了。
#### 引用计数
另一种不太常见的垃圾收集策略叫引用计数。其含义是跟踪记录每一个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则该值引用次数为1。若同一个值被赋给另一变量，则该值引用次数减1.当引用次数为0，说明没有方法在访问这个值，因此可以回收其占用的内存空间。