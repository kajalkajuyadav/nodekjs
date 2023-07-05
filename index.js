const fs = require("fs")
const http = require("http")

http.createServer((req ,res)=>{
const filename ="index.html"

    if(req.url=="/home"){
        fs.readFile(filename,"utf-8",(err,data)=>{
            if(err){
                console.log(err)
                res.writeHead(500,{"content-type":"text/html"})
                res.end("sever on")
                return;
            }
        })
    }
    else if(req.url=="/submit"){
        fs.readFile(filename,"utf-8",(err,data)=>{
            // res.send(req.query)
            res.end(data)
        })
     }


}).listen(7000)