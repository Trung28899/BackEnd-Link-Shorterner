import express from "express";
import { loginController } from "../controllers/authControllers.js";
const router = express.Router();

router.route("/").post(loginController);

export default router;
