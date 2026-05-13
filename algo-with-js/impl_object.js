//手写object.keys方法

/**
 * Returns an array of a given object's own property names.
 * @param {Object} obj - The object.
 * @returns {string[]} An array of property names.
 */
function myObjectKeys(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}
// 测试
const obj = {
  name: "Alice",
  age: 25,
  city: "New York",
};
const keys = myObjectKeys(obj);
console.log(keys); // ['name', 'age', 'city']
//手写object.values方法
function myObjectValues(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
// 测试
const obj2 = {
  name: "Alice",
  age: 25,
  city: "New York",
};
const values = myObjectValues(obj2);
console.log(values); // ['Alice', 25, 'New York']
//手写object.entries方法
function myObjectEntries(obj) {
  const entries = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}
// 测试
const obj3 = {
  name: "Alice",
  age: 25,
  city: "New York",
};
const entries = myObjectEntries(obj3);
console.log(entries); // [['name', 'Alice'], ['age', 25], ['city', 'New York']]
//手写object.assign方法
function myObjectAssign(target, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
// 测试
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const result = myObjectAssign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3 }
//手写object.freeze方法
function myObjectFreeze(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      Object.defineProperty(obj, key, {
        writable: false,
        configurable: false,
      });
    }
  }
  return obj;
}
// 测试
const obj4 = { name: "Alice", age: 25 };
myObjectFreeze(obj4);
obj4.name = "Bob"; // 无法修改
console.log(obj4.name); // 'Alice'
//手写object.seal方法
function myObjectSeal(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      Object.defineProperty(obj, key, {
        configurable: false,
      });
    }
  }
  return obj;
}
// 测试
const obj5 = { name: "Alice", age: 25 };
myObjectSeal(obj5);
obj5.name = "Bob"; // 可以修改
console.log(obj5.name); // 'Bob'
// 但无法删除属性
delete obj5.name; // 无法删除
console.log(obj5.name); // 'Bob'
//手写object.is方法
function myObjectIs(obj1, obj2) {
  if (obj1 === obj2) {
    return obj1 !== 0 || 1 / obj1 === 1 / obj2;
  }
  return obj1 !== obj1 && obj2 !== obj2; // NaN
}
// 测试
console.log(myObjectIs(NaN, NaN)); // true
console.log(myObjectIs(0, -0)); // false
console.log(myObjectIs(0, 0)); // true
console.log(myObjectIs(-0, -0)); // true
console.log(myObjectIs(1, "1")); // false
console.log(myObjectIs(null, undefined)); // false
console.log(myObjectIs(undefined, undefined)); // true
console.log(myObjectIs({}, {})); // false
console.log(myObjectIs([], [])); // false
console.log(myObjectIs(true, true)); // true
console.log(myObjectIs(false, false)); // true
console.log(myObjectIs(true, false)); // false
console.log(myObjectIs(false, true)); // false
console.log(myObjectIs(null, null)); // true
console.log(myObjectIs(undefined, null)); // false
console.log(myObjectIs(undefined, undefined)); // true
console.log(myObjectIs(1, 1)); // true
console.log(myObjectIs(1, 2)); // false
console.log(myObjectIs("1", 1)); // false
console.log(myObjectIs("1", "1")); // true
console.log(myObjectIs("1", "2")); // false

//手写object.getOwnPropertyDescriptor方法
function myObjectGetOwnPropertyDescriptor(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return {
      value: obj[prop],
      writable: true,
      enumerable: true,
      configurable: true,
    };
  }
  return undefined;
}
// 测试
const obj6 = { name: "Alice", age: 25 };
const descriptor = myObjectGetOwnPropertyDescriptor(obj6, "name");
console.log(descriptor); // { value: 'Alice', writable: true, enumerable: true, configurable: true }
//手写object.getOwnPropertyDescriptors方法
function myObjectGetOwnPropertyDescriptors(obj) {
  const descriptors = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      descriptors[key] = myObjectGetOwnPropertyDescriptor(obj, key);
    }
  }
  return descriptors;
}
// 测试
const obj7 = { name: "Alice", age: 25 };
const descriptors2 = myObjectGetOwnPropertyDescriptors(obj7);
console.log(descriptors2); // { name: { value: 'Alice', writable: true, enumerable: true, configurable: true }, age: { value: 25, writable: true, enumerable: true, configurable: true } }

