const lod = require("lodash");

const items = [1,[2,[4,3]]];
const newitems = lod.flattenDeep(items);
console.log(newitems);