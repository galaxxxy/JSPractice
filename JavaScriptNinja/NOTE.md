# JavaScript 忍者秘籍(第二版)
## 第二章 运行时的页面构建过程
### 生命周期概览
客户端Web应用的周期从用户指定某个网页地址或点击某个链接开始,其由两个步骤组成:页面构建和事件处理:

![img2-1](./images/2.1.png)

### 页面构建阶段
在Web应用被展示或交互之前,其页面必须根据服务器获取的响应来构建，构建过程主要包括两个步骤:
1. 解析HTML代码并构建文档对象模型
2. 执行JavaScript代码

![img2-2](./images/2.2.png)

#### HTML解析和DOM构建
在页面构建阶段，浏览器会遇到特殊类型的HTML元素--脚本元素`<script>`。每当解析到脚本元素，浏览器就会停止从HTML构建DOM，并开始执行JS代码
#### 执行JS代码
##### JS中的全局对象
全局window对象最重要的属性为document,代表了当前页面的DOM。
### 事件处理

![img2-3](./images/2.3.png)

## 第三章 函数：定义与参数
### 函数作为对象的乐趣
通过给函数添加属性可以:
- 在集合中存储函数使我们轻易管理相关联的函数,例如某些特定情况下必须调用的会调函数
- 让函数记忆上次计算得到的值以提高后续调用的性能

#### 存储函数
```javascript
const store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
    return false;
  },
};
```
通过为加入的函数分配id属性并将其作为属性增加到cache上来防止重复添加函数;另一种技巧是使用函数属性时,可以通过该属性修改函数自身,可以用于记忆前一个计算得到的值，为之后计算节省时间。
#### 自记忆函数
```javascript
function isPrime(value) {
  if(!isPrime.answers) {
    // 创建缓存
    isPrime.answers = {};
  }
  if(isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }
  let prime = value !== 0 && value !== 1;
  for(let i = 2; i < value; i++) {
    if(value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}
```
记忆画是一种构建函数的处理过程，能够记住上次的计算结果，对于动画中的计算、搜索不常变化的数据或任何耗时的数学计算来说，记忆化十分有用。
### 函数定义
有四类定义函数的方式:
- 函数定义和函数表达式
- 箭头函数(lambda函数)
- 函数构造函数(不常用)
- 生成函数:能够使我们创建不同于普通函数的函数，在应用执行过程中，这种函数能够退出再重新进入，在这些再进入之间保留函数内变量的值。

### 函数的实参和形参
#### 剩余参数
为函数的最后一个命名参数前加上省略号前缀，这个参数就变成了一个叫做剩余参数的数组，数组内包含着传入的剩余的参数。
## 第四章 理解函数调用
### 隐式函数参数
#### arguments参数
- arguments对象是一个类数组结构。
- 将argument对象作为函数的别名使用会影响代码的可读性，因此在严格模式中将无法使用它。
- 严格模式下，改变arguments的值不会引起传入参数的变化。

#### this参数:函数上下文
this参数代表函数调用相关联的对象，因此也被称为函数上下文。this参数的指向不仅由定义函数的方式和位置决定，还收到函数调用方式的影响。
### 函数调用
- 作为函数调用:直接调用
- 作为方法:关联在对象上
- 作为构造函数
- 通过call或apply方法调用

#### 作为函数直接调用
在非严格模式下,this为全局上下文(global对象);严格模式下,this为undefined。
#### 作为方法调用
当一个函数被赋值给一个对象的属性，并通过对象属性引用的方式调用函数时，函数会作为对象的方法被调用，且该对象会成为函数的上下文。
#### 作为构造函数调用
使用关键字new调用函数会触发以下几个动作:
1. 创建一个新的空对象
2. 该对象作为this参数传递给构造函数
3. 新构造的对象作为new运算符的返回值

##### 构造函数返回值
- 若构造函数返回一个对象，则该对象将作为整个表达式的只返回，而传入构造函数的this将被丢弃。
- 若构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。

