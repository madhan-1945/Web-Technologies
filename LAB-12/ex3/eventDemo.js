const http = require("http");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
const PORT = 3002;

// Event listeners
eventEmitter.on("userLogin", (username, res) => {
    res.write("User Login Event: " + username + "<br>");
});

eventEmitter.on("fileUpload", (file, res) => {
    res.write("File Upload Event: " + file + "<br>");
});

eventEmitter.on("orderPlaced", (id, product, res) => {
    res.write("Order Placed Event -> ID: " + id + " Product: " + product + "<br>");
});

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    res.write(`
    <html>
    <head>
    <title>Event Demo</title>

    <style>

    body{
        font-family:Arial;
        background:#f4f6f8;
        text-align:center;
        padding:40px;
    }

    .card{
        background:white;
        width:500px;
        margin:auto;
        padding:30px;
        border-radius:8px;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
    }

    h1{
        color:#2c3e50;
    }

    .log{
        text-align:left;
        background:#ecf0f1;
        padding:15px;
        border-radius:5px;
        margin-top:20px;
    }

    </style>

    </head>

    <body>

    <div class="card">

    <h1>Node.js Event Driven Demo</h1>
    <p>Events will appear every 2 seconds...</p>

    <div class="log">
    `);

    // Event 1
    setTimeout(() => {
        eventEmitter.emit("userLogin", "Madhan", res);
    }, 2000);

    // Event 2
    setTimeout(() => {
        eventEmitter.emit("fileUpload", "assignment.pdf", res);
    }, 4000);

    // Event 3
    setTimeout(() => {
        eventEmitter.emit("orderPlaced", 101, "Laptop", res);
    }, 6000);

    // Finish response
    setTimeout(() => {
        res.write("</div></div></body></html>");
        res.end();
    }, 7000);

});

server.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});