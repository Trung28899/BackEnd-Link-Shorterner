import express from "express";
import {
  loginController,
  createPassword,
} from "../controllers/authControllers.js";
const router = express.Router();

router.route("/").post(loginController);
router.route("/create").post(createPassword);

export default router;
