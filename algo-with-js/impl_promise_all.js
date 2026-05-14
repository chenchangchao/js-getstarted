/*
问题：使用Promise.all的场景有哪些？
答案：
1.并行执行任务，(是多线程嘛)
2.资源聚合
3.异步任务编排，依赖多个异步前置条件
4.超时控制和错误管理
5.并发限制，避免资源消耗过多
6.批量操作成功和失败处理，实现多个异步操作的集合，统一错误管理的工具
7.优化用户体验，例如加载多个资源，同时展示加载进度

*/
// v1 impl 
Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let i = 0;
  const result = [];
  //不能用Push，因为要保证数组的顺序
  for (const prom of proms) {
    const index = 1;
    i++;
    // Promise.resolve(prom); //全部转换为promise
    Promise.resolve(prom).then((data) => {
      //1.将完成的数据加入到最终结果，判断是否全部完成
      //2.完成一个数据后，i--
      //3.当i=0时，将最终结果返回
      result[index] = data;
      i--;
      if (i === 0) {
        res(result);
      }
    }, rej);
  }
  if (i === 0) {
    // return Promise.resolve([]);
    res([]);
  }

  return p;
};
// Promise.myAll([]);
Promise.myAll([1, 2, 3, 4]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
Promise.myAll([1, 2, Promise.reject(2.5), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

Promise.myAll([1, 2, Promise.reject(2.5), Promise.reject(4), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

/*
传递的proms不一定是个数组，而是一个任何可以迭代对象，比如一个类似数组的对象，
数组使用.length判断，字典使用.size判断
其中一个被拒绝，整个被拒绝
拒绝多次，以第一次为准
*/
//  v2 impl
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let completedCount = 0;
    const results = [];
    promises.forEach((p, index) => {
      // 确保p是一个Promise
      const promise = typeof p === "function" ? p() : Promise.resolve(p);
      promise
        .then((value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// 使用立即解决的Promise模拟
myPromiseAll([
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
])
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

myPromiseAll([]);
myPromiseAll([1, 2, 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
myPromiseAll([1, 2, Promise.reject(2.5), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

// v3 impl 
Promise.myAll = function (proms) {
    let res, rej;
    const p = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });
    let i = proms.length; // 初始化i为proms的长度
    const result = new Array(i); // 初始化结果数组，预留空间以保持顺序
    let hasRejected = false; // 添加一个标志来追踪是否有Promise被拒绝
  
    for (let index = 0; index < i; index++) {
      const prom = proms[index];
      Promise.resolve(prom).then((data) => {
        // 将完成的数据加入到最终结果
        result[index] = data;
        i--;
        // 当所有Promise都已完成或被拒绝后，结束
        if (i === 0) {
          if (!hasRejected) {
            res(result);
          } else {
            // 如果有Promise被拒绝，这里应调用reject，但需注意reject只应被调用一次
            // 这里简化处理，实际情况可能需要更复杂的逻辑来处理多个reject
            rej("At least one promise was rejected");
          }
        }
      }, (error) => {
        // 只要有Promise被拒绝，就设置标志，并结束循环
        if (!hasRejected) {
          hasRejected = true;
          rej(error);
        }
        // 注意：实际此处的i--不需要，因为我们已经确定要reject了
      });
    }
  
    // 初始时无需直接调用res([])，因为那会在循环开始前就结束Promise
    return p;
  };
  
  Promise.myAll([1, 2, 3, 4]).then(
    (res) => console.log(res),
    (rej) => console.log(rej)
  );
  
  Promise.myAll([1, 2, Promise.reject(2.5), 3]).then(
    (res) => console.log(res),
    (rej) => console.log(rej)
  );
  
  Promise.myAll([1, 2, Promise.reject(2.5), Promise.reject(4), 3]).then(
    (res) => console.log(res),
    (rej) => console.log(rej)
  );

