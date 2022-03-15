const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/test", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    // what do we need? name, email, password
    const { name, email, password } = req.body;

    if (!email) {
      res.status(400).send("You must provide a valid email address");
    }
    const newUser = await User.create({ name, email, password });
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// return user with requested id (findByPk)
app.get("/users/:id", async (req, res) => {
  try {
    // 1. get id from params
    const userId = req.params.id;
    // 2. fetch user by PK
    const oneUser = await User.findByPk(userId);
    res.send(oneUser);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
