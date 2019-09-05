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
另一种不太常见的垃圾收集策略叫引用计数。其含义是跟踪记录每一个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则该值引用次数为1。若同一个值被赋给另一变量，则该值引用次数减1.当引用次数为0，说明没有方法在访问这个值，因此可以回收其占用的内存空间。<br/>
Netscape Navigator 3.0 是最早使用引用计数策略的浏览器，但是很快他就遇到了一个问题:循环引用。循环引用指对象A包含指向对象B的引用，对象B也包含指向对象A的引用:
```
function problem(){
    var objA = new Object();
    var objB = new Object();

    objA.someOtherObject = objB;
    objB.anotherObject = objA;
}
```
objA与objB通过各自的属性相互引用，他们的引用次数永远不会为0.假设此函数被反复调用，会导致大量内存得不到回收。因此Netscape Navigator 4.0中放弃了引用计数方式，采用标记清除来实现其垃圾收集机制。<br/>
IE中BOM和DOM中的对象使用C++以COM(Component Object Model,组建对象模型)对象的形式实现，而COM对象的垃圾回收机制采用引用计数策略，因此只要在IE中涉及COM对象，就会存在循环引用问题:
```
var element = document.getElementById("some_element");
var myObject = new Object();
myObject.element = element;
element.someObject = myObject;
```
DOM元素(element)与原生JavaScript对象(myObject)之间创建了循环引用，即使将DOM元素从页面中移除，它也不会被回收。为了避免此问题，在不使用它们时手动断开其链接:
```
myObject.element = null;
element.someObject = null;
```
IE9把BOM和DOM对象转换成了真正的JavaScript对象，消除了常见的内存泄漏现象。
#### 性能问题
垃圾收集器是周期运行的，确定垃圾收集的时间间隔是一个非常重要的问题。IE的垃圾收集器是根据内存分配量运行的。当一个脚本在其生命周期中一直保有不少于临界值的变量时，会导致垃圾收集器频繁运行，引起严重性能问题。因此IE7改变了工作方式:触发垃圾收集的变量分配、字面量或数组元素的临界值被调整为动态修正。
#### 管理内存
优化内存占用的最佳方式就是解除引用:一旦数据不再有用通过将其值设置为null来释放引用。这一做法适用于大多数全局变量和全局对象的属性，局部变量会在离开执行环境时自动被解除引用:
```
function createPerson(name){
    var localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}
var globalPerson = createPerson("Nicholas");
globalPerson = null;
```

---
## Chapter 5
### 引用类型
#### Object类型
Object是ECMAScript中使用最多的一个类型，对于应用程序中存储和传输数据而言，是非常理想的选择。创建Object实例的方式有两种:
```
// new操作符后跟Object构造函数[一般不使用]
var person = new Object();
person.name = "Nicholas";
person.age = 29;
// 使用对象字面量表示法
var person = {
            name: "Nicholas",
            age: 29,
        };
```
访问对象属性可以使用点表示法和方括号表示法。使用方括号语法时，应该将要访问的属性以字符串的的形式放在方括号中:
```
//一般使用点表示法，除非必须要用变量访问属性
alert(person["name"]);
alert(person.name);
//方括号语法的主要优点是可以通过变量来访问属性
var propertyName = "name";
alert(person[propertyName]);
//属性名中包含会导致语法错误的字符或属性名使用保留字或关键字，也应使用方括号语法
person["first name"] = "Nicholas";
```
#### Array类型
ECMAScript数组的每一项可以保存任何类型的数据，且数组大小可以动态调整。创建数组的基本方式有两种:
```
//使用Array构造函数
var colors = new Array(3);
var names = new Array("red","blue","green");
//数组字面量表示法
//使用数组字面量表示法时，不会调用Array构造函数
var colors = ["red","blue","green"];//创建包含三个字符串的数组
var names = [];//创建空数组
var value = [1,2,];//不要这样！会创建一个含2或3项的数组
var options = [,,,,,];//不要这样！会创建一个含5或6项的数组
```
使用方括号并提供相应值基于0的数字索引来读取和设置数组的值。如果设置某个值的索引超过了数组的现有项数，则数组长度会被增加到该索引值加1。
##### 检测数组
确定某个对象是不是数组，可以使用instanceOf操作符:
```
if(value instanceOf Array){
    //对数组执行某些操作
}
```
instanceOf操作符的问题在于它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数。如果从一个框架向另一个框架传入一个数组，那么传入的数组与第二个框架中原生创建的数组分别具有不同的构造函数。
在ECMAScript5中新增了`Array.isArray()`方法来确定某个值是否为数组，而不管他是在哪个全局执行环境中创建的:
```
if(Array.isArray(value)){
    //对数组执行某些操作
}
```
##### 转换方法
- toString()方法会返回由数组中每个值的字符串拼接而成的一个以逗号分隔的字符串。
- valueOf()返回的还是数组。
- toLocaleString()方法调用的是每项的toLocaleString()方法。
- join()方法可以使用不同分隔来构建字符串。

若数组中某项值为null或undefined，则在上述四个方法返回的结果中以空字符串表示。
##### 栈方法
ECMAScript为数组专门提供了push()和pop()方法，以实现类似栈的行为(LIFO)。<br/>
- push()方法可以接收任意数量的参数，把它们逐个添加至数组末尾，并返回修改后数组长度。
- pop()方法则从数组末尾移除最后一项，减少数组的length值并返回移除的项。

##### 队列方法
结合使用shift()和push()方法，可以像队列(FIFO)一样使用数组。<br/>
- shift()方法能够移除数组中的第一项，返回该项并将数组长度减1。
- ECMAScript还提供了unshift()方法，它能在数组前端添加任意各项并返回新数组的长度。

结合使用unshift()和pop()方法，可以从相反方向模拟队列，即数组前端添加项，从数组末端移除项。
##### 重排序方法
数组中存在两个重排序方法:reverse()和sort()。<br/>
- reverse()方法会反转数组项的顺序。sort()方法默认按升序排列数组项。
- sort()为了实现排序会调用每个数组项的toString()转型方法，然后比较得到的字符串。sort()方法可以接收一个比较函数作为参数，比较函数接收两个参数，若第一个参数应该位于第二个之前则返回一个负数；若两个参数相等，则返回0；若第一个参数应位于第二个之后则返回一个正数。

##### 操作方法
ECMAScript为操作已经包含在数组中的项提供了很多方法。<br/>
- concat()方法可以基于当前数组中的所有项创建一个新数组，即创建当前数组的一个副本后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
- slice()方法可以基于当前数组中的一个或多个项创建一个新数组。slice()方法接收一或两个参数(负数表示从尾端开始数)，即返回项的起始和结束位置(返回数组不包含结束位置)。
- splice()方法的主要用途是向数组的中部插入项，使用方式有如下三种:
    - 删除:删除任意数量的项，只需指定两个参数:要删除的第一项的位置和要删除的项数
    - 插入:向指定位置插入任意数量的项，只需指定三个参数:起始位置、0(要删除的项数)和要插入的项。
    - 替换:向指定位置插入任意数量的项，同时删除任意数量的项，只需指定三个参数:起始位置、要删除的项数和要插入的项。
    - splice()始终返回一个包含从原始数组中被删除项的数组

##### 位置方法
- indexOf()从查找起点开始向后查找指定项的索引
- lastIndexOf()从查找起点开始向前查找指定项的索引
- 两个方法都接受两个参数:要查找的项和查找起点位置的索引(可选)，且比较时使用全等操作符("===")