### 解决函数上下文问题
#### 使用箭头函数绕过函数上下文
箭头函数没有单独的this值,箭头函数的this与声明所在的上下文相同。
#### 使用bind方法
bind()返回一个新函数，并绑定到传入的参数上
## 第五章 闭包和作用域
### 理解闭包
当在外部函数中声明内部函数时，不仅定义了函数的声明，还创建了一个闭包。该闭包不仅包括了函数的声明，还包含了在函数声明时该作用域中的所有变量。当最终执行内部函数时，尽管声明时的作用域已经消失，但是通过闭包依然能够访问到原始作用域。每个通过闭包访问变量的函数都具有一个作用域链，作用域链包含闭包的全部信息。因此闭包虽然十分有用，但不能过度使用。
### 使用闭包
#### 封装私有变量
我们可以通过闭包内部方法获取私有变量的值，因为闭包内部的变量可以通过闭包内的方法访问，构造器外部的代码则不能方位闭包内部的变量。
### 通过执行上下文来跟踪代码
JavaScript中有两种执行上下文:全局执行上下文(只有一个)和函数执行上下文。
### 使用词法环境跟踪变量的作用域
词法环境(lexical environment)是JavaScript引擎内部用来跟踪标识符与特定变量之间的映射关系:
```javascript
var ninja = 'Hattori';
console.log(ninja);
```
当console.log语句访问ninja变量时，会进行词法环境的查询。
词法环境是JavaScript作用域的内部实现机制。在作用域范围内，每次执行代码时，代码结构都获得与之关联的词法环境。
#### 代码嵌套与词法环境
如果在当前环境中无法找到某一标识符，就会对外部环境进行查找，一旦找到匹配的变量，或是在全局环境中仍然无法查找到对应的标识符而返回错误，就会停止查找。每个执行上下文都有一个与之关联的词法环境，词法环境包含了在上下文中定义的标识符的映射表。无论何时创建函数，都会创建一个与之相关联的词法环境，并存储在名为`[[Environment]]`的内部属性上(也就是说无法直接访问或操作)。无论何时调用函数，都会创建一个新的执行环境，被推入执行上下文栈。并且JavaScript引擎会将调用函数的内置`[[Environment]]`属性与创建函数时的环境进行关联。
### 理解JavaScript的变量类型
#### 变量可变性
##### const变量
声明时需要初始化，声明完成后，无法更改其值。一般用于不需要重新赋值的特殊变量或指向一个固定的值。
#### 定义变量的关键字与词法环境
##### 关键字var
通过var声明的变量会在距离最近的函数内或全局词法环境中注册，不关注块级作用域。
#### 在词法环境中注册标识符
JavaScript代码的执行分两个阶段进行:
- 第一阶段:没有执行代码，JavaScript引擎会访问并注册当前词法环境中所声明的变量和函数
- 第二阶段:
  1. 若创建一个函数环境，则创建形参及函数参数的默认值。若为非函数环境，跳过此步。
  2. 若创建全局或函数环境，则扫描当前代码进行函数声明(不会扫描其他函数的函数体和函数表达式或箭头函数的函数声明)。对于找到的函数声明，将创建函数，并绑定到当前环境与函数名相同的标识符上。若标识符已经存在，则该标识符的值将被重写。若为块级作用域，跳过此步。
  3. 扫描当前代码进行变量声明。函数或全局环境中，查找所有当前函数以及其他函数外通过var声明的变量，并查找所有通过let或const定义的变量。在块级环境中，仅查找当前块中通过let或const定义的变量。对于所查找到的变量，若该标识符不存在，进行注册并将其初始化为undefined。若该标识符已存在，保留其值。

![img5-1](./images/5.1.png)