//手写object.getOwnPropertyNames方法
function myObjectGetOwnPropertyNames(obj) {
  const names = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      names.push(key);
    }
  }
  return names;
}
// 测试
const obj8 = { name: "Alice", age: 25 };
const names = myObjectGetOwnPropertyNames(obj8);
console.log(names); // ['name', 'age']
//手写object.getPrototypeOf方法
function myObjectGetPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}
// 测试
const obj9 = { name: "Alice", age: 25 };
const prototype = myObjectGetPrototypeOf(obj9);
console.log(prototype); // { name: 'Alice', age: 25 }
//手写Object.map方法

/**
 * Maps a given object's values to a new object with the same keys.
 * @param {Object} obj - The object to map.
 * @param {Function} callback - The function to map each value with.
 * @returns {Object} A new object with the same keys, but with the mapped values.
 */
function myObjectMap(obj, callback) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = callback(obj[key], key, obj);
    }
  }
  return result;
}
// 测试
const obj10 = { name: "Alice", age: 25 };
const mappedObj = myObjectMap(obj10, (value, key) => {
  return `${key}: ${value}`;
});
console.log(mappedObj); // { name: 'name: Alice', age: 'age: 25' }
//手写Object.filter方法

/**
 * Filters an object by applying a predicate function to each value.
 * @param {Object} obj - The object to filter.
 * @param {Function} predicate - The function to test each value. It receives the value, key, and the object as arguments.
 * @returns {Object} A new object with key-value pairs that satisfy the predicate.
 */

function myObjectFilter(obj, predicate) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key], key, obj)) {
      result[key] = obj[key];
    }
  }
  return result;
}
// 测试
const obj11 = { name: "Alice", age: 25, city: "New York" };
const filteredObj = myObjectFilter(obj11, (value, key) => {
  return typeof value === "string";
});
console.log(filteredObj); // { name: 'Alice', city: 'New York' }
//手写Object.reduce方法

/**
 * Reduces an object to a single value by applying a callback function to each value.
 *
 * @param {Object} obj - The object to reduce.
 * @param {Function} callback - The function to execute on each key-value pair.
 * It receives the accumulator, value, key, and the object as arguments.
 * @param {*} initialValue - The initial value of the accumulator.
 * @returns {*} The final accumulated value.
 */

function myObjectReduce(obj, callback, initialValue) {
  //if initialValue is not provided, set it to the first value of the object
  if (initialValue === undefined) {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
      return undefined;
    }
    initialValue = obj[keys[0]];
  }
  let accumulator = initialValue;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      accumulator = callback(accumulator, obj[key], key, obj);
    }
  }
  return accumulator;
}
// 测试
const obj12 = { name: "Alice", age: 25, city: "New York" };
const sum = myObjectReduce(
  obj12,
  (acc, value) => {
    return acc + value;
  },
  0
);
console.log(sum); // 50
const obj13 = { name: "Alice", age: 25, city: "New York" };
const sum13 = myObjectReduce(
  obj13,
  (acc, value) => {
    return acc + value;
  },
  0
);
console.log(sum13); // 50

function myObjectReduce2(obj, callback, initialValue) {
  // 参数校验
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Object must be a valid object");
  }

  const keys = Object.keys(obj);
  let startIndex = 0;
  let accumulator;

  // 处理初始值逻辑
  if (initialValue === undefined) {
    if (keys.length === 0) {
      throw new TypeError("Reduce of empty object with no initial value");
    }
    accumulator = obj[keys[0]];
    startIndex = 1; // 跳过第一个已作为初始值的属性
  } else {
    accumulator = initialValue;
  }

  // 优化迭代逻辑（仅处理自有属性）
  for (let i = startIndex; i < keys.length; i++) {
    const key = keys[i];
    accumulator = callback(accumulator, obj[key], key, obj);
  }

  return accumulator;
}

// 测试用例示例
console.log(myObjectReduce2({}, () => {}, 0)); // 正常返回0
console.log(myObjectReduce2({}, () => {})); // 抛出TypeError
console.log(myObjectReduce2([1, 2], (sum) => sum)); // 抛出TypeError（非对象参数）
//手写Object.entries方法
function myObjectEntries(obj) {
  const entries = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}
// 测试
const obj14 = { name: "Alice", age: 25, city: "New York" };
const entries14 = myObjectEntries(obj14);
console.log(entries14); // [['name', 'Alice'], ['age', 25], ['city', 'New York']]
//手写Object.fromEntries方法
function myObjectFromEntries(entries) {
  const obj = {};
  for (let [key, value] of entries) {
    obj[key] = value;
  }
  return obj;
}
// 测试
const entries15 = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
];
const obj15 = myObjectFromEntries(entries15);
console.log(obj15); // { name: 'Alice', age: 25, city: 'New York' }
