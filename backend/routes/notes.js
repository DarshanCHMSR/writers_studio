const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route 1:Get all the notes using :GET"/api/notes/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
//Route 2:Add a new note using :POST"/api/notes/addnotes".Login required
router.post(
  "/addnotes",
  fetchuser,
  //its is to get and valid the title and description of the note
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast of 5 chacters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are error returns bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //we are getting title, description, tag, and user id
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      //finally saving the things of user entered
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 3:Update an existing note using :PUT"/api/notes/updatenote".Login required
router.put(
  "/updatenote/:id", // we need to pass the id of the user not the user
  fetchuser,
  async (req, res) => {
    //destructuring the things
    const { title, description, tag } = req.body;
    //creating a new note object
    try {
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      //Find the note to be updated and update it
      let note = await Note.findById(req.params.id);
      //check whether the note is there or not 
      if (!note) {
        return res.status(404).send("Not found");
      }
      // allow permission to update if a legitimate user enters to there own note
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      //updating the note through the function
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
//Route 4:Deleting an existing note using :DELETE"/api/notes/deletenote".Login required
router.delete(
  "/deletenote/:id", // we need to pass the id of the user not the user
  fetchuser,
  async (req, res) => {
    try {
      //Find the note to be deleted and delete it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      //allow deletion only if the user owns this Note
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      note = await Note.findByIdAndDelete(
        req.params.id,
      );
      res.json({ "success":"note as been deleted" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
