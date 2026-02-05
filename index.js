// const http=require('http');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello World!\n');
// });

// const PORT = 3000;
// server.listen(PORT, ()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==='/data' && req.method==='GET'){
        fs.readFile('data.json','utf8',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Error reading data file');
            } else{
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(data);
            }
        });
    } else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Not Found');
    }
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
// const data = fs.readFileSync('data.json', 'utf8', (err,data)=>{
//     if(err){
//         console.log("Error", err);
//     } else{
//         console.log("Data", data);
//     }
// });