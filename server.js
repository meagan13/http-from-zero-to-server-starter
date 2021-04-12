const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...")
        res.writeHead(200);
        res.end();
    } else if (req.url === "/Bad-Request") {
        console.log("Encountered 400 due to client error");
        res.writeHead(400);
        res.end();
    } else if (req.url === "/Created") {
        console.log("Succesfully created resource: 201");
        res.writeHead(201);
        res.end();
    } else if (req.url === "/Forbidden") {
        console.log("No authorization: 403");
        res.writeHead(403);
        res.end();
    } else if (req.url === "/Found") {
        console.log("Redirected to temporary URL: 302");
        res.writeHead(302);
        res.end();
    } else if (req.url === "/Gateway-Timeout") {
        console.log("Did not get response in time from upstream server: 504");
        res.writeHead(504);
        res.end();
    } else if (req.url === "/Internal-Server-Error") {
        console.log("Encountered unexpected condition: 500");
        res.writeHead(500);
        res.end();
    } else if (req.url === "/Moved-Permanently") {
        console.log("Moved to permanent URL: 301");
        res.writeHead(301);
        res.end();
    } else if (req.url === "/Unauthorized") {
        console.log("No authorization/missing authentication: 401");
        res.writeHead(401);
        res.end();
    } else if (req.url === "/Bonus/Redirect") {
        console.log("Successfuly redirected: 302")
        res.writeHead(302, { 'Location': 'http://localhost:3000/Forbidden' })
        res.end();
    } else if (req.url === "/Bonus/Webpage") {
        console.log("Basic webpage")
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><h1>A Very Basic Webpage</h1></html>");
        res.end();
    } else {
        console.log("Sorry encountered 404")
        res.writeHead(404);
    }
    res.end();
}).listen(3000, function () {
    console.log("Listening for requests on port 3000...");
});
