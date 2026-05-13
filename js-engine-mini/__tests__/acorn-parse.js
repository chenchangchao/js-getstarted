import * as acorn from "acorn";
import jsx from "acorn-jsx";

/*

利用acorn库进行词法分析
*/
const getJSXTokens = (code, ecmaVersion = "latest") => {
  const JSXParser = acorn.Parser.extend(jsx());
  const tokenObj = acorn.tokenizer(code, {
    ecmaVersion: ecmaVersion,
    sourceType: "module",
    location: true,
    plugins: {
      jsx: true,
    },
  });
  const tokens = [];
  let token = tokenObj.getToken();
  console.log(token);
  // const parser = acorn.Parser.extend(acorn.plugins.jsx());
  const ast = JSXParser.parse(code, {
    ecmaVersion: "latest",
    sourceType: "module",
    onToken: (token) => {
      tokens.push(token);
    },
  });
  return { ast, tokens };
};

const { ast, tokens } = getJSXTokens("const a = <div>hello</div>;", "latest");
console.log(`Tokens:${tokens.length}`);
tokens.forEach((token) => {
  console.log(`Type: ${token.type.label}, Value: ${token.value}`);
});
console.log(JSON.stringify(ast, null, 2));

const getJSToken = (code, ecmaVersion = "11") => {
  const tokenObj = acorn.tokenizer(code, {
    ecmaVersion,
    locations: true,
  });
  const tokens = [];
  let token = tokenObj.getToken();
  console.log(token);
  while (token.end !== token.start) {
    tokens.push(token);
    token = tokenObj.getToken();
  }
  return tokens;
};

const tokens2 = getJSToken(`const a= 1+1;`); // 最终输出Token数组
console.log(`tokens2: ${tokens2.length}`);
tokens2.forEach((token) => {
  console.log(`Type: ${token.type.label}, Value: ${token.value}`);
});
