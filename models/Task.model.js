// Task 1: Create the models Task, User

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: { type: "string", required: true },
    details: { type: "string" },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
