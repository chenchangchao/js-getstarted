// 手写setTimeout函数

/**
 * 该函数可以模拟setTimeout的行为,即在给定的延迟时间后执行回调函数
 * @param {Function} callback 回调函数
 * @param {Number} delay 延迟时间
 * @returns {Number} 定时器的ID
 */
function mySetTimeout(callback, delay) {
  // 定义一个变量来存储定时器的ID
  let timerId = null;

  // 定义一个函数来执行回调函数
  function executeCallback() {
    callback();
    // 清除定时器
    clearTimeout(timerId);
  }

  // 使用setTimeout来模拟延迟
  timerId = setTimeout(executeCallback, delay);

  // 返回定时器的ID
  return timerId;
}
// 测试mySetTimeout函数
mySetTimeout(() => {
  console.log("Hello, world!");
}, 2000); // 2秒后输出"Hello, world!"
// 手写setInterval函数
function mySetInterval(callback, interval) {
  // 定义一个变量来存储定时器的ID
  let timerId = null;

  // 定义一个函数来执行回调函数
  function executeCallback() {
    callback();
    // 递归调用setInterval
    timerId = setTimeout(executeCallback, interval);
  }

  // 使用setTimeout来模拟间隔
  timerId = setTimeout(executeCallback, interval);

  // 返回定时器的ID
  return timerId;
}
// 测试mySetInterval函数
mySetInterval(() => {
  console.log("Hello, world!");
}, 1000); // 每秒输出"Hello, world!"

// 手写setImmediate函数
function mySetImmediate(callback) {
  // 使用setTimeout来模拟setImmediate
  return setTimeout(callback, 0);
}
// 测试mySetImmediate函数
mySetImmediate(() => {
  console.log("Hello, world!");
}); // 立即输出"Hello, world!"
// 手写Promise.race函数
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(resolve, reject);
    }
  });
}
// 测试myPromiseRace函数
const promise1_1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);
const promise1_2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2"), 500)
);
// 手写Promise.all函数
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
// 测试myPromiseAll函数
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.resolve(4);
