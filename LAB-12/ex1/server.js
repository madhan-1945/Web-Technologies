// Import http module
const http = require("http");

// Define port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    // Set header
    res.setHeader("Content-Type", "text/html");

    // HTML template
    const page = (title, content) => `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#f4f6f8;
                text-align:center;
                padding:40px;
            }

            .card{
                background:white;
                padding:30px;
                border-radius:8px;
                width:400px;
                margin:auto;
                box-shadow:0 4px 10px rgba(0,0,0,0.1);
            }

            h1{
                color:#2c3e50;
            }

            p{
                font-size:16px;
                color:#555;
            }

            a{
                display:inline-block;
                margin:10px;
                text-decoration:none;
                color:white;
                background:#3498db;
                padding:10px 18px;
                border-radius:5px;
            }

            a:hover{
                background:#2980b9;
            }
        </style>
    </head>

    <body>

        <div class="card">
            <h1>${title}</h1>
            <p>${content}</p>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>

    </body>
    </html>
    `;

    // Routing
    if(req.url === "/"){
        res.write(page("Node.js Web Server",
        "Welcome! This server is created using Node.js HTTP module."));
    }

    else if(req.url === "/about"){
        res.write(page("About Page",
        "This application demonstrates how Node.js handles HTTP requests and responses."));
    }

    else if(req.url === "/contact"){
        res.write(page("Contact Page",
        "Email: lab@example.com"));
    }

    else{
        res.write(page("404 Error",
        "Page not found."));
    }

    res.end();
});

// Run server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});