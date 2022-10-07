import { Router } from "express";
import {
  notes_get_all,
  notes_create_note,
  notes_delete_note,
  notes_update_note,
} from "../controllers/notes";

const router = Router();

router.get("/notes", notes_get_all);

router.post("/notes", notes_create_note);

router.delete("/notes/:id", notes_delete_note);

router.patch("/notes/:id", notes_update_note);

export default router;
