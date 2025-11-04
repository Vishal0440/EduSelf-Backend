import express from "express";
import {
  getBook,
  getOne,
  create,
  update,
  remove,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
