// -> console.log("Good Luck for your future");

// -> File System...

// const fs = require('fs').writeFileSync;
// fs('code.txt','some code...');
// fs.writeFileSync("secs.txt","Good Luck for you Node Js journey!!");



// ->
// console.log(__dirname);
// console.log(__filename);




//-> Create Server on local system...

// const http = require("http");
// http.createServer((req,res)=>{
//     res.write("<h1>Good Luck for Node JS journey</h1>");
//     res.end();
// }).listen(4500)



// -> Color package for text...

// const color = require('colors');
// console.log("Hello World".yellow);



// -> 1) Create an first API of static data(without db)...
//  2) data from one file to another...
// Video(11)

// const data = require("./data")
// const http = require("http");
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'kuch-bhi/json'});
// res.write(JSON.stringify(data))
// res.end();
// }).listen(8000);



// -> Getting input from Command line...

// console.log(process.argv);

// const { log } = require("console");
// const fs = require("fs");

// const data = process.argv;

// if(data[2]=="add"){
//     fs.writeFileSync(data[3],data[4]);
// }

// else if(data[2]=="remove"){
//     fs.unlinkSync(data[3]);
// }
// else{
//     console.log("invalid input!!");
// }





// Create n files into a specific folder...

// const fs = require('fs');
// const path = require ('path')

// const dirPath = path.join(__dirname,'files');           //it is used for path

// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello.txt${i}`,"This is the files folder")
// }

// // list files from the folder (files)

// fs.readdir(dirPath,(err,items)=>{
//     console.log(items);
// })




// ********************************************************EXPRESS.JS*********************************************************************************

// Create an API with Route

const express = require('express');
const app = express();                          // for execute mode

app.get("/", (req, resp) => {
    console.log(req.query.dev)
    resp.send(`Welcome,${req.query.dev}`);
});

app.get("/about", (req, resp) => {
    resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
    resp.send("Welcome, This is a Help Page");
});


app.listen(8000);