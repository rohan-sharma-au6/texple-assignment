const express = require("express");
const todoRoutes = require("../controllers/todoControllers");
const router = express.Router();

router.post("/create",todoRoutes.createTodo);
router.get("/all",todoRoutes.allTodos);
router.delete("/delete/:id",todoRoutes.deleteTodo);
router.post("/update/:id",todoRoutes.editTodo);
module.exports= router