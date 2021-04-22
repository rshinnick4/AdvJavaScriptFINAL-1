const http = require("http");

const server = http.createServer(function(req, res){
    
    res.setHeader('Content-type', 'html');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); //status code HTTP 200 / OK

    let data = "/html.html"
    res.end(html);
});

server.listen(65, function(){
    console.log("listening on port 65"); //running on http://localhost:65/
})

const host = 'localhost';
const port = 65;