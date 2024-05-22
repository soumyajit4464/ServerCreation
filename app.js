const http = require("http")
const fs = require("fs")
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { "Content-type" : "text/html"})
    fs.readFile("index.html", function(error, data){
        if (error) {
            res.writeHead(404)
            res.write("Error: File Not Found")
        } else {
            res.write(data)
        }
        res.end()
    })
})
// .listen(port);

server.listen(port, function(err){
    if (err) {
        console.log("Something went wrong!")
    } else {
        console.log("Server running on port " + port)
    }
})