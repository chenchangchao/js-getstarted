//浅拷贝

/**
 * Creates a shallow copy of the provided object or array.
 *
 * @param {Object|Array} obj - The object or array to be shallow copied.
 * @returns {Object|Array} A new object or array with the same top-level properties or elements.
 *                         The nested objects or arrays are not deeply copied.
 */

function myShallowCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 测试
let obj1_1 = { a: 1, b: { c: 2 } };
let obj1_2 = myShallowCopy(obj1_1);
console.log(obj1_2); // { a: 1, b: { c: 2 } }
console.log(obj1_2 === obj1_1); // false
let obj1_3 = [1, 2, 3];
let obj1_4 = myShallowCopy(obj1_3);
console.log(obj1_4); // [1, 2, 3]
console.log(obj1_4 === obj1_3); // false

// 深拷贝

/**
 * Creates a deep copy of the provided object or array.
 *
 * @param {Object|Array} obj - The object or array to be deeply copied.
 * @returns {Object|Array} A new object or array with the same properties or elements.
 *                         The nested objects or arrays are also deeply copied.
 */
function myDeepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => myDeepCopy(item));
  }
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = myDeepCopy(obj[key]);
    }
  }
  return newObj;
}
// 测试
let obj3 = { a: 1, b: { c: 2 } };
let obj4 = myDeepCopy(obj3);
console.log(obj4); // { a: 1, b: { c: 2 } }
console.log(obj4 === obj3); // false
console.log(obj4.b === obj3.b); // false
