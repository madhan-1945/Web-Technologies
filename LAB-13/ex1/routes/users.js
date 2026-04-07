const express = require("express");
const router = express.Router();

let users = [
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Alice", age: 25 }
];

router.get("/", (req, res) => {
    res.json(users);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.send("User not found");

    res.json(user);
});

router.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);

    res.json({
        message: "User added",
        user: newUser
    });
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.send("User not found");

    user.name = req.body.name;
    user.age = req.body.age;

    res.json({
        message: "User updated",
        user
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    users = users.filter(u => u.id !== id);

    res.json({
        message: "User deleted"
    });
});

module.exports = router;