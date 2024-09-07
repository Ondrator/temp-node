const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('here is short history')
    }
   res.end(`
    <h1>
        Ooops
    </h1>
    <p>
        cant find the page you are looking for
        <a href="/">Go back</a>
    </p>`)
    
})

server.listen(5000);