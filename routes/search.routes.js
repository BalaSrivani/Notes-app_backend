import { Router } from "express";
import * as searchController from "../controllers/search.controller.js";
import { authenticateToken } from "../utilities.js";

const router = Router();

router.get("/search", authenticateToken, searchController.search);

export default router;
