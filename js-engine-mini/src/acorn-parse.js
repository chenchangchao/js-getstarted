import * as acorn from "acorn";

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

const getToken = (code, ecmaVersion = "11") => {
  const tokenIterator = acorn.tokenizer(code, {
    ecmaVersion,
  });
  return [...tokenIterator];
};

const parse = (code, ecmaVersion = "11") => {
  const ast = acorn.parse(code, {
    ecmaVersion,
    sourceType: "module",
    locations: true,
  });
  return ast;
};

export { getJSToken, getToken, parse };
