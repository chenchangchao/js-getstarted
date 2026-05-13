import * as acorn from "acorn";
import Visitor from "./visitor";
import Intepreter from "./interpreter";

export default function (code, ecmaVersion = "latest") {
  // 使用acorn解析代码，生成AST语法树
  const ast = acorn.parse(code, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: true,
  });

  // 创建一个Visitor实例
  const visitor = new Visitor();

  // 创建一个解释器实例
  const interpreter = new Intepreter(visitor);

  // 执行解释器，传入AST语法树的根节点
  interpreter.interpreter(ast);
}
