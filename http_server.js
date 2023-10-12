const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our home page.")
    }
    if(req.url === "/about"){
        res.end("Welcome to about page..")
    }
    if(req.url === "/contact"){
        res.end("Welcome to contact page..")
    }
    // res.end(`
    // <h1>Oops</h1>
    // <h2>We can't find the page you are looking for..</h2>
    // <p>Back to <a href="/">Home</a> Page</p>
    // // `)
    // res.end(`<h1>Back <a href="/">Home</a></h1>`)
})

server.listen(5000);
