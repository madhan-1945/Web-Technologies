
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./routes/users");

const PORT = 3000;

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/webtech_lab")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use(express.json());
app.use(express.static("public"));

// API routes
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
