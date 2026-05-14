/*
本质上写一个构造器
两个阶段，3个状态，pending,fufilled,rejected

promiseA+规范
* https://promisesaplus.com/
* https://tc39.es/ecma262/
* https://tc39.es/ecma262/#sec-promise-objects
*/

class MyPromise{
    /*创建一个promise
    @Param(Function) executor: 用来接受两个参数，分别是resolve和reject
    */
    constructor(executor){  
        this._status = 'pending';//状态
        this._value = undefined;//数据
        // executor(this.resolve.bind(this),this.reject.bind(this) );
        // executor(this._resolve,this._reject );
        // 会报错，TypeError: Cannot set properties of undefined (setting '_status')
        executor(this._resolve.bind(this),this._reject.bind(this) );
        //这里的this是当前新创建的promise
    }
    /*
    私有函数，下划线开头，标记当前任务完成或拒绝
    */
   _resolve(data){
    this._status = 'resolved';
    this._value = data;
    console.log(data);
    console.log('resolve');
   };
   _reject(reason){
    this._status = 'rejected';
    this._value = reason;
    console.log(reason);
    console.log('reject');
   };
   _onFulfilled(){};
   _onRejected(){};
   _finally(){};
}

// MyPromise.prototype.resolve = function(value){
//     this._resolve(value);
// }
// MyPromise.prototype.reject = function(reason){
//     this._reject(reason);
// }
new MyPromise((resolve,reject)=>{
    resolve(123);
});
const pro1 = new MyPromise((resolve,reject)=>{
    resolve(456);
});
console.log(pro1);

const pro2 = new MyPromise((resolve,reject)=>{
    reject(789);
});
console.log(pro2);

Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res);
});

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
}).then(() => {
    console.log(7);
})
