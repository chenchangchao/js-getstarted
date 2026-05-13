const code = `function sum(a, b){return a+b;}; const a = sum(1, 2);`

import { getToken, parse, run} from './src/index.js';
// const tokens = getToken(code, '11');

const ast = parse(code);
console.log(ast);

console.log(run(`let a = 1; if(a === 1){a = 2;}`))