
// 考察的不仅是知识，更是思维缜密程度
// 浏览器环境，使用的c++ wasm来实现的，不是js

// https://juejin.cn/post/6844904000525959182
// cmd+shift+d:复制当前行
// cmd+shift+f:查找当前行

Function.prototype.myCall = function (context, ...args) {
  // 1. 处理原始值类型
  const safeContext = 
    context === null || context === undefined 
      ? globalThis 
      : Object(context);

  // 2. 创建中间对象处理原始值包装问题
  const wrapperObj = typeof context !== "object" 
    ? Object.create(null) 
    : safeContext;
  
  if (typeof context !== "object") {
    wrapperObj.value = context;
  }

  // 3. 使用 Symbol 作为属性键
  const key = Symbol();
  wrapperObj[key] = this;

  // 4. 执行并清理
  const result = wrapperObj[key](...args);
  delete wrapperObj[key];
  
  return result;
};
/**
 * myCall() 方法调用一个具有给定this值和参数的函数
 * @param {Object} context this值
 * @param {...*} args 函数参数，可以是多个
 * @returns {any} 函数返回值
 */
Function.prototype.myCall2 = function (context, ...args) {
  // 1. 判断context是否为null或undefined
  context = context || globalThis;
  // 2. 将函数添加到context对象上
  const fn = Symbol();
  context[fn] = this;
  // 3. 执行函数并获取返回值
  const result = context[fn](...args);
  // 4. 删除添加的属性
  delete context[fn];
  // 5. 返回结果
  return result;
};

/**
 * myCall() 方法调用一个具有给定this值和参数的函数
 * @param {Object} context this值
 * @param {...*} args 函数参数，可以是多个
 * @returns {any} 函数返回值
 */
Function.prototype.myCall3 = function (context, ...args) {
  // 1. 判断context是否为null或undefined,object(var)会返回一个空对象,构造器，返回对象
  context === null || context === undefined ? globalThis : Object(context);
  // 2. 将函数添加到context对象上,为什么不能直接使用const fn = this
  // 因为this是函数本身，不能直接使用this来调用函数
  // const fn = this;
  // context.fn = this;
  // 这里使用Symbol来防止函数命名冲突
  // 因为可能context对象上已经存在fn属性了
  // 所以使用Symbol来创建一个唯一的属性名
  // 这样就不会出现命名冲突的问题
  const fn = this;
  const key = Symbol();
  // context[key] = fn;
  Object.defineProperty(context, key, {
    value: fn,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  console.log(context);
  // 3. 执行函数并获取返回值
  const result = context[key](...args);
  // 4. 删除添加的属性
  delete context[key];
  // 5. 返回结果
  return result;
};
function test(a, b) {
  console.log("args", a, b);
  console.log("this", this);
}
function test2(a, b) {
  console.log(this.name);
  console.log(a + b);
  console.log("this", this);
  console.log("args", arguments);
  console.log("args", a, b);
}
const obj = {
  name: "test",
};
test2.myCall(obj, 1, 2); // test 3
test2.myCall(1, 2, 3); // undefined 6
test2.myCall(undefined, 2, 3); // undefined 6
test2.myCall({}, 2, 3); // undefined 6
test2.myCall(
  {
    fn() {
      console.log(this);
    },
  },
  2,
  3
); 
test.myCall(obj, 1, 2); // test 3
test.myCall(1, 2, 3); // undefined 6
test.myCall(undefined, 2, 3); // undefined 6
test.myCall({}, 2, 3); // undefined 6
test.myCall(
  {
    fn() {
      console.log(this);
    },
  },
  2,
  3
); 
// 1. 判断context是否为null或undefined
// 2. 将函数添加到context对象上
// 3. 执行函数并获取返回值
// 4. 删除添加的属性
// 5. 返回结果

