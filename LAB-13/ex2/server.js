
const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const routeMiddleware = require("./middleware/routeMiddleware");
const testRoutes = require("./routes/test");

const PORT = 3000;

app.use(express.json());

// Global middleware (applies to all requests)
app.use(logger);

// Serve frontend
app.use(express.static("public"));

// Route-level middleware example
app.use("/api", routeMiddleware, testRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
