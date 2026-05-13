//手写实现new关键字

/**
 * Custom implementation of the `new` keyword.
 * Creates a new object with the specified constructor function and arguments.
 *
 * @param {Function} constructor - The constructor function to instantiate.
 * @param {...*} args - The arguments to pass to the constructor function.
 * @returns {Object} The newly created object.
 */

function myNew(constructor, ...args) {
  // 1. 创建一个新对象
  const obj = {};

  // 2. 设置原型
  Object.setPrototypeOf(obj, constructor.prototype);

  // 3. 执行构造函数
  const result = constructor.apply(obj, args);

  // 4. 返回对象
  return result instanceof Object ? result : obj;
}
// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = myNew(Person, 'John', 30);
console.log(person.name); // John
console.log(person.age); // 30
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(person.constructor === Person); // true
console.log(person.constructor === Object); // false
console.log(person.__proto__ === Person.prototype); // true
console.log(person.__proto__.__proto__ === Object.prototype); // true
console.log(person.__proto__.__proto__.__proto__ === null); // true
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype) === null); // true
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(Person.prototype)); // true
