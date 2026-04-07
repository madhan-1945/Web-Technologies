const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

const PORT = 3005;

app.use(express.json());

// serve static webpage
app.use(express.static("public"));

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});