##### 迭代方法
ECMAScript5定义了5个迭代方法，每个方法接收两个参数:在每一项上运行的函数和运行该函数的作用域对象(可选)--影响this的值。传入这些方法中的函数接收三个参数:数组项的值、该项在数组的位置和数组对象本身。
- every():对每一项都运行给定函数，若该函数对每一项都返回true，则返回true
- filter():对每一项都运行给定函数，返回该函数会返回true的项组成的数组
- forEach():对每一项都运行给定函数，无返回值
- map():对每一项都运行给定函数，返回每次函数调用结果组成的数组
- some():对每一项都运行给定函数，若该函数对任何一项返回true，则返回true

##### 归并方法
ECMAScript5定义了2个归并方法。两个方法都会迭代数组中的所有项，然后构建一个最终返回的值。两个方法都接收两个参数:在每项上调用的函数和作为归并基础的初始值(可选)。每项上调用的函数接收四个参数:前一个值、当前值、项的索引和数组对象。
- reduce():从数组第一项开始，逐个遍历到最后
- reduceRight():从数组最后一项开始，向前遍历到第一项

#### Date类型
创建一个日期对象使用new操作符和Date构造函数即可。在不传递参数的情况下，新创建的对象自动获得当前日期和实现。如果想根据特定的日期和时间创建日期对象，必须传入表示该日期的毫秒数(即从UTC时间1970年1月1日午夜起至该日期止经过的毫秒数)。为简化此过程，ECMAScript提供了两个方法:
- Date.parse():接收一个表示日期的字符串参数，然后根据这个字符串返回相应日期毫秒数。如果传入的字符串不能表示日期，则返回NaN。
- Date.UTC():参数分别为年份、基于0的月份、日期(1-31)、小时数(0-23)、分钟、秒及毫秒数。只有年和月是必须的，若未提供天数，则默认为1；若省略其他参数，则默认为0。

ECMAScript5添加了Date.now()方法，返回表示调用这个方法时的日期和时间的毫秒数。
##### 继承的方法
Date()类型重写了toLocaleString()、toString()和valueOf()方法:
- toLocaleString():会按照与浏览器设置的地区相适应的格式返回日期和时间。
- toString():返回带有时区信息的日期和时间
- valueOf():返回日期的毫秒表示，可以用于比较日期

##### 日期格式化方法
Date类型有专门用于将日期格式化为字符串的方法:
- toDateString():特定于实现的格式显示星期几、月、日和年
- toTimeString():特定于实现的格式显示时、分、秒和时区
- toLocaleDateString():特定于地区的格式显示星期几、月、日和年
- toLocaleTimeString():特定于实现的格式显示时、分、秒
- toUTCString():特定于实现的格式完整的UTC日期

#### RegExp类型
ECMAScript通过RegExp类型来支持正则表达式:
```
//以字面量形式创建正则表达式
var expression = / pattern / flags ;
```
其中的模式(pattern)部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找及反向引用。每个正则表达式都可带有一个或多个标志(flags)，用以标明正则表达式的行为。正则表达式的匹配模式支持下列三个标志:
- g:表示全局(global)模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止
- i:表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写
- m:表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

模式中的所有元字符都必须转义:
```
( [ { \ ^ $ | ) ? * + . ] }
```
另外可以使用RegExp构造函数来创建正则表达式，它接受两个参数:一是要匹配的字符串模式，另一个是可选的标志字符串。由于构造函数的模式参数是字符参数，所以在某些情况下要对字符进行双重转义(元字符):
|字面量模式|等价的字符串|
|:-:|:-:|
|/\[bc\]at/|"\\\\[bc\\\\]at"|
|/\.at/|"//.at"|
|/name\/age/|"name\\/age"|
|/\d.\{1,2}/|"\\d.\\{1,2}"|
|/\w\\hello\\123/|"\\w\\\\hello\\\\123"|

使用正则表达式字面量和使用RegExp构造函数创建的正则表达式不一样。在ECMAScript3中，正则表达式字面量始终会共享同一个RegExp实例，而使用构造函数创建的每一个新RegExp实例都是一个新实例。在ECMAScript5中，使用正则表达式字面量和使用RegExp构造函数每次都会创建新的实例。
##### RegExp实例属性
RegExp的每个实例都有下列属性，通过这些属性可以取得有关模式的各种信息:
- global:布尔值，表示是否设置g标志
- ignoreCase:布尔值，表示是否设置i标志
- multiline:布尔值，表示是否设置m标志
- lastIndex:整数，表示开始搜索下一个匹配项的字符位置(从0算起)
- source:正则表达式的字符串表示，按照字面量形式返回

##### RegExp实例方法
- exec():接收要应用模式的字符串，返回包含第一个匹配项信息的数组或null(无匹配项)。返回的数组包含两个额外属性:index和input，分别表示匹配项在字符串中的位置和应用正则表达式的字符串
- test():接收字符串，验证目标字符串与某个模式是否匹配，返回true或false。

##### RegExp构造函数属性
RegExp构造函数包含的属性适用于作用域中所有正则表达式，且基于所执行的最近一次正则表达式操作而变化。这些属性分别有一个长属性名和一个短属性名(Opera不支持短属性名):
|长属性名|短属性名|说明|
|:-:|:-:|:-:|
|input|$_|最近一次要匹配的字符串|
|lastMatch|$&|最近一次的匹配项|
|lastParen|$+|最近一次匹配的捕获组|
|leftContext|$`|input字符串中lastMatch之前的文本|
|multiline|$*|布尔值，表示是否所有表达式都是用多行模式|
|rightContext|$'|input字符串中lastMatch之后的文本|

使用这些属性可以从exec()或test()执行的操作中提取出更具体的信息。除此之外还有九个用于存储捕获组的构造函数属性($1~$9)。
#### Function类型
每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。由于函数是对象，函数名实际上是一个指向函数对象的指针，不会与某个函数绑定。
##### 没有重载
由于函数名类似于指针，因此ECMAScript中没有函数重载的概念。
##### 函数声明与函数表达式
解析器在向执行环境中加载数据时，会率先读取函数声明，使其在执行任何代码之前可以访问，而表达式则必须等到解析器执行到它所在的代码行才会被解释执行。
```
alert(sum(10,10));
function sum(num1,num2){
    return num1+num2;
}
```
上述代码开始执行之前，解析器就已经通过一个名为函数声明提升(function declaration hoisting)的过程，读取并将函数声明添加到执行环境中。JavaScript引擎在第一遍会声明函数并将它们放到源代码树的顶部，因此即使声明函数的代码在调用它的代码后面，JavaScript引擎也能把函数声明提升到顶部。若将函数声明改为等价的函数表达式，就会在执行期间导致错误:
```
alert(sum(10,10));
var sum = function(num1,num2){
    return num1+num2;
}
```
产生错误的原因在于函数位于一个初始化语句中，而不是一个函数声明。在执行到函数所在的语句之前，变量sum中不会存有对函数的引用；且第一行代码就会导致"unexpected identifier"(意外标识符)错误，实际上不会被执行。<br/>
除了什么时候可以通过变量访问函数这一区别之外，函数声明与函数表达式的语法是等价的。
##### 作为值的函数
因为ECMAScript中的函数名本身就是变量，所以函数可以作为值来使用，不仅可以像传递参数一样把一个函数传递给另一个函数，还可以将一个函数作为另一个函数的结果返回。要访问函数的指针而不执行函数的话，必须去掉函数名后面的圆括号。
##### 函数内部属性
在函数内部，有两个特殊的对象:argument和this。<br/>
argument是一个类数组对象，包含传入函数的所有参数。此外此对象还有一个名为callee的属性，该属性是一个指针，指向拥有这个argument对象的函数。
```
function factorial(num){
    if(num <= 1){
        return 1;
    }else{
        //return num * factorial(num-1);
        return num * arguments.callee(num-1);
    }
}

