import express from "express";
import { fetchLink } from "../controllers/linkControllers.js";
const router = express.Router();

router.route("/:accessName").get(fetchLink);

export default router;
