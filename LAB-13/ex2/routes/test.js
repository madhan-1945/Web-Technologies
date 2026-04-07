
const express = require("express");
const router = express.Router();

// Middleware specific to this route chain
router.use((req,res,next)=>{
    console.log("[ROUTE CHAIN] Middleware inside router executed");
    next();
});

router.get("/test", (req, res) => {
    res.json({
        message: "GET request reached final route handler"
    });
});

router.post("/test", (req, res) => {
    res.json({
        message: "POST request processed",
        data: req.body
    });
});

module.exports = router;
