// const { readFile, writeFile } = require('fs')


// readFile('./content/subfolder/text.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })



const {readFile, writeFile} = require('fs');


const utf8 = 'utf8';
const filefirst = './content/subfolder/text.txt';
const filesecond = './content/subfolder/second.txt';
const fileresult = './content/subfolder/result_async.txt';

// // Use fs.readFile to read files asynchronously
// fs.readFile(filefirst, utf8, (err, firstData) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   fs.readFile(filesecond, utf8, (err, secondData) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     const result = `Result: ${firstData} & ${secondData}`;

//     // Use fs.writeFile to write the result to a file asynchronously
//     fs.writeFile(fileresult, result, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
      
//       console.log(`Result written to ${result}`);
//     });
//   });
// });

console.log("start")
readFile(filefirst, utf8, (err,firstData)=>{
    if(err){
        console.error(err)
        return
    }
    readFile(filesecond,utf8,(err,secondData)=>{
        if(err){
            console.error(err)
            return
        }
    const result = `Result:- ${firstData} & ${secondData}`;

    writeFile(fileresult,result,(err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log("done with this task...")
    })
    console.log(result);
    })
});

console.log("starting next task...")