var trueFactorial = factorial;
factorial = function(){
    return 0;
};
alert(trueFactorial(5));
alert(factorial(5));
```
上述代码所示，在函数有名字且名字不变的情况下，这样定义没有问题，但问题是这个函数的执行与函数名factorial紧紧耦合在一起。为了消除这种紧密耦合的现象，可以使用argument.callee。<br/>
函数内部的另一个特殊对象是this，this值为函数执行的环境对象。<br/>
ECMAScript5也规范了另一函数对象的属性:caller。这个属b保存着调用当前函数的函数的引用，若在全局作用域中调用当前函数，它的值为null。<br/>
##### 函数属性和方法
每个函数都包含两个属性:length和prototype。length属性表示函数希望接收的命名参数的个数。prototype属性用于保存所有引用类型的所有实例方法。在ECMAScript5中，prototype属性不可枚举，因此使用for-in无法发现。<br/>
每个函数都包含了两个非继承而来的方法:apply()和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。apply()对象接收两个参数:一个是在其中运行函数的作用域，另一个是参数数组(可以是Array实例或arguments对象)。<br/>
call()和apply()的作用相同，它们的区别在于接收参数的方式不同。与apply()不同的是，使用call()方法时，传递给函数的参数必须逐个列举出来。这两个函数的强大之处是能够扩充函数赖以运行的作用域,这样对象无需与方法有任何耦合关系。<br/>
ECMAScript5定义了方法bind()，此方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。
#### 基本包装类型
为了便于操作基本类型值，ECMAScript提供了三个特殊的引用类型。引用类型和基本包装类型的主要区别就是对象的生存期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，只存在于一行代码的执行瞬间，然后立即被销毁，因此不能在运行时为基本类型值添加属性和方法。<br/>
使用new调用基本包装类型的构造函数与直接调用同名转型函数不同:
```
var value = "25";
var number = Number(value);//转型函数
alert(typeof number);//"number"

var obj = new Number(value);//构造函数
alert(typeof obj);//"object"
```
##### Boolean类型
基本类型与引用类型的布尔值有两个区别:
- typeof操作符对基本类型返回"boolean"，对引用类型返回"object"
- Boolean对象为Boolean类型的实例，所以使用instanceof操作符测试Boolean对象会返回true，测试基本类型的布尔值返回false

建议永远不要使用Boolean对象。
##### Number类型
Number类型重写了valueOf()、toLocaleString()和toString()方法。重写后的valueOf()方法返回对象表示的基本类型的数值，另外两个方法则返回字符串形式的数值。toFixed()方法按照指定小数位返回数值的字符串表示:
```
var num = 10;
alert(num.toFixed(2));//"10.00"
```
若数值本身包含的小数位比指定的多，那么接近指定的最大小数位的值会舍入。这一特性使得toFixed()方法适合处理货币值(不同浏览器舍入规则不同):
```
var num = 10.005;
alert(num.toFixed(2));//"10.00"
```
另外可用toExponential()方法返回以指数表示法表示的数值的字符串形式，传入的参数指定输出结果中小数的位数:
```
num = 10;
alert(num.toExponential(1));//"1.0e+1"
```
若想得到表示某个数值的最合适的格式，使用toPrecision()方法。此方法会返回固定大小(fixed)格式或指数(exponential)格式，接收一个参数，表示数值的所有数字的位数(不包括指数部分):
```
num = 99;
alert(num.toPrecision(1));//"1e+2"
alert(num.toPrecision(2));//"99"
alert(num.toPrecision(3));//"99.0"
```
基本类型与引用类型的数值有两个区别:
- typeof操作符对基本类型返回"number"，对引用类型返回"object"
- Number对象为Number类型的实例，所以使用instanceof操作符测试Number对象会返回true，测试基本类型的数值返回false

不建议直接实例化Number类型。
##### String类型
String类型提供了很多方法，用于辅助完成对ECMAScript中的字符串的解析和操作:
1. 字符方法
两个用于访问字符串中特定字符的方法是:charAt()和charCodeAt()。这两个方法都接收一个参数，即基于0的字符位置。其中charAt()方法以单字符字符串的形式返回给定位置的那个字符:
```
var stringValue = "hello world";
alert(stringValue.charAt(1));//"e"
```
若想得到的不是字符而是字符编码，则应使用charCodeAt():
```
var stringValue = "hello world";
alert(stringValue.charCodeAt(1));//"101"
```
ECMAScript5定义了另一个访问个别字符的方法。在支持此方法的浏览器中，可以使用方括号加数字索引来访问字符串中的特定字符(不支持则返回undefined):
```
var stringValue = "hello world";
alert(stringValue[1]);//"e"
```

2. 字符串操作方法
concat()方法用于将一或多个字符串拼接起来，返回拼接所得的新字符串:
```
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);
alert(stringValue);
```
concat()方法可以接受任意个参数，但实践中更多使用加号操作符(+)。<br/>
ECMAScript提供了三个基于子字符串创建新字符串的方法:slice()、substr()和substring()。第一个参数指定子字符串的开始位置，第二个参数(可选)指定子字符串的结束位置。slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。substr()的第二个参数指定的是返回字符的个数。若不传递第二个参数，则默认传入字符串的长度。这三个方法也不改变字符串本身的值。<br/>
若传入的参数是负值，slice()方法会将传入的负值与字符串长度相加，substr()方法将负的第一个参数加上字符串长度，将负的第二个参数转换为0，substring()方法会把所有负值参数转换为0。

3. 字符串位置方法
indexOf()和lastIndexOf()可以从字符串中查找子字符串。这两个方法都从一个字符串中搜索给定的子字符串，然后返回子字符串的位置(找不到返回-1)。这两个方法区别在于indexOf()从字符串开头向后搜索，而lastIndexOf()从字符串末尾向前搜索。可以传入第二个参数，表示从该位置开始搜索。

4. trim()方法
此方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。

5. 大小写转换方法
涉及大小写转换的方法可以分为两组:toLowerCase()、toUpperCase()和toLocaleLowerCase()、toLocaleUpperCase()，后者为针对特定地区的实现。一般在不知道自己的代码在哪种语言环境中运行时，建议采用针对地区的方法。

6. 字符串的模式匹配方法
match()本质上与调用RegExp的exec()方法相同。match()只接受一个参数，接收正则表达式或RegExp对象。<br/>
search()方法接收正则表达式或RegExp对象。search()方法返回字符串中第一个匹配项的索引(没发现返回-1)，且从字符串开头向后查找。<br/>
replace()方法接收两个参数:第一个参数是一个RegExp对象或一个字符串(不会被转换成正则表达式)，第二个参数是一个字符串或一个函数。若第一个参数是字符串，那么只会替换第一z子字符串。想要替换所有子字符串，唯一方法是提供一个正则表达式，且指定全局g标志。若第二个参数是字符串，那么可以使用一些特殊的字符序列来将正则表达式得到的值插入到结果字符串中:

|字符序列|替换文本|
|:-:|:-:|
|$$|$|
|$&|匹配整个模式的子字符串。与RegExp.lastMatch值相同|
|$'|匹配子字符串之前的子字符串。与RegExp.leftContext值相同|
|$`|匹配子字符串之后的子字符串。与RegExp.rightContext值相同|
|$n|匹配第n个捕获组的子字符串。|
|$nn|匹配第nn个捕获组的子字符串。|

通过这些特殊的字符序列，可以使用最近一次的匹配结果中的内容:
```
var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g,"word($1)");
alert(result);//word(cat), word(bat), word(sat), word(fat)
```
replace()方法的第二个参数也可以是一个函数。在只有一个匹配项(即与模式匹配的字符串)的情况下，会向这个函数传递三个参数:模式匹配项、模式匹配项在字符串中的位置和原始字符串。在正则表达式中定义了多个捕获组的情况下，传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项等，但最后两个参数依然是模式匹配项在字符串中的位置和原始字符串:
```
function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match, posoriginalText){
        switch(match){
            case "<":
                    return "&lt;";
            case ">":
                    return "&gt;";
            case "&":
                    return "&amp;";
            case "\"":
                    return "&quot;";
        }
    });
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
```
split()方法可以基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。分隔符可以是字符串，也可以是一个RegExp对象(这个方法不会将字符串看成正则表达式)。split()方法可以接受可选的的第二个参数，用于指定数组大小，以确保返回的数组不会超过既定大小:
```
var colorText = "red,blue,green,yellow";

var colors1 = colorText.split(",");
//["red","blue","green","yellow"]
var colors2 = colorText.split(",",2);
//["red","blue"]
var colors3 = colorText.split(/[^\,]+/);
//["", ",", ",", ""]
```

