const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes");

router.get("/notes", NotesController.notes_get_all);

router.post("/notes", NotesController.notes_create_note);

router.delete("/notes/:id", NotesController.notes_delete_note);

router.patch("/notes/:id", NotesController.notes_update_note);

module.exports = router;
