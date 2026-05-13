class EventBus2 {
  private listeners: { [key: string]: Function[] } = {};

  on(event: string, listener: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event: string, ...args: any[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => listener(...args));
    }
  }

  off(event: string, listener: Function) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (l) => l !== listener
      );
    }
  }
}
export const eventBus2 = new EventBus2();

class EventBus {
  // Singleton instance
  // 使用Set来存储事件监听器，避免重复添加
  events: Record<string, Set<(...args: any[]) => void>> = {};
  constructor() {
    this.events = {};
  }
  on(eventName: string, callback: (...args: any[]) => void) {
    // if (!this.events[eventName]) {
    //   this.events[eventName] = new Set();
    // }
    // this.events[eventName].add(callback);
    (this.events[eventName] ??= new Set()).add(callback);
  }
  off(eventName: string, callback: (...args: any[]) => void) {
    // if (this.events[eventName]) {
    //   this.events[eventName].delete(callback);
    // }
    this.events[eventName]?.delete(callback);
  }
  emit(eventName: string, ...args: any[]) {
    // if (this.events[eventName]) {
    //   this.events[eventName].forEach((callback) => {
    //     callback(...args);
    //   });
    // }
    this.events[eventName]?.forEach((callback) => {
      callback(...args);
    });
  }
  // 只执行一次的事件
  once(eventName: string, callback: (...args: any[]) => void) {
    const onceCallback = (...args: any[]) => {
      callback(...args);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
  }
  // 清除所有事件
  clear() {
    this.events = {};
  }
  // 清除指定事件
  clearEvent(eventName: string) {
    if (this.events[eventName]) {
      this.events[eventName].clear();
    }
  }
  // 获取所有事件
  getAllEvents() {
    return this.events;
  }
  // 获取指定事件
  getEvent(eventName: string) {
    return this.events[eventName];
  }
  // 获取所有事件名称
  getAllEventNames() {
    return Object.keys(this.events);
  }
  // 获取指定事件名称
  getEventName(eventName: string) {
    return this.events[eventName] ? eventName : null;
  }
  // 获取指定事件的监听器数量
  getEventCount(eventName: string) {
    return this.events[eventName] ? this.events[eventName].size : 0;
  }
  // 获取所有事件的监听器数量
  getAllEventCount() {
    let count = 0;
    for (const eventName in this.events) {
      count += this.events[eventName].size;
    }
    return count;
  }
  // 获取指定事件的监听器
  getEventListeners(eventName: string) {
    return this.events[eventName] ? Array.from(this.events[eventName]) : [];
  }
  // 获取所有事件的监听器
  getAllEventListeners() {
    const listeners: { [key: string]: Function[] } = {};
    for (const eventName in this.events) {
      listeners[eventName] = Array.from(this.events[eventName]);
    }
    return listeners;
  }
}

export const eventBus = new EventBus();
// eventBus.emit("test", "test");
// eventBus.on("test", (data) => {
//   console.log("test", data);
// });
// eventBus.emit("test", 1, 2, `test`);

export const Events = {
  INCREMENT: Symbol('increment'),
  DECREMENT: Symbol('decrement'),
  RESET: Symbol('reset')
}