7. localeCompare()方法
这个方法比较两个字符串并返回下列值中的一个:
- 如果字符串在字母表中应该排在字符串参数之前则返回一个负数(大多数情况下是-1)
- 如果字符串等于字符串参数，返回0
- 如果字符串在字母表中应该排在字符串参数之后则返回一个负数(大多数情况下是1)

```
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));//1
alert(stringValue.localeCompare("yellow"));//0
alert(stringValue.localeCompare("zoo"));//-1

function determineOrder(value) {
    var result = stringValue.localeCompare(value);
    if(result < 0){
        alert("The string 'yellow' comes before thstring'"+value+"'.");
    }else if(result > 0){
        alert("The string 'yellow' comes after thstring'"+value+"'.");
    }else{
        alert("The string 'yellow' is equal to thstring'"+value+"'.");
    }
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
```

8. fromCharCode()方法
String构造函数还有一个静态方法fromCharCode()，用于接收一或多个字符编码，然后将其转换为一个字符串。本质上看，与实例方法charCodeAt()执行相反的操作。

9. HTML方法
尽量不使用这些方法，因为它们创建的标记通常无法表达语义:

|方法|输出结果|
|:-:|:-:|
|anchor(name)|<a name="name"\>string</a\>|
|big()|<big\>string</big\>|
|bold()|<b\>string</b\>|
|fixed()|<tt\>string</tt\>|
|fontcolor(color)|<font color="color"\>string</font\>|
|fontsize(size)|<font size="size"\>string</font\>|
|italics()|<i\>string</i\>|
|link(url)|<a href="url"\>string</a\>|
|small|<small\>string</small\>|
|strike()|<strike\>string</strike\>|
|sub()|<sub\>string</sub\>|
|sup()|<sup\>string</sup\>|

#### 单体内置对象
单体内置对象是由ECMAScript实现提供的、不依赖于宿主环境的对象，且这些对象在ECMAScript程序执行之前就存在了，如Object、Array和String。
##### Global对象
事实上，没有全局变量或全局函数；所有在全局作用域中定义的属性和函数，都是Global对象的属性。除isNaN()、isFinite()等方法之外，Global对象还包含其他方法:
1. URL编码方法
Global对象的encodeURI()和encodeURIComponent()方法可以对URI(通用资源标识符)进行编码，以便发送给浏览器。这两个URI编码方法可以对URI进行编码，使用特殊UTF-8编码替换所有无效的字符。<br/>
encodeURI()主要用于整个URI，而encodeURIComponent()主要用于对URI的某一段进行编码。encodeURI()不会对本身属于URI的特殊字符进行编码(冒号、正斜杠等)；encodeURIComponent()会对它发现的任何非标准字符进行编码:
```
var uri = "http://www.wrox.com/illegal value.htm#start";
//http://www.wrox.com/illegal%20value.htm#start
alert(encodeURI(uri));
//http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start
alert(encodeURIComponent(uri));
```
与两个方法对应的方法分别是decodeURI()和decodeURIComponent()。

2. eval()方法
eval()方法像是一个完整的ECMAScript解析器，只接受一个参数，即要执行的ECMAScript字符串。 通过eval()执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链，意味着通过eval()执行的代码可以引用在包含环境中定义的变量。<br/>
在eval()中创建的任何变量和函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建。严格模式下，在外部访问不到eval()中创建的任何变量或函数，严格模式下，为eval赋值也会导致错误。<br/>
要谨慎使用eval()方法，可能会引起代码注入。

3. Global对象的属性

|属性|说明|属性|说明|
|:-:|:-:|:-:|:-:|
|undefined|特殊值undefined|Date|构造函数Date|
|NaN|特殊值NaN|RegExp|构造函数RegExp|
|Infinity|特殊值Infinity|Error|构造函数Error|
|Object|构造函数Object|EvalError|构造函数EvalError|
|Array|构造函数Array|RangeError|构造函数RangeError|
|Function|构造函数Function|ReferenceError|构造函数ReferenceError|
|Boolean|构造函数Boolean|SyntaxError|构造函数SyntaxError|
|String|构造函数String|TypeError|构造函数TypeError|
|Number|构造函数Number|URIError|构造函数URIError|

4. window对象
ECMAScript没有指出如何直接访问Global对象，Web浏览器将这个全局对象作为window对象的一部分加以实现的。

##### Math对象
Math对象用于保存数学公式和信息。
1. Math对象的属性

|属性|说明|
|:-:|:-:|
|Math.E|自然对数的底数，即常量e的值|
|Math.LN10|10的自然对数|
|Math.LN2|2的自然对数|
|Math.LOG2E|以2为底e的对数|
|Math.LOG10E|以2为底e的对数|
|Math.PI|π的值|
|Math.SQRT1_2|1/2的平方根(即2的平方根的倒数)|
|Math.SQRT2|2的平方根|

2. min()和max()方法
min()和max()方法用于确定一组数值中的最大值和最小值，接收任意多个数值参数。<br/>
要找到数组中的最大或最小值，可以使用apply方法:
```
var values = [3, 54, 32, 16];
var max = Math.max.apply(Math, values);
alert(max);
```
这个技巧的关键是把Math对象作为apply()的第一个参数，从而正确设置this值。

3. 舍入方法
- Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数。
- Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数。
- Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数。

4. random()方法
Math.random()方法返回大于等于0小于1的一个随机数。可以套用以下公式从某个整数范围内随机选择一个值:
```
值 = Math.floor(Math.random()*可能值的总数+第一个可能的值)
```

5. 其他方法

|方法|说明|方法|说明|
|:-:|:-:|:-:|:-:|
|Math.abs(num)|返回num的绝对值|Math.asin(x)|返回x的反正弦值|
|Math.exp(num)|返回Math.E的num次幂|Math.atan(x)|返回x的反正切值|
|Math.log(num)|返回num的自然对数|Math.atan2(y,x)|返回y/x的反正切值|
|Math.pow(num,power)|返回num的power次幂|Math.cos(x)|返回x的余弦值|
|Math.sqrt(num)|返回num的平方根|Math.sin(x)|返回x的正弦值|
|Math.acos(x)|返回x的反余弦值|Math.tan(x)|返回x的正切值|

---
## Chapter 6
### 理解对象
#### 属性类型
ECMAScript中有两种属性:数据属性和访问器属性。
##### 数据属性
数据属性包含一个数据值的位置，含4个具有描述其行为的特性:
- \[\[Configurable]]:表示能否通过delete删除属性而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。对于直接在对象上定义的属性，这个特性值默认为true。
- \[\[Enumerable]]:表示能否通过for-in循环返回属性。对于直接在对象上定义的属性，这个特性值默认为true。
- \[\[Writable]]:表示能否修改属性的值。对于直接在对象上定义的属性，这个特性值默认为true。
- \[\[Value]]:包含这个属性的值。默认为undefined。

