const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");
const TaskModel = require("../models/Task.model");
// Task 3.1: Create route POST /tasks

router.post("/create/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const newTask = await TaskModel.create({ ...req.body, idUser: userId });

    const idUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        $push: { tasks: newTask._id },
      },
      { new: true }
    );
    console.log(req.body);
    return res.status(201).json([newTask, idUser]);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Task 3.2: Create route GET /tasks/:taskId

router.get("/task/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await TaskModel.findById(taskId);

    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// Task 3.3: Create route PUT /tasks/:taskId

router.put("/task/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;

    const editComment = await TaskModel.findByIdAndUpdate(
      taskId,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.status(200).json(editComment);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Task 3.4: Create route DELETE /tasks/:taskId

router.delete("/task/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;

    const deletedTask = await TaskModel.findByIdAndDelete(taskId);

    await TaskModel.findByIdAndUpdate(
      taskId,
      {
        $pull: {
          tasks: taskId,
        },
      },
      { new: true }
    );

    return res.status(204).json("Task deleted");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