##### 函数重载
```javascript
assert(typeof fun === 'function', 'we access the function');

var fun = 3;
assert(typeof fun === 'number', 'now we access the number');

function fun() {}

assert(typeof fun === 'number', 'still a number');
```
注册函数声明时，标识符fun已存在，且并未赋值为undefined，因此第一个断言通过；之后fun被赋值为3，所以第二个断言通过；程序的实际执行过程中，跳过了函数声明部分，所以函数声明不会影响标识符的值，第三个断言通过。
### 研究闭包的工作原理
#### 回顾使用闭包模拟私有变量的代码
每次调用构造函数时，都会创建一个新的词法环境，该词法环境保持构造函数内部的局部变量。此外，无论何时创建函数，被创建的函数都会通过内置`[[Environment]]`保持对词法环境的引用。
#### 私有变量的警告
在JavaScript中没有真正的私有对象属性，但是可以通过闭包实现一种可接受的"私有"变量的方案。虽然不是真正的私有变量，但是许多开发者发现这是一种隐藏信息的有用方式。
## 生成器和Promise
生成器是一种特殊类型的函数。当从头到尾运行标准函数时，它最多只生成一个值。然而生成器函数会在几次运行请求中暂停，因此每次运行都可能会生成一个值。<br/>
promise对象是一个占位符，暂时替代那些尚未计算出但未来会计算出的值。
### 使用生成器函数
生成器(generator)函数能生成一组值的序列，但每个值的生成是基于每次请求，并不同于标准函数那样立即生成。我们必须显式地向生成器请求一个新的值，随后生成器要么响应一个新生成的值，要么就告诉我们它之后都不会再生成新的值。每当生成器函数生成了一个值，它都不会像普通函数一样停止执行。当对另一个值的请求到来后，生成器就会从上次离开的位置恢复执行。<br/>
调用生成器并不会执行生成器函数，相反，会创建一个叫做迭代器(iterator)的对象。
### 通过迭代器对象控制生成器
调用生成器后，就会创建一个迭代器(iterator)。迭代器用于控制生成器的执行。迭代器对象暴露的最基本的接口是next方法，用于向生成器请求一个值，从而控制生成器。<br/>
next函数调用后，生成器就开始执行代码，当代码执行到yield关键字时，就会生成一个中间结果(生成值序列中的一项)，然后返回一个新对象，其中封装了结果值和一个指示完成的指示器。<br/>
每当生成一个当前值之后，生成器就会非阻塞地挂起执行，随后耐心等待下一次值请求的到达。
#### 对迭代器进行迭代
通过调用生成器得到的迭代器，暴露出一个next方法能让我们向迭代器请求一个新值。next方法返回一个携带生成值的对象，而该对象包含的另一个属性done也向我们指示了生成器是否还会追加生成值。
```javascript
function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
}

const weaponsIterator = WeaponGenerator();
let item;
while(!(item = weaponsIterator.next()).done) {
  assert(item !== undefined, item.value);
}
```
这就是for-of循环的原理，for-of循环只不过是对迭代器进行迭代的语法糖。不同于手动调用迭代器的next方法，for-of循环同时还要查看生成器是否完成。
#### 把执行权交给下一个生成器
在迭代器上使用yield*操作符，程序会跳转到另一个生成器上执行。
### 使用生成器
#### 与生成器交互
##### 作为生成器函数参数发送值
向生成器发送值的最简方法就是调用并传入实参
##### 使用next方法向生成器发送值
除了第一次调用生成器的时候向生成器提供数据，我们还能通过next方法向生成器传入参数。在这个过程中，我们把生成器函数从挂起状态恢复到了执行状态。在当前挂起的生成器中，生成器把这个传入的值用于整个yield表达式。<br/>
我们通过yield语句从生成器中返回值，在使用迭代器的next方法把值传回生成器，以此在生成器中双向通信。
##### 抛出异常
```javascript
function* NinjaGenerator() {
  try {
    yield 'Hattori';
    fail('The expected exception didn\'t occur');
  } catch (error) {
    assert(error === 'Catch this!', 'Aha! we caught an expection');
  }
}
const ninjaIterator = NinjaGenerator();

const result1 = ninjaIterator.next();
assert(result1.value === 'Hattori', 'we got Hattori');

ninjaIterator.throw('Catch this!');
```
上述代码将异常抛回到了生成器中。
#### 探索生成器内部构成
调用生成器实际上不会执行它，相反，会创建一个新的迭代器，通过迭代器我们能够从生成器中请求值。在生成器生成或让渡了一个值后，生成器会挂起执行并等待下一个请求的到来。在某种方面上看，生成器更像是一个在状态中运动的状态机:
- 挂起开始: 创建生成器后，最先以这种状态开始，其中任何代码都未执行。
- 执行: 生成器中的代码在这种状态下执行。
- 挂起让渡: 当生成器的执行过程中遇到了一个yield表达式，他会创建并让渡一个包含着返回值的新对象，随后再挂起到执行状态。
- 完成: 在生成器执行期间，若代码执行到return语句或全部代码执行完毕，生成器就进入该状态。

