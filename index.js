const http=require("http")//core module
const {dummy}=require("./dummy")


const details=JSON.stringify(dummy)
const app=http.createServer((req,res)=>{
    console.log(req.url,'fetch the path');

    if(req.url==='/post'){
        res.write(details)
        res.end();
    }
    else if(req.url==='/node'){
        res.write("<h1>NODE</h1>")
        res.write("<p>Node.js is an open source server environment.Node.js allows you to run JavaScript on the server.A common task for a web server can be to open a file on the server and return the content to the client.Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.Node.js is an open source server environment.Node.js allows you to run JavaScript on the server.A common task for a web server can be to open a file on the server and return the content to the client.Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</p>")
        res.end();
    }
    else if(req.url==='/read'){
        res.write("READ PAGE IS HERE Read the comments")
        res.end();
    }
    else{
        res.write("404 page not found")
        res.end();
    }

})
app.listen(5000,()=>{
    try{  console.log('server is running.....')}
    catch(err){
        console.log('Error Found',err)
    }
})