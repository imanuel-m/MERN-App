const Task = require("../models/Task");

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidator: true,
    });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask };
