const http = require("http");
const http = require("/HTML")


const reqListener = http.createServer(function (req, res){

    fs.readFile(__dirname + "/Website.html")
        .then(content => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(content);
        })
});

const server = http.createServer(reqListener);
server.listen(65, localhost, () => {
    console.log('Server is listening on port 65'); //server is on http://localhost:65/
});
