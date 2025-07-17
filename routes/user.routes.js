import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { authenticateToken } from "../utilities.js";

const router = Router();

router.post("/Create-account", userController.createAccount);
router.post("/login", userController.login);
router.get("/get-user", authenticateToken, userController.getUser);

export default router;