要改变属性的默认特性，须使用ECMAScript5的Object.defineProperty()方法。这个方法接受三个参数:属性所在的对象、属性的名字和一个描述符对象。其中，描述符对象的属性必须是:configurable、enumerable、writable和value。设置其中的一或多值，可以修改对应的特性值。<br/>
在非严格模式下，为只读属性赋值的操作将被忽略；严格模式下，赋值操作会导致抛出错误。把configurable设置为false，表示不能从对象中删除属性。在非严格模式下，对这个属性调用delete什么也不会发生，严格模式会导致错误。而且，一旦把属性定义为不可配置的，就不能把它变回可配置了。此时，再调用Object.defineProperty()方法修改除writable之外的特性都会导致错误。
##### 访问器属性
访问器属性不包含数据值，他们包含一对getter和setter函数(不必需)。在读取访问器属性值时，会调用getter函数，这个函数负责返回有效的值；在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理数据。访问器属性有如下四个特性:
- [\[Configurable]]:表示能否通过delete删除属性而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。对于直接在对象上定义的属性，这个特性值默认为true。
- [\[Enumerable]]:表示能否通过for-in循环返回属性。对于直接在对象上定义的属性，这个特性值默认为true。
- [\[Get]]:在读取属性时调用的函数。默认为undefined。
- [\[Set]]:在写入属性时调用的函数。默认为undefined。

访问器属性不能直接定义，必须使用Object.defineProperty()来定义:
```
var book = {
        _year : 2004,
        edition: 1
    };
Object.defineProperty(book,"year",{
    get:function(){
        return this._year;
    },
    set:function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
alert(book.edition);//2
```
_year前面的下划线表示只能通过对象方法访问的属性。只指定getter意味属性不能写入，在严格模式下，尝试写入只指定了getter函数的属性会抛出错误。只指定setter函数的属性不能读，否则在非严格模式下返回undefined，严格模式下抛出错误。
在不支持这个方法的浏览器中，创建访问器属性可以使用两个非标准方法:\__defineGetter__()和\__defineSetter__():
```
book.__defineGetter__("year",function(){
            return this._year;
        });
        book.__defineSetter__("year",function(newValue){
            if(newValue>2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        });
```
在不支持Object.defineProperty()方法的浏览器中不能修改[\[Configurable]]和[\[Enumerate]]。
#### 定义多个属性
利用`Object.defineProperties()`方法一次定义多个属性。这个方法接收两个对象参数:第一个参数是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应:
```
var book = {};
Object.defineProperties(book,{
    _year: {
        value: 2004
        },
    edition: {
        value: 1
        },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
```
#### 读取属性的特性
使用`Object.getOwnPropertyDescriptor()`方法，可以取得给定属性的描述符。这个方法接收两个参数:属性所在的对象和要读取其描述符的属性名称。返回值是一个对象，若为访问器属性，对象的属性有configurable、enumerable、get和set;若为数据属性，对象的属性有configurable、enumerable、writable和value。
```
var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
alert(descriptor.value);//2004
alert(descriptor.configurable);//false
alert(typeof descriptor.get);//"undefined"

var descriptor = Object.getOwnPropertyDescriptor(book,"year");
alert(descriptor.value);//undefined
alert(descriptor.enumerable);//false
alert(typeof descriptor.get);//"function"
```
对于数据属性_year，value等于最初的值，configurable为false，get等于undefined。对于访问器属性year，value等于undefined，enumerablw为false，get是一个指向getter函数的指针。<br/>
在JavaScript中，可以针对任何对象--DOM和BOM对象，使用`Object.getOwnPropertyDescriptor()`方法。

---
## Chapter 7
定义函数有两种方式:一种为函数声明，另一种为函数表达式。函数声明语法如下:
```
function functionName(arg0,arg1){
    //函数体
}
```
关于函数声明，它的一个重要特征为函数声明提升(function declaration hoisting)，意思是执行代码前会先读取函数声明，因此函数声明可以放在调用它的语句后面。<br/>
第二种创建函数的方式是使用函数表达式:
```
var functionName = function(arg0, arg1){
    return arg0+arg1;
}
```
这种情况下创建的函数叫做匿名函数(anonymous function)，因为function关键字后面没有标识符(匿名函数也叫拉姆达函数)。匿名函数的name属性为空字符串。函数表达式与其他表达式一样，使用前必须先赋值:
```
sayHi();//函数还不存在
var sayHi = function(){
    alert("Hi!");
};
```
理解函数提升的关键:
```
//不要这么做！
if(condition){
    function sayHi(){
        alert("Hi!");
    }
}else{
    function sayHi(){
        alert("Yo!");
    }
}
```
以上代码为无效语法，但可以使用函数表达式实现:
```
//可以这么做
var sayHi;

if(condition){
    sayHi = function(){
        alert("Hi!");
    };
}else{
    sayHi = function(){
        alert("Yo!");
    };
}
```
### 递归
非严格模式下，可以通过arguments.callee代替函数名来保证怎样调用函数不会出错；但在严格模式下，访问此属性会导致错误，可以使用命名函数表达式来达成相同效果:
```
var factorial = (function f(num){
    if(num<=1){
        return 1;
    }else{
        return num*f(num-1);
    }
});
```
以上代码创建了名为f()的命名函数表达式，并将其赋值给factorial。即便将函数赋值给了另一变量，函数名f依旧有效。
### 闭包
闭包指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数:
```
function createComparisonFunction(propertyName){
    return function(object1, object2){

        //访问了外部函数中的变量propertyName
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}
```
createComparisonFunction()函数在执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链仍在引用这个活动对象:
```
//创建函数
var compareNames = createComparisonFunction("name");

//调用函数
var result = compareNames({name:"Nicholas"},{name:"Greg"});

//解除对匿名函数的引用(释放内存)
compareNames = null;
````
闭包会比其他函数占用更多内存，建议谨慎使用。

#### 闭包与变量
作用域链的匹配机制导致闭包只能取得包含函数中任何变量的最后一个值:
```
function createFunctions(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}
var a = createFunctions();
alert(a[5]());//10
```
当createFunctions()函数返回后，变量i为10，此时每个函数都引用着保存变量i的同一个变量对象(通过引用传值)。可以通过创建另一个匿名函数强制让闭包的行为符合预期:
```
function createFunctions(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}
var a = createFunctions();
alert(a[5]());//5
```
由于函数参数按值传递，所以会将变量i的当前值复制给 参数num。在该函数内部又创建和返回了一个访问num的闭包。result数组中的每个函数都有各自num变量的一个副本。
#### this对象
在闭包中使用this对象可能会导致一些问题。this对象是在运行时基于函数的执行环境绑定的:全局函数中，this等于window；当函数作为某个对象的方法调用时，this等于那个对象。匿名函数的执行环境具有全局性，因此其this对象通常指向window:
```
var name = "The Window";

var object = {
    name:"My Object",

    getNameFunc:function(){
        return function(){
            return this.name;
        };
    }
};
alert(object.getNameFunc()());//"The Window"
```
内部函数在搜索this和arguments时，只会搜索到其活动对象为止，因此永远不可能直接访问外部函数中的这两个变量。若把外部作用域中的this对象保存在一个闭包能够访问到的变量里，就可以使闭包访问该对象:
```
var name = "The Window";

