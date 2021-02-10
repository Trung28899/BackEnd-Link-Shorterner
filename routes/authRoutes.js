import express from "express";
import {
  createPassword,
  getPassword,
  updatePassword,
} from "../controllers/authControllers.js";
const router = express.Router();

router.route("/create").post(createPassword);
router.route("/").post(getPassword);
router.route("/:currentPassword").put(updatePassword);

export default router;
