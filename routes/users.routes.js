const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");

// Task 2.1: Create route POST /users

router.post("/create", async (req, res) => {
  try {
    const user = await UserModel.create({ ...req.body });

    console.log(req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Task 2.2: Create route GET /users/:userId

router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const oneUser = await UserModel.findById(id).populate("tasks")

    //o "tasks" é do usermodel.js

    return res.status(200).json(oneUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