var object = {
    name:"My Object",

    getNameFunc:function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
alert(object.getNameFunc()());//"My Object"
```
this和arguments存在同样问题。若要访问作用域中的arguments对象，必须将该对象的引用保存在另一个闭包能访问的变量中。
<br/>
几种特殊情况下，this的值会改变:
```
var name = "The Window";

var object = {
    name:"My Object",

    getName:function(){
        return this.name;
    }
};
alert(object.getName());//"My Object"
alert((object.getName)());//"My Object"
alert((object.getName = object.getName)());//"The Window"(非严格模式下)
```
第三种调用方式先执行了一条赋值语句，然后在调用赋值后的结果。因为这个表达式的值是函数本身，所以this的值不能得到维持，返回"The Window"。

#### 内存泄漏
闭包在IE9之前的版本中会导致一些特殊的问题。若闭包的作用域链中保存着一个HTML元素，那么该元素将无法被销毁。
```
function assignHandler(){
    var element = document.getElementById("someElement");
    element.onclick = function(){
        alert(element.id);
    };
}
```
匿名函数保存了一个对assignHandler(d的活动对象的引用，因此会导致无法减少element的引用数。只要匿名函数存在，element的引用数至少为1，因此永远不会被回收。通过改写可以解决该问题:
```
function assignHandler(){
    var element = document.getElementById("someElement");
    var id = element.id;
    element.onclick = function(){
        alert(id);
    };
    element = null;
}
```
上述代码把element.id的一个副本保存在一个变量中，并且在闭包中引用该变量消除了循环引用，但不能解决内存泄漏的问题。闭包会引用包含函数的整个活动对象，而其中包含element。即使闭包不直接引用element，包含函数的活动对象也仍然会保存一个引用。因此，把element变量设置为null才能解除对DOM对象的引用。
### 模仿块级作用域
JavaScript没有块级作用域的概念，意味着在块语句中定义的变量，实际上是在包含函数中而非语句中创建的，从其有定义开始，就可以在函数内部随处访问。即使错误地重新声明同一个变量，也不会改变其值。
匿名函数可以用来模仿块级作用域(也称私有作用域):
```
(function(){
    //这里是块级作用域
})();
```
JavaScript将function关键字当作一个函数声明的开始，而函数声明后面不能加圆括号，而函数表达式后面可以。要将函数声明转换成函数表达式只需加上一对圆括号。无论在什么地方，若临时需要一些变量，就可以使用私有作用域:
```
function outputNumbers(count){
    (function(){
        for(var i = 0;i < count; i++){
            alert(i);
        }
    })();
}
outputNumbers(2);
alert(i);//导致错误:变量i未定义
```
这种技术经常在全局作用域中被用在函数外部，从而限制向全局作用域中添加过多变量和函数。这种做法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完备，就可以立即销毁其作用域链。
## 私有变量
任何在函数中定义的变量都可以认为是私有变量，因为不能在函数外部访问这些变量。私有变量包括函数的参数、局部变量和函数内部定义的其他函数。有权访问私有变量和私有函数的公有方法叫做特权方法(privileged method)。
### 在构造函数中定义特权方法
```
 function MyObject(){
    //私有变量和私有函数
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    //特权方法
    this.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };
}
```
利用私有和特权成员，可以隐藏那些不应该被直接修改的数据:
```
function Person(name){
    this.getName = function(){
        return name;
    };
    this.setName = function(value){
        name = value;
    };
}
var person = new Person("Nicholas");
alert(person.getName());
person.setName("Greg");
alert(person.getName());
```
在构造函数中定义特权方法也有一个缺点，那就是你必须使用构造函数模式来达到这个目的。构造函数模式的缺点是针对每个实例都会创建同样一组新方法。
### 静态私有变量
通过在私有作用域中定义私有变量或函数，同样可以创建特权方法:
```
(function(){

    //定义私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //构造函数
    MyObject = function(){};

    //公有/特权方法
    MyObject.prototype.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };

})();
```
此模式创建了一个私有作用域，并封装了一个构造函数及相应的方法。这个模式在定义构造函数时没有使用函数声明，而是使用了函数表达式。函数声明只能创建局部函数，而初始化未经声明的变量，会创建一个全局变量。这个模式和在构造函数中定义特权方法的主要区别在于私有变量和函数是由实例共享的。
```
(function(){

    var name = "";
    Person = function(value){
        name = value;
    };

    Person.prototype.getName = function(){
        return name;
    };

    Person.prototype.setName = function(value){
        name = value;
    };
})();

var person1 = new Person("Nicholas");
alert(person1.getName());//"Nicholas"
person1.setName("Greg");
alert(person1.getName());//"Greg"

var person2 = new Person("Michael");
alert(person1.getName());//"Michael"
alert(person2.getName());//"Michael"
```
这种模式下，变量name成了一个静态、有所有实例共享的属性。以这种方式创建静态私有变量会因为使用原型而增进代码复用，但每个实例都没有自己的私有变量。
### 模块模式
前面的模式是为自定义类型创建私有变量和特权方法的。而模块模式(module pattern)是为单例创建私有变量和特权方法。单例(singleton)指的是只有一个实例的对象。
JavaScript是以对象字面量的方式来创建单例对象的:
```
var singleton = {
    name : value,
    method : function(){
        //这里是方法的代码
    }
};
```
模块模式通过为单例添加私有变量和特权方法能够使其得到增强:
```
var singleton = function(){
    //私有变量和私有函数
    var privateVariable = 10;
    var privateFunction = function(){
        return false;
    };
    //特权/公有方法和属性
    return {
        publicProperty : true,
        publicMethod : function(){
            privateVariable++;
            return privateFunction();
        }
    };
}();
```
模块模式使用了一个返回对象的匿名函数。从本质上看，这个对象字面量定义的是单例的公共接口。这种模式在需要对单例进行某些初始化同时又要维护其私有变量时非常有用:
```
var application = function(){
    //私有变量和函数
    var components = new Array();
    //初始化
    components.push(new BaseComponent());
    //公共
    return {
        getComponentCount: function(){
            return components.length;
        },
        registerComponent: function(component){
            if(typeof component == "object"){
                components.push(component);
            }
        }
    };
}();
```
如果必须创建一个对象并以某些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，那么可以使用模块模式。

### 增强的模块模式
这种增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加某些属性和方法对其加以增强的情况:
```
var singleton = function(){
    var privateVariable = 10;
    var privateFunction = function(){
        return false;
    };
    var object = new CustomType();
    object.publicProperty = true;
    object.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };
    return object;
}();
```
## 小结
使用函数表达式可以无需对函数命名，实现动态编程。以下为函数表达式的特点:
- 函数声明要求有名字，函数表达式不需要。没有名字的函数表达式也叫匿名函数。
- 在无法确定如何引用函数的情况下，递归函数会变得复杂。
- 递归函数应该始终使用arguments.callee来递归调用自身(函数名可能会发生变化)。

在函数内部定义了其他函数时，就创建了闭包。原理如下:
- 在后台执行环境中，闭包的作用域链包含它自己的作用域、包含函数的作用域和全局作用域。
- 一般，函数的作用域及其所有变量都会在函数执行结束后被销毁
- 当函数返回一个闭包时，这个函数的作用域会一直在内存中保存到闭包不存在为止。

使用闭包可以在JavaScript中模仿块级作用域:
- 创建并立即调用一个函数，这样既可以执行其中的代码，又不会在内存中留下对该函数的引用。
- 结果就是函数内部的所有变量都会立即被销毁，除非将某些变量赋值给了包含作用域(即外部作用域)中的变量。

闭包可以用于在对象中创建私有变量:
- 可以使用闭包来实现公有方法，通过公有方法可以访问包含作用域中定义的变量。
- 有权访问私有变量的公有方法交特权方法
- 可以使用构造函数模式、原型模式来实现自定义类型的特权方法，也可使用模块模式、增强的模块模式来实现单例的特权方法。

---
## Chapter 8
### BOM
BOM提供了很多对象，用于访问浏览器的功能。
#### window对象
BOM的核心对象是window，它表示浏览器的一个实例。在浏览器中，window对象既是通过JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。
##### 全局作用域
所有在全局作用域中声明的变量、函数都会变成windows对象的属性和方法。定义全局变量与在window对象上直接定义属性有一点差别:全局对象不能通过delete操作符删除，而直接在window对象上定义的属性可以。
```
var age = 29;
window.color = "red";

//IE<9时抛出错误，其他浏览器中返回false
delete age;
//IE<9时抛出错误，其他浏览器中返回true
delete window.color;

