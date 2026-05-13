//手写array.map 

/**
 *  Hand-rolled implementation of Array.prototype.map
 *  @param  {function}  callback  function to call on each element of the array
 *  @param  {object}    thisArg   optional object to use as the `this` argument
 *  @return {array}    new array with the results of calling callback on each element
 */
Array.prototype.myMap = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}
// Test the myMap function
const arr = [1, 2, 3, 4, 5];
const newArr = arr.myMap((item, index) => {
  return item * 2;
});
console.log(newArr); // [2, 4, 6, 8, 10]
//手写array.filter
Array.prototype.myFilter = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}
// Test the myFilter function
const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.myFilter((item, index) => {
  return item > 3;
});
console.log(newArr2); // [4, 5]
//手写array.reduce

/**
 *  Hand-rolled implementation of Array.prototype.reduce
 *  @param  {function}  callback  function to call on each element of the array
 *  @param  {object}    initialValue   optional object to use as the initial value of the accumulator
 *  @return {array}    the final value of the accumulator
 */
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
}
// Test the myReduce function
const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.myReduce((accumulator, item) => {
  return accumulator + item;
}, 0);
console.log(sum); // 15
//手写array.every
Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}
// Test the myEvery function
const arr4 = [1, 2, 3, 4, 5];
const allGreaterThanZero = arr4.myEvery((item) => {
  return item > 0;
});
console.log(allGreaterThanZero); // true
//手写array.some
Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}
// Test the mySome function
const arr5 = [1, 2, 3, 4, 5];
const anyGreaterThanThree = arr5.mySome((item) => {
  return item > 3;
});
console.log(anyGreaterThanThree); // true
//手写array.find
Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}
// Test the myFind function
const arr6 = [1, 2, 3, 4, 5];
const found = arr6.myFind((item) => {
  return item > 3;
});
console.log(found); // 4
//手写array.findIndex
Array.prototype.myFindIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}
// Test the myFindIndex function
const arr7 = [1, 2, 3, 4, 5];
const foundIndex = arr7.myFindIndex((item) => {
  return item > 3;
});
console.log(foundIndex); // 3
//手写array.includes
Array.prototype.myIncludes = function(value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
}
// Test the myIncludes function
const arr8 = [1, 2, 3, 4, 5];
const includesThree = arr8.myIncludes(3);
console.log(includesThree); // true
//手写array.indexOf
Array.prototype.myIndexOf = function(value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
}
// Test the myIndexOf function
const arr9 = [1, 2, 3, 4, 5];
const indexOfThree = arr9.myIndexOf(3);
console.log(indexOfThree); // 2
//手写array.lastIndexOf
Array.prototype.myLastIndexOf = function(value, fromIndex = this.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
}
// Test the myLastIndexOf function
const arr10 = [1, 2, 3, 4, 5, 3];
const lastIndexOfThree = arr10.myLastIndexOf(3);
console.log(lastIndexOfThree); // 5 

//手写array.splice
Array.prototype.mySplice = function(start, deleteCount, ...items) {
  const deletedItems = [];
  const arr = this.slice();
  for (let i = start; i < start + deleteCount; i++) {
    deletedItems.push(arr[i]);
  }
  arr.splice(start, deleteCount, ...items);
  return deletedItems;
}
// Test the mySplice function
const arr11 = [1, 2, 3, 4, 5];
const deletedItems = arr11.mySplice(1, 2, 6, 7);
console.log(deletedItems); // [2, 3]
console.log(arr11); // [1, 6, 7, 4, 5]
//手写array.slice
Array.prototype.mySlice = function(start, end) {
  const arr = [];
  for (let i = start; i < (end !== undefined ? end : this.length); i++) {
    arr.push(this[i]);
  }
  return arr;
}
// Test the mySlice function
const arr12 = [1, 2, 3, 4, 5];
const slicedArr = arr12.mySlice(1, 3); 

//
