import { Router } from "express";
import * as noteController from "../controllers/note.controller.js";
import { authenticateToken } from "../utilities.js";

const router = Router();

router.post("/add-note", authenticateToken, noteController.addNote);
router.put("/edit-note/:noteId", authenticateToken, noteController.editNote);
router.get("/get-all-notes", authenticateToken, noteController.getAllNotes);
router.delete("/delete-note/:noteId", authenticateToken, noteController.deleteNote);
router.put("/update-note-pinned/:noteId", authenticateToken, noteController.updateNotePinned);

export default router;
