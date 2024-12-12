// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
//     console.log(req.body);
//     res.statusCode =200;
//     res.statusMessage = 'OK';
//     res.setHeader('Content-Type','text/plain');
//     res.write('Hello');
//     res.write('World');
//     res.end();
// })
// server.listen(3000);
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type':'text/html; charset=utf8'
//     });
//     res.end('<h1>Hello World</h1>','utf-8');
// })

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     let data = '';
//     req.on('data', (chunk)=>{
//         data += chunk.toString();
//     });

//     req.on('end',()=>{
//         console.log(JSON.parse(data));
//     });
// });

// server.listen(3000);

const server = http.creatServer((req,res)=>{
    if(req.url === '/songs' && req.method === 'GET'){
        console.log('GET the list of songs');
    }
})
