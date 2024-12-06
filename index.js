console.log("hi");
console.log(3+5)

const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' : 'text/html; charset=utf8'
    });
    res.end('<h1>Hello, World','utf-8');
});
server.listen(3000);