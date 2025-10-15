const express = require("express");
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
