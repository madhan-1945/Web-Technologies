const http = require("http");
const fs = require("fs");

const PORT = 3001;
const fileName = "sample.txt";

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    // Create file
    fs.writeFile(fileName, "File created using Node.js\n", (err) => {

        let output = "";

        if (err) {
            output += "Error creating file<br>";
        } else {
            output += "File created successfully<br>";
        }

        // Read file
        fs.readFile(fileName, "utf8", (err, data) => {

            if (err) {
                output += "Error reading file<br>";
            } else {
                output += "<b>File Content:</b><br>" + data + "<br>";
            }

            // Append data
            fs.appendFile(fileName, "This line was appended.\n", (err) => {

                if (err) {
                    output += "Error appending file<br>";
                } else {
                    output += "Data appended successfully<br>";
                }

                // Read updated file
                fs.readFile(fileName, "utf8", (err, data) => {

                    output += "<b>Updated File Content:</b><br>" + data + "<br>";

                    // Delete file
                    fs.unlink(fileName, (err) => {

                        if (err) {
                            output += "Error deleting file<br>";
                        } else {
                            output += "File deleted successfully<br>";
                        }

                        // Send styled webpage
                        res.write(`
                        <html>
                        <head>
                        <title>File Operations</title>

                        <style>

                        body{
                            font-family:Arial;
                            background:#f4f6f8;
                            text-align:center;
                            padding:40px;
                        }

                        .card{
                            background:white;
                            padding:30px;
                            width:500px;
                            margin:auto;
                            border-radius:8px;
                            box-shadow:0 4px 10px rgba(0,0,0,0.1);
                        }

                        h1{
                            color:#2c3e50;
                        }

                        p{
                            text-align:left;
                            background:#ecf0f1;
                            padding:10px;
                            border-radius:5px;
                        }

                        </style>

                        </head>

                        <body>

                        <div class="card">

                        <h1>Node.js File Operations</h1>

                        <p>${output}</p>

                        </div>

                        </body>
                        </html>
                        `);

                        res.end();

                    });

                });

            });

        });

    });

});

server.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});