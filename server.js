const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...")
        res.writeHead(200);
        res.end();
    } else {
        console.log("Sorry encountered 404")
        res.writeHead(404);
    }
    res.end();
}).listen(3000, function () {
    console.log("Listening for requests on port 3000...");
});
