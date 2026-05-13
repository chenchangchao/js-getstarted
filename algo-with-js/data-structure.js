class Stack {
  constructor() {
    var items = [];
    this.push = function (element) {
      items.push(element);
    };
    this.pop = function () {
      return items.pop();
    };
    this.peek = function () {
      return items[items.length - 1];
    };
    this.isEmpty = function () {
      return items.length == 0;
    };
    this.size = function () {
      return items.length;
    };
    this.clear = function () {
      items = [];
    };
    this.print = function () {
      console.log(items.toString());
    };
  }
}
// https://www.happycoders.eu/algorithms/implement-priority-queue-using-heap/
class Queue {
  constructor() {
    var items = [];
    this.enqueque = function (element) {
      items.push(element);
    };
    this.dequeue = function () {
      return items.shift();
    };
    this.front = function () {
      return items[0];
    };
    this.isEmpty = function () {
      return items.length == 0;
    };
    this.size = function () {
      return items.length;
    };
    this.print = function () {
      console.log(items.toString());
    };
  }
}

class LinkedListQueue {
  constructor() {}
}
class Set {
  constructor() {
    var items = [];
    this.has = function (value) {
      // return  value in items;
      return items.hasOwnProperty(value);
    };
    this.add = function (value) {
      if (!this.has(value)) {
        items[value] = value;
        return true;
      }
      return false;
    };
    this.remove = function (value) {
      if (this.has(value)) {
        delete items[value];
        return true;
      }
      return false;
    };
    this.clear = function () {
      items = [];
    };
    this.size = function () {
      return Object.keys(items).length;
    };
    this.print = function () {
      console.log(items.toString());
    };
  }
}

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.has(4);
set.print();

class Dictionary {
  constructor() {
    var items = [];
    this.has = function (value) {
      // return  value in items;
      return items.hasOwnProperty(value);
    };
    this.set = function (key, value) {
      items[key] = value;
    };
    this.remove = function (key) {
      if (this.has(key)) {
        delete items[key];
        return true;
      }
      return false;
    };
    this.get = function (key) {
      // key不存在，返回undefined.
      return this.has(key) ? items[key] : undefined;
    };
    this.values = function () {
      var values = [];
      for (var k in items) {
        if (this.has(k)) {
          values.push(items[k]);
        }
      }
      return values;
    };
    this.getItems = function () {
      return items;
    };
    this.clear = function () {
      items = [];
    };
    this.size = function () {
      return Object.keys(items).length;
    };
    // this.print = function () {
    //   console.log(items.toString());//结果为空
    // };
  }
}

class Dictionary2 {
  constructor() {
    var items = [];
    this.has = function (value) {
      // return  value in items;
      return items.hasOwnProperty(value);
    };
    this.set = function (key, value) {
      items[key] = value;
    };
    this.remove = function (key) {
      if (this.has(key)) {
        delete items[key];
        return true;
      }
      return false;
    };
    this.get = function (key) {
      // key不存在，返回undefined.
      return this.has(key) ? items[key] : [];
    };
    this.values = function () {
      var values = [];
      for (var k in items) {
        if (this.has(k)) {
          values.push(items[k]);
        }
      }
      return values;
    };
    this.getItems = function () {
      return items;
    };
    this.clear = function () {
      items = [];
    };
    this.size = function () {
      return Object.keys(items).length;
    };
    // this.print = function () {
    //   console.log(items.toString());//结果为空
    // };
  }
}

var dict = new Dictionary();
dict.set("chen1", "chen1@360.cn");
dict.set("zhang", "zhang@fb.com");
dict.set("li", "li@gg.com");
dict.has("li");
dict.get("li");
class Graph {
  constructor() {
    var vertices = []; //记录顶点
    var adjList = new Dictionary2(); //记录邻接表
    var initializeColor = function () {
      var color = [];
      for (var i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white";
      }
      return color;
    };
    this.addVertex = function (v) {
      vertices.push(v);
      adjList.set(v, []);
    };
    this.addEdge = function (v, w) {
      adjList.get(v).push(w);
      adjList.get(w).push(v);
    };
    this.toString = function () {
      var s = "";
      // 遍历顶点
      for (var i = 0; i < vertices.length; i++) {
        s += vertices[i] + "->";
        var neighbors = adjList.get(vertices[i]);
        // 遍历顶点的关联顶点
        for (var j = 0; j < neighbors.length; j++) {
          s += neighbors[j] + " ";
        }
        s += "\n";
      }
      return s;
    };

    this.bfs = function (v, cb) {
      var color = initializeColor(),
        queue = new Queue();
      queue.enqueque(v);
      while (!queue.isEmpty()) {
        var u = queue.dequeue();
        // 取得一个包含其所有邻接点的邻接表
        neighbors = adjList.get(u);
        color[u] = "grey"; //我们发现了它，还未进行探索
        for (var i = 0; i < neighbors.length; i++) {
          var w = neighbors[i];
          if (color[w] == "white") {
            color[w] = "grey";
            queue.enqueque(w);
          }
        }
        color[u] = "black";
        if (cb) {
          return cb(u);
        }
      }
    };
  }
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// for (var ver in myVertices) {
//   graph.addVertex(ver);
// }
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString()); //注意跟graph.toString()在命令行输出不同

// BFS
/* 三种颜色表示状态
白色：该顶点没有被访问
灰色：该顶点被访问但是没有被探索
黑色：该顶点被访问且被完全探索
*/

function printNode(value) {
  console.log("Visited vertex:" + value);
}
graph.bfs(myVertices[0], printNode);

var numIslands = function (grid) {
  var ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      ans = ans + dfs(grid, i, j);
    }
  }
  return ans;
};

var dfs = function (grid, cur_i, cur_j) {
  if (
    cur_i < 0 ||
    cur_j < 0 ||
    cur_i >= grid.length ||
    cur_j >= grid[0].length
  ) {
    return 0;
  }
  var res = 1;
};

Array.prototype.equals = function (array) {
  if (!array) {
    return false;
  }

  if (array === this) {
    return true;
  }
  if (this.length != array.length) {
    return false;
  }
  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

