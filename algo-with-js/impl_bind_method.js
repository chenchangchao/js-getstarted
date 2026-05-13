/**
 * A custom implementation of the `bind` method.
 *
 * This method creates a new function that, when called, has its `this` keyword set to the provided `context`,
 * with a given sequence of arguments preceding any provided when the new function is called.
 *
 * @param {Object} context - The object to which the `this` keyword should refer inside the function.
 * @param {...*} args - Additional arguments to prepend to the arguments provided to the bound function.
 * @returns {Function} A new function that, when invoked,
 * will call the original function with `this` set to the specified `context`.
 */

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  //判断当前函数是否通过new关键字调用
  if (typeof fn !== "function") {
    throw new TypeError(
      "Function.prototype.myBind - what is trying to be bound is not callable"
    );
  }
  return function (...restArgs) {
    // console.log(arguments);
    // console.log(args);
    // console.log(restArgs);
    // console.log(this);
    // console.log(arguments.callee);
    // console.log(this);
    // console.log(this === globalThis);
    // console.log(this === window);
    // console.log(this === undefined);
    // console.log(this === null);
    // console.log(this === global);
    // console.log(this === globalThis);
    console.log(new.target);
    //判断当前函数是否通过new关键字调用
    if (new.target) {
      return new fn(...args, ...restArgs);
    }
    //判断当前函数是否为箭头函数
    else if (!fn.hasOwnProperty("prototype")) {
      return fn(...args, ...restArgs);
    } else {
      return fn.apply(context, args.concat(restArgs));
    }

    // fn.apply(context, arguments);
  };
};

const obj = {
  a: 1,
  b: 2,
};
const fn = function () {
  console.log(this.a, this.b);
};
const boundFn = fn.myBind(obj);
function fn2(a, b, c, d, e, f) {
  console.log(this.a, this.b, this.c, this.d, this.e, this.f, a, b, c, d, e, f);
  console.log(this);
}
const boundFn2 = fn2.myBind(obj, 1, 2, 3, 4, 5, 6);
boundFn(); // 1 2
boundFn2(); // 1 2 undefined undefined undefined undefined 1 2 3 4 5 6
// 1 2
const r = new boundFn2(); // 1 2 undefined undefined undefined undefined 1 2 3 4 5 6
console.log(r); // boundFn2 {}
const fn3 = (a, b) => {
  console.log(this);
  console.log(this.a, this.b);
  console.log(a, b);
};
const boundFn3 = fn3.myBind(obj, 1, 2);
boundFn3(); // 1 2
