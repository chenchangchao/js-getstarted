function fn(){
 console.log(this);
}

//this的指向不确定，取决于调用时的环境
// fn();
const newFn = fn.bind({name:'newFn'});
newFn(); //{name:'newFn'}
const newFn2 = fn.bind(1);
newFn2();//1
new newFn2(); 
//this的指向不确定，取决于调用时的环境
//在全局作用域中，this指向window对象
//在模块作用域中，this指向module.exports对象
//在函数作用域中，this指向函数的调用者
//在对象作用域中，this指向对象本身
//在类作用域中，this指向类的实例对象


//在浏览器中，this指向window对象
//在node中，this指向module.exports
//在严格模式下，this指向undefined
//在函数中，this指向undefined
//在对象中，this指向对象本身
//在构造函数中，this指向新创建的对象
//在事件中，this指向触发事件的对象
//在setTimeout中，this指向window对象
//在setInterval中，this指向window对象
//在Promise中，this指向Promise对象
//在async函数中，this指向async函数的调用者
//在箭头函数中，this指向外层函数的this
//在bind中，this指向bind的第一个参数
//在call中，this指向call的第一个参数
//在apply中，this指向apply的第一个参数
//在with中，this指向with的第一个参数
//在eval中，this指向eval的第一个参数
//在new中，this指向new的第一个参数
//在setImmediate中，this指向setImmediate的第一个参数
//在requestAnimationFrame中，this指向requestAnimationFrame的第一个参数
//在fetch中，this指向fetch的第一个参数
//在XMLHttpRequest中，this指向XMLHttpRequest的第一个参数
//在window中，this指向window对象
//在document中，this指向document对象
//在navigator中，this指向navigator对象
//在location中，this指向location对象
//在history中，this指向history对象
//在screen中，this指向screen对象
//在console中，this指向console对象
//在localStorage中，this指向localStorage对象
//在sessionStorage中，this指向sessionStorage对象
//在indexedDB中，this指向indexedDB对象
//在WebSocket中，this指向WebSocket对象
//在WebWorker中，this指向WebWorker对象
//在ServiceWorker中，this指向ServiceWorker对象
//在Cache中，this指向Cache对象
//在CacheStorage中，this指向CacheStorage对象
//在FileSystem中，this指向FileSystem对象
//在FileReader中，this指向FileReader对象
//在FileWriter中，this指向FileWriter对象
//在FileSystemEntry中，this指向FileSystemEntry对象
//在FileSystemDirectoryEntry中，this指向FileSystemDirectoryEntry对象
//在FileSystemFileEntry中，this指向FileSystemFileEntry对象
//在FileSystemDirectoryReader中，this指向FileSystemDirectoryReader对象
//在FileSystemFileHandle中，this指向FileSystemFileHandle对象
//在FileSystemDirectoryHandle中，this指向FileSystemDirectoryHandle对象
//在FileSystemHandle中，this指向FileSystemHandle对象
//在FileSystemWritableFileHandle中，this指向FileSystemWritableFileHandle对象
//在FileSystemReadableFileHandle中，this指向FileSystemReadableFileHandle对象
//在FileSystemSyncAccessHandle中，this指向FileSystemSyncAccessHandle对象
//在FileSystemSyncAccessHandleSync中，this指向FileSystemSyncAccessHandleSync对象
//在FileSystemSyncAccessHandleAsync中，this指向FileSystemSyncAccessHandleAsync对象
//在FileSystemSyncAccessHandleSyncSync中，this指向FileSystemSyncAccessHandleSyncSync对象
//在FileSystemSyncAccessHandleAsyncSync中，this指向FileSystemSyncAccessHandleAsyncSync对象
//在FileSystemSyncAccessHandleSyncAsync中，this指向FileSystemSyncAccessHandleSyncAsync对象
//在FileSystemSyncAccessHandleAsyncAsync中，this指向FileSystemSyncAccessHandleAsyncAsync对象
//在FileSystemSyncAccessHandleSyncSyncSync中，this指向FileSystemSyncAccessHandleSyncSyncSync对象
//在FileSystemSyncAccessHandleAsyncSyncSync中，this指向FileSystemSyncAccessHandleAsyncSyncSync对象
//在FileSystemSyncAccessHandleSyncAsyncSync中，this指向FileSystemSyncAccessHandleSyncAsyncSync对象
//在FileSystemSyncAccessHandleAsyncAsyncSync中，this指向FileSystemSyncAccessHandleAsyncAsyncSync对象
//在FileSystemSyncAccessHandleSyncSyncAsync中，this指向FileSystemSyncAccessHandleSyncSyncAsync对象
//在FileSystemSyncAccessHandleAsyncSyncAsync中，this指向FileSystemSyncAccessHandleAsyncSyncAsync对象 
console.log(this);
