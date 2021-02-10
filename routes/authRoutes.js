import express from "express";
import { createPassword, getPassword } from "../controllers/authControllers.js";
const router = express.Router();

router.route("/create").post(createPassword);
router.route("/").post(getPassword);

export default router;