![img6-5](./images/6.5.png)

##### 通过执行上下文跟踪生成器函数
控制流进入生成器函数时，会创建一个新的函数环境上下文，并将该上下文入栈。生成器不会执行任何函数代码，相反地，会生成并返回一个迭代器。由于迭代器用于控制生成器的执行，所以迭代器中保存了一个它创建时的执行上下文。<br/>
一般情况下，当程序从一个标准函数返回后，对应的执行环境上下文会从栈中弹出，并被完整的销毁。但当执行流离开生成器时，对应的上下文会从栈中弹出，但迭代器对象保存着对它的引用，因此不会被销毁。当调用迭代器的next方法时，生成器会重新激活对应的执行上下文，并将其放入栈顶，从上次离开的位置继续执行。<br/>
当我们从生成器中取得控制权后，生成器的执行环境上下文一直是保存的，而不像标准函数一样退出后销毁。
### 使用Promise
使用构造函数来创建一个promise需要传入一个函数。这个函数被称为执行函数，包含resolve和reject两个参数。
#### 理解简单回调函数所带来的问题
- 错误难处理
- 连续执行步骤棘手
- 执行很多并行任务同样棘手

#### 深入研究promise
promise对象用于作为异步任务结果的占位符，代表了一个我们暂时还没获得但未来有希望获得的值。在一个promise对象的整个生命周期中，它会经历多种状态:

![img6-10](./images/6.10.png)

JavaScript在主线程的所有代码都执行完毕后。调用then回调函数来处理任务队列中的promise。
#### 创建第一个真实promise案例
```javascript
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.onload = function() {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(`${this.status} ${this.statusText}`);
        }
      } catch (error) {
        reject(error.message);
      }
    };

    request.onerror = function() {
      reject(`${this.status} ${this.statusText}`);
    };

    request.send();
  });
}

getJSON('data/ninjas.json').then(ninja => {
  if (ninjas !== null) {
    console.log('Ninjas obtained!');
  }
}).catch(e => console.log(`Shouldn't be here: ${e}`));
```
XMLHttpRequest包含两种事件: onload和onerror。当浏览器从服务器端接收到了一个响应，onload事件就会被触发，当通信出错则会触发onerror事件。
#### 等待多个promise
除了处理相互依赖的异步任务序列以外，对于等待多个独立的异步任务，promise也能够显著减少代码量。
```javascript
Promise.all([
  getJSON('./data/ninjas.json'),
  getJSON('./data/mapInfo.json'),
  getJSON('./data/plan.json')
]).then(results => {
  const ninjas = results[0],
        mapInfo = results[1],
        plan = results[2];
  if (
    ninjas !== undefined &&
    mapInfo !== undefined &&
    plan !== undefined
    ) {
      console.log(`The plan is ready to be set in motion!`);
    }
}).catch(err => {
  console.log(`A problem in carrying out our plan`);
});
```
通过使用内置Promise.all可以等待多个promise。这个方法接收一个promise数组，然后创建一个新promise对象，一旦数组中的promise全被解决，这个返回的promise就会被解决，而一旦其中有一个promise失败了，整个新promise对象也会被拒绝。后续的回调函数接受成功值组成的数组，其中的每一项都对应promise数组中的对应项。
#### promise竞赛
```javascript
Promise.race([
  getJSON('./data/yoshi.json'),
  getJSON('./data/hattori.json'),
  getJSON('./data/hanzo.json')
]).then(ninja => {
  if (ninja !== null) {
    console.log(`${ninja.name} responded first`);
  }
}).catch(err => {
  console.log(`Failure!`);
});
```
使用Promise.race方法并传入一个promise数组会返回一个全新的promise对象，一旦数组中某个promise被处理或被拒绝，这个返回的promise就同样会被处理或被拒绝。
### 把生成器和promise相结合
```javascript
try {
  const ninjas = syncGetJSON("data/ninjas.json");
  const missions = syncGetJSON(ninjas[0].missionsUrl);
  const missionDetails = syncGetJSON(missions[0].detailsUrl);
} catch(e) {
  // Oh no, we weren't able to get the mission details
}
```
同步方法会阻塞UI，我们可以修改使其运行长时间运行的任务时不会发生阻塞。一种方法是将生成器和promise相结合。生成器让渡后会挂起执行而不会发生阻塞，我们可以调用迭代器的next方法就可以唤醒生成器继续执行代码。而promise允许指定两个回调函数，分别在能够获得预先保证的值和错误发生时触发。<br/>
我们这样组合生成器和promise:我们将执行异步操作的代码放入生成器，然后执行生成器。当生成器内执行了一项异步操作时，一个代表当前异步操作返回值的promise会被创建。由于我们在生成器执行时无法知道promise是否会成功兑现，所以我们挂起生成器以免造成阻塞。当一会promise的状态确定后，我们通过调用迭代器的next方法继续执行生成器。只要有需要就可以重复这个过程:
```javascript
async (function* () {
  try {
    const ninjas = yield getJSON('./data/ninjas.json');
    const missions = yield getJSON(ninjas[0].missionsUrl);
    const missionDescription = yield getJSON(missions[0].detailsUrl);
    console.log(missionDescription);
  } catch (e) {
    console.log(e);
  }
});

