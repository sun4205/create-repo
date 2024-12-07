console.log("hi");
console.log(3+5)

// const http = require("http");
// const {PORT=3000} = process.env;

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type' : 'text/html; charset=utf8'
//     });
//     res.end('<h1>Hello, World','utf-8');
// });
// server.listen(PORT);

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     const data = '';
//     req.on('data',(chunk)=>{
//         data += chunk.toString();
//     });
//     req.on('end',()=>{
//         console.log(JSON.parse(data));
//     })
// })

// server.listen(3000);

const server =http.createServer((req,res)=>{
    if(req.url ==='/songs' && req.method ==='GET'){
        console.log('get the list of the songs');
    }
})