const {readFileSync, writeFileSync} = require('fs')
console.log("start....")
const first = readFileSync('./content/subfolder/text.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

// console.log(first);
// console.log(second);

// writeFileSync(
//     './content/subfolder/result_sync.txt',
//     `Result is : ${first}, ${second}`,
//     {flag: 'a'}
// )

writeFileSync(
    './content/subfolder/result_sync.txt',
    `Result is : ${first}, ${second}`,
    {flag: 'w'}
)

console.log("done with this task...")
console.log("moving to next one..")