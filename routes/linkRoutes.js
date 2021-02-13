import express from "express";
import { createLink, fetchLink } from "../controllers/linkControllers.js";
const router = express.Router();

router.route("/create").post(createLink);
router.route("/:accessName").get(fetchLink);

export default router;