function async(generator) {
  const iterator = generator();

  function handle(iteratorResult) {
    if (iteratorResult.done) {
      return ;
    }

  const iteratorValue = iteratorResult.value;
  // 若生成器的值为promise 则对其进行异步处理
  if (iteratorValue instanceof Promise) {
    iteratorValue
      .then(res => handle(iterator.next(res)))
      .catch(err => iterator.throw(err));
  }
}

  try {
    handle(iterator.next());
  } catch (e) {
    iterator.throw(e);
  }
}
```
### 面向未来的async函数
可以看到我们仍然需要书写一些样板代码，因此我们需要一个async函数能够管理所有promise函数的调用和所有向生成器发出的请求。可以使用async和await关键字来替代上述样板代码:
```javascript
(async function() {
  try {
    const ninjas = await getJSON('./data/ninjas.json');
    const missions = await getJSON(ninjas[0].missionsUrl);
    const missionDescription = await getJSON(missions[0].detailsUrl);
    console.log(missionDescription);
  } catch (e) {
    console.log(e);
  }
})();
```
通过在关键字function前使用关键字async，可以表明当前函数依赖一个异步返回的值。在调用异步任务的每一处使用await关键字来告诉JavaScript引擎，请在不阻塞应用执行的情况下在这个位置上等待执行结果。
## 面向对象与原型
### 理解原型
使用操作符`in`来测试对象是否包含某个特定的属性。JS中对象的原型属性属于内置属性，无法直接访问(因此被标记为`[[prototype]]`)。然而，内置方法`Object.setPrototypeOf`可以接受两个对象作为参数，并把第二个对象设置为第一个对象的原型。<br/>
每个对象都可以有一个原型，每个对象的原型也可以拥有一个原型，以此形成一个原型链。查找特定属性会被委托到整条原型链上，只有在没有原型可以查找时才会停止(或者已经找到了该属性)。
### 对象构造器与原型
每个函数都有一个原型对象，且会被自动被设为由该函数创建的对象的原型。使用`new`操作符调用函数会创建一个新对象并将其设置为该函数的上下文(可通过`this`关键字访问)。`new`操作符返回的结果是这个新对象的引用。

![img7-4](./images/7.4.png)

#### 实例属性
当把函数作为构造函数通过`new`操作符调用时，其上下文会被定义为新的对象实例。除了通过原型来暴露对象中的属性外，我们还可以通过`this`关键字来初始化构造函数中的值。

![img7-5](./images/7.5.png)
在原型链上搜索属性时，若该属性能在该对象本身找到，则不会再在原型链上找。

![img7-6](./images/7.6.png)
每一个实例都有构造函数内构建的属性的独立拷贝，但他们同样可以访问同一个原型属性。暴露出的问题: 同样的`swingSword`方法被独立创建，在创建大量实例时会导致内存的浪费。因此可以选择只在原型上创建对象方法，这样可以使同一个方法被所有对象实例共享。<br/>
注意: 若要在构造函数内使用闭包来模仿私有对象变量，只能在构造函数里定义方法。
#### JavaScript动态特性的副作用

![img7-8](./images/7.8.png)
在实例被创建后对原型做更改，该实例依旧能够访问。

![img7-9](./images/7.9.png)
构造函数的原型可以任意替换，但已经创建的实例依旧引用旧的原型对象。

![img7-10](./images/7.10.png)
而新创建的实例引用新的原型对象。

#### 通过构造函数了解对象类型
一个对象的构造函数可以通过其构造函数的原型的`constructor`属性访问到。通过使用`constructor`属性，我们可以访问创建该对象时所使用的函数。我们可以使用`constructor`属性验证实例的原始类型(与`instanceof`操作符类似)，还可以直接使用`constructor`属性来创建实例。这使得我们可以在不需要访问原始构造函数的情况下就可以直接创建对象，即使构造函数不再作用域内，也可以使用构造函数的引用。
### 实现继承

![img7-14](./images/7.14.png)
我们可以通过把父类的实例设置为子类的原型来实现继承。这种原型实现继承的方式的副作用好的一面是，所有继承函数的原型将实时更新。继承了原型的对象总是可以访问到当前的原型属性。

注意: 强烈不推荐直接使用父类的原型作为子类的原型，如(Child.prototype = Parent.prototype)。这样做会导致父类原型上发生的所有变化都会同步到子类原型上，必定会导致我们不想要的副作用。
#### 重写constructor属性导致的问题
从上图可以看出，将Person的新实例设置为Ninja构造函数的原型时，我们丢失了Ninja与初始原型之间的关联。这会导致一些问题，因为初始原型中的constructor属性可以用于确定对象是由哪个函数构建的。
##### 配置对象属性
在JS中，每个对象属性都由一个属性描述进行描述的，我们可以配置以下关键字:
- `configurable`: 若为true，可以修改或删除属性。若为false，不允许修改和删除。默认为true。
- `enumerable`: 若为true，则可以在for-in循环对象属性时出现。默认为true。
- `value`: 指定属性的值，默认为undefined。
- `writable`: 若为true，则可以通过赋值语句修改属性值。默认为true。
- `get`: 定义getter函数，当访问属性时调用，不能与value和writable属性同时使用。默认为undefined。
- `set`: 定义setter函数，当对属性赋值时调用，不能与value和writable属性同时使用。默认为undefined。

如果想要调整属性的配置信息，我们可以使用内置的`Object.defineProperty`方法，传入属性所在对象，属性名和属性描述对象。
#### instanceof操作符
`instanceof`操作符用于检测对象是否存在与另一对象构造函数当前的原型链中。

![img7-16](./images/7.16.png)

虽然`instanceof`操作符最常见的用途是确定一个实例是否由一个特定的构造函数所创建的，但事实上并不是这么做的，它会检查操作符右边的函数的原型是否存在于左边对象的原型链上。
##### instanceof操作符的警告

![img7-17](./images/7.17.png)
注意原型改变时的情况

### 使用ES6中的class
虽然现在可以在JavaScript使用关键字`class`，但其底层实现仍然基于原型继承。
#### 使用class关键字
##### 静态方法
在函数前使用`static`关键字来声明一个静态方法,ES6之前版本的实现方式:
```javascript
function Ninja() {}
Ninja.compare = function(ninja1, ninja2) {...}
```
##### 实现继承
ES6前的实现方式:
```javascript
function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writable: true
});
```
记住一点:实例方法应该被直接添加在构造函数原型上，如Person构造函数上的dance方法。为了实现继承，我们必须把父类的实例设置为子类的原型。但通过此方式会导致`constructor`属性的丢失，因此需要使用`Object.defineProperty`方法进行手动设置。在ES6中，大大简化了整个过程:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }
}
```