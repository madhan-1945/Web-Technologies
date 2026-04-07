
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// CREATE
router.post("/", async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

// READ
router.get("/", async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json(err);
    }
});

// UPDATE
router.put("/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message:"User deleted"});
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
