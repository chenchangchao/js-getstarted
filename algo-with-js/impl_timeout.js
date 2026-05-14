/*
封装一个超时处理功能
*/

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

function withTimeout(promise, ms) {
  let timeout = delay(ms).then(() =>
    Promise.reject(new Error("Timedout after " + ms + "ms"))
  );
  return Promise.race([promise, timeout]);
}

let slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("slow promise resolved"), 1000)
);
withTimeout(slowPromise, 1000)
  .then((result) => console.log(result))
  .catch((error) => console.error); // Timedout after 50ms
