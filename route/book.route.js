import express from "express";
import { getBook, getOne } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getOne);

export default router;