alert(age);//29
alert(window.color);//undefined
```
上例中使用var语句添加的window属性有一个名为[[Configurable]]的特性，这个特性的值被设置为false，因此这样定义的属性不可以通过delete删除。此外，尝试访问未声明的变量会抛出错误，但通过查询window对象，可以知道某个可能未声明的变量是否存在:
```
//抛出错误，因为oldValue未定义
var newValue = oldValue;

//不会抛出错误，因为这是一次属性查询
var newValue = window.oldValue;
```
##### 窗口关系及框架
若页面包含框架，则每个框架都拥有自己的window对象并保存在frames集合中。在frames集合中，可以通过数值索引(从0开始，从左到右，从上到下)或框架名称来访问相应的window对象。每个window对象都有一个name属性，其中包含框架的名称。<br/>
最好使用top而非window来引用这些框架(如top.frames[0])。top对象时钟指向最外层的框架，即浏览器窗口，使用它可以确保在一个框架中正确访问另一个框架。而window对象指向的是那个框架的特定实例而非最高层的框架。<br/>
parent对象始终指向当前框架的直接上层框架。某些情况下，parent可能等于top，无框架的情况下，parent一定等于top(此时都为window)。除非最高层窗口是通过window.open()打开的，否则其window对象的name属性不会包含任何值。<br/>
最后一个与框架有关的对象是self，始终指向window；实际上self和window对象可以互换使用。
##### 窗口位置
IE、Safari、Opera和Chrome都提供了screenLeft和screenTop属性，分别用于表示窗口相对于屏幕左边和上边的位置。Firefox则在screenX和screenY属性中提供相同的窗口位置信息，Safari和Chrome也同时支持这两个属性。使用下列代码可以跨浏览器取得窗口左边和上边的位置:
```
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft:window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop:window.screenY;
```
IE、Opera中，screenLeft和screenTop中保存的是从屏幕左边和上边到由window对象表示的页面可见区域的距离。若window对象是最外层对象，且浏览器窗口紧贴屏幕最上端(y轴坐标为0)，则screenTop的值就是位于页面可见区域上方的浏览器工具栏的像素高度。而在Chrome、Firefox和Safari中，screenY或screenTop中保存的是整个浏览器窗口相对于屏幕的坐标值，即在窗口的y轴坐标为0时返回0。<br/>
Firefox、Safari和Chrome始终返回页面中每个框架的top.screenX和top.screenY值。即使在页面被设置了外边距而发生偏移的情况下，相对于window对象使用screenX和screenY每次也都会返回相同的值。而IE和Opera则会给出框架相对于屏幕边界的精确坐标值。<br/>
因此无法在跨浏览器的条件下取得窗口左边和上边的精确坐标值。然而使用moveTo()和moveBy()方法有可能将窗口精确移动到一个新位置。moveTo()接收新位置的x和y坐标值，moveBy()接收在水平和垂直方向上移动的像素数。但这两个方法可能会被浏览器禁用，且这两个方法不适用于框架，只能对最外层的window对象使用。
##### 窗口大小
IE9+、Firefox、Safari、Opera和Chrome均提供了四个属性:innerWidth、innerHeight、outerWidth和outerHeight。outerWidth和outerHeight返回浏览器窗口本身的尺寸(IE9+、Safari和Firefox)或Opera中单个标签页对应的浏览器窗口(页面视图容器)的大小(Opera)，而innerWidth和innerHeight则表示该容器页面视图区的大小(减去边框宽度)。Chrome中，outerWidth、outerHeight和innerWidth、innerHeight返回相同的值，即视口(viewport)大小而非浏览器窗口大小。<br/>
IE、Firefox、Safari、Opera和Chrome中，document.documentElement.clientWidth和document.documentElement.clientHeight中保存了页面视口的信息。IE6中，这些属性必须在标准模式下才有效；若为混杂模式，则必须通过document.body.clientWidth和document.body.clientHeight取得相同信息。而对于混杂模式下的Chrome，两者都可以取得视口大小。<br/>
虽然无法确定浏览器窗口本身的大小，但可以取得页面视口的大小:
```
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if(typeof pageWidth != "number"){
    if(document.compatMode == "CSS1Compat"){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    }else{
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
```
对于移动设备，参考P199页。<br/>
此外可以使用resizeTo()和resizeBy()方法调整浏览器窗口的大小。resizeTo()接收浏览器窗口的新宽度和新高度，resizeBy()接收新窗口y原窗口的宽度和高度之差。这两个方法可能会被浏览器禁用且不适用于框架。
##### 导航和打开窗口
使用window.open()方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。接收四个参数:要加载的URL、窗口目标、一个特性字符串及一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值，通常只传递第一个参数，最后一个参数只在不打开新窗口的情况下使用。

1. 弹出窗口
若传入的第二个参数并不是一个已经存在的窗口或框架，那么该方法会根据第三个参数位置上传入的字符串创建一个新窗口或新标签页。若未传入第三个参数，则打开一个带有全部默认设置的新浏览器窗口或打开一个新标签页(根据浏览器设置)。不打开新窗口的情况下，会忽略第三个参数。第三个参数是一个逗号分隔的设置字符串，表示新窗口中显示哪些特性:

|设置|值|说明|
|:-:|:-:|:-:|
|fullscreen|yes或no|表示浏览器窗口是否最大化(仅限IE)|
|height|数值|表示新窗口的高度(至少为100)|
|left|数值|表示新窗口的左坐标(不能为负值)|
|location|yes或no|表示是否在浏览器窗口中显示地址栏|
|menubar|yes或no|表示是否在浏览器窗口中显示菜单栏(默认为no)|
|resizable|yes或no|表示是否可以拖动浏览器窗口的边框改变其大小(默认为no)|
|scrollbars|yes或no|表示内容过大时是否允许滚动(默认为no)|
|status|yes或no|表示是否在浏览器窗口中显示状态栏(默认为no)|
|toolbar|yes或no|表示是否在浏览器窗口中显示工具栏(默认为no)|
|top|数值|表示新窗口的上坐标(不能为负值)|
|width|数值|表示新窗口的宽度(至少为100)|

整个特性字符串中不允许出现空格。<br/>
window.open()方法会返回一个指向新窗口的引用。引用的对象与其他window对象大致相似，但可对其进行更多控制。调用close()方法可以关闭新打开的窗口，但仅适用于通过window.open()打开的弹出窗口。虽然弹出窗口有一个指针指向打开它的原始窗口，但原始窗口中并没有指向弹出窗口的指针，因此我们只能在必要的时候手动实现跟踪。<br/>
有些浏览器(如IE8和Chrome)会在独立进程中运行每个标签页。当一个标签页打开另一个标签页时，若两个window对象间需要彼此通信，那么新标签页就不能运行在独立的进程中。在Chrome中，将新创建的标签页的opener属性设置为null，即表示在单独的进程中运行新标签页。将opener属性设置为null就是告诉浏览器新创建的标签页不需要与打开它的标签页通信，因此可以在独立进程中运行。标签页间的联系一旦被切断，就无法恢复。
2. 安全限制(P201)
3. 弹出窗口屏蔽程序(P202)

##### 间歇调用和超时调用
JavaScript是单线程语言，但允许通过设置超时值和间歇时间值来调度代码在特定的时刻执行。超时调用使用window对象的setTimeout()方法，接收要执行的代码和以毫秒表示的时间。第一个参数可以是包含JavaScript代码的字符串，也可以是一个函数。但由于传递字符串可能导致性能损失，因此不建议传入字符串。JavaScript是一个单线程序的解释器，因此一定时间内只能执行一段代码，为了控制要执行的代码，就有一个JavaScript任务队列，这些任务会按照将他们添加到队列的顺序执行。第二个参数告诉JavaScript多长时间后把当前任务添加到队列中，若队列为空，则添加的代码会立即执行。
被调用之后，该方法会返回一个数值ID，表示超时调用。这个ID是计划执行代码的唯一标识符，可以通过它来取消超时调用。取消的方法是调用clearTimeout()并将ID传递给它。<br/>
间歇调用会按照指定的时间间隔重复执行代码，直至间歇调用被取消或页面被卸载。设置间歇调用的方法是setInterval()，接收要执行的代码(字符串或函数)和每次执行前等待的毫秒数。
被调用后也会返回一个间歇调用ID，使用clearInterval()并传入相应间歇调用ID可以取消间歇调用。在使用超时调用时，没有跟踪ID的必要，因为执行代码后，不设置另一次超时调用，调用就会自行停止，因此可以使用超时调用来模拟间歇调用。并且后一个间歇调用可能会在前一个间歇调用结束之间启动，通过利用超时调用可以避免这一点，所以最好不要使用间歇调用。
##### 系统对话框
浏览器通过alert()、confirm()和prompt()方法可以调用系统对话框向用户显示信息。并且通过这几个方法打开的对话框都是同步和模态的，即显示对话框时代码会停止执行，关掉对话框后代码恢复执行。<br/>
alert()方法用于显示一些用户无法控制的信息。confirm()方法可以让用户决定是否执行给定的操作，可以检查其返回值确定用户点击的按钮。prompt()接收要显示给用户的文本提示和文本输入域的默认值(可以为空字符串)。若点击了ok按钮，则返回文本输入域的值；若点击cancel按钮或通过其它方式关闭对话框则返回null。<br/>
另外还有两个可以使用JavaScript打开的对话框，即“查找”和“打印”。通过window对象的find()和print()方法打开。
#### location对象
location提供了当前窗口中加载的文档有关的信息和一些导航功能。location对象即是window对象的属性，也是document对象的属性。下列为location对象的所有属性:

|属性名|例子|说明|
|:-:|:-:|:-:|
|hash|"#contents"|返回URL中的hash(#号后跟0或多个字符)，若URL中不包含散列，则返回空字符串|
|host|"www.wrox.com:80"|返回服务器名称和端口号(如果有)|
|hostname|"www.wrox.com"|返回不带端口号的服务器名称|
|href|"http://www.wrox.com"|返回当前加载页面的完整URL。location对象的toString()方法也返回这个值|
|pathname|"/WileryCDA/"|返回URL中的目录和(或)文件名|
|port|“8080”|返回URL中指定的端口号，若不包含端口号则返回空字符串|
|protocol|"http:"|返回页面使用的协议|
|search|"?q=javascript"|返回URL的查询字符串(以问号开头)|
##### 查询字符串参数
访问URL包含的查询字符串属性并不方便，尽管location.search返回从问号到URL末尾的所有内容，但却无法访问其中每个查询字符串参数。为此可以创建如下函数:
```
function getQueryStringArgs(){
    //取得并去掉开头问号
    var qs = (window.location.search ? location.search.substring(1):""),
        args = {},
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        length = items.length;

        for(let i = 0; i < length; i++){
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if(name.length){
                args[name] = value;
            }
        }
        return args;
}
```
##### 位置操作
可以使用assign()方法为其传递一个URL来打开新URL并在浏览器的历史记录中生成一条记录。
```
//完全等价
location.assign("http://www.wrox.com");
window.location("http://www.wrox.com");
location.href("http://www.wrox.com");
```
在这些方法中，最常用的是设置location.href属性。另外，修改location对象的其他属性也可以改变当前加载的页面:
```
//设初始URL为http://wrox.com/WileyCDA/

//URL修改为http://wrox.com/WileyCDA/#section1
location.hash = "#section1";

//URL修改为http://wrox.com/WileyCDA/?q=javascript
location.search = "?q=javascript";

//URL修改为http://yahoo.com/WileyCDA/
location.hostname = "www.yahoo.com";

//URL修改为http://wrox.com/mydir/
location.pathname = "mydir";

//URL修改为http://wrox.com:8080/WileyCDA/
location.port = "8080";
```
每次修改location属性(除hash外)页面都会以新URL重载，且浏览器的历史记录中会生成一条新纪录，因此用户点击"后退"按钮都会导航到前一个界面。若要禁用这种行为，可以使用replace()方法，此方法接收一个参数，即要导航到的URL。还可以通过reload()来重新加载当前显示的页面。若调用时不传参，页面就会以最有效的方式重载。如果要强制从服务器重新加载，则需要传入参数true。位于reload()的代码不一定会执行，因此最好将此方法放在代码的最后一行。
#### navigator对象
navigator对象是识别客户端浏览器的事实标准，通常用于监测显示网页的浏览器类型。
##### 监检插件
检测浏览器中是否安装了特定的插件是一种最常见的检测例程。对于非IE浏览器，可以使用plugins数组来达到这个目的。该数组的每一项都包含下列属性:
- name: 插件的名字
- description: 插件的描述
- filename: 插件的文件名
- length: 插件所处理的MIME类型数量

一般来说，name属性中包含检测插件必需的所有信息。在检测插件时，需要循环迭代每个插件并将插件的name与给定名字进行比较。<br/>
检测IE中的插件比较麻烦，因为IE不支持Netscape式的插件。在IE中检测插件的唯一方式就是使用专有的ActiveXObject类型，并尝试创建一个特定插件的实例。IE是以COM对象的方式实现插件的，而COM对象使用唯一标识符来标示。因此，要检查特定的插件，必须知道其COM标识符:
```
//检测IE中的插件
function hasIEPlugin(name){
    //创建未知COM对象会抛出错误
    try{
        new ActiveXObject(name);
        return true;
    }catch(ex){
        return false;
    }
}
//检测Flash
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
//检测QuickTime
alert(hasIEPlugin("QuickTime.QuickTime"));
```
鉴于这两种插件检测方法差别太大，因此典型的做法是针对每个插件分别创建检测函数。
##### 注册处理程序
Firefox2为navigator对象新增registerContentHandler()和registerProtocolHandler()方法。这两个方法可以让一个站点指明它可以处理特定类型的信息。随着RSS阅读器和在线电子邮件程序的兴起，注册处理程序就为像使用桌面应用程序一样默认使用这些在线应用程序提供了一种方式。<br/>
registerContentHandler()方法接收三个参数:要处理的MIME类型、可以处理该MIME类型的页面的URL以及应用程序的名称:
```
navigator.registerContentHandler("application/rss+xml","http://www.somereader.com?feed=%s","Some Reader");
```
第一个参数是RSS源的MIME类型。第二个参数是接收RSS源URL的URL，%s表示RSS源URL，由浏览器自动插入。registerProtocolHandler()方法也接收三个参数:要处理的协议(如mailto或ftp)、处理该协议的页面的URL和应用程序的名称。
```
navigator.registerProtocolHandler("mailto","http://www.somemailclient.com?cmd=%s","Some Mail Client");
```
上述代码将一个应用程序注册为默认的邮件客户端。
#### screen对象
screen对象基本上只用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息。这些信息经常集中出现在测定客户端能力的站点跟踪工具中，但通常不会用于影响功能。不过，有时也可能会用到其中信息来调整浏览器窗口大小，使其占据屏幕的可用空间:
```
window.resizeTo(screen.availWidth,screen.availHeight);
```
#### history对象
history对象保存着用户上网的历史记录，使用go()方法可以在用户的历史记录中任意跳转。此方法只接收一个参数，表示向后或向前跳转的页面数。也可以传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个位置(若不包含则不做任何操作)。也可以用两个简写方法back()和forward()来代替go()，这两个方法可以模仿浏览器的后退与前进按钮。history对象还有一个length属性用于保存历史记录的数量。对于加载到窗口、标签页或框架中的第一个页面而言，history.length等于0，可以通过测试该值确定当前页面是不是用户历史记录的第一个页面。
