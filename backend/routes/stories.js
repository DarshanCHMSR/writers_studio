import express from "express";
import { body, validationResult } from "express-validator";
import requiresignin from "../middleware/requiresignin.js";
import Story from "../models/Story.js";

const router = express.Router();

// Route 1: Get all the Story using : GET "/api/story/fetchallstories". Login required
router.get("/fetchallstories", requiresignin, async (req, res) => {
  try {
    const story = await Story.find({ user: req.user.id });
    res.json(story);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 2: Add a new Story using : POST "/api/story/addstory". Login required
router.post(
  "/addstory",
  requiresignin,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
    body("story", "Story must be at least 10 characters").isLength({ min: 10 }),
    body("author", "Author name must be at least 3 characters").isLength({
      min: 1,
    }),
  ],
  
  async (req, res) => {
    let success = false;
    try {
      const { title, description,story,author } = req.body;

      // If there are errors, return bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Create a new Story
      const stories = new Story({
        title,
        description,
        story,
        author,
        user: req.user.id,
      });

      // Save the Story
      const savedStory = await stories.save();
      success = true;
      res.json({success,savedStory});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Route 3: Update an existing Story using : PUT "/api/story/updatestory/:id". Login required
router.put(
  "/updatestory/:id",
  requiresignin,
  async (req, res) => {
    const { title, description, tag } = req.body;

    try {
      // Create a new Story object
      const newStory = {};
      if (title) newStory.title = title;
      if (description) newStory.description = description;
      if (tag) newStory.tag = tag;

      // Find the Story to be updated and update it
      let story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).send("Not found");
      }

      // Allow update only if the user owns this Story
      if (story.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      story = await Story.findByIdAndUpdate(
        req.params.id,
        { $set: newStory },
        { new: true }
      );
      success = true;
      res.json({ success,story });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Route 4: Delete an existing Story using : DELETE "/api/story/deletestory/:id". Login required
router.delete(
  "/deletestory/:id",
  requiresignin,
  async (req, res) => {
    try {
      // Find the Story to be deleted and delete it
      let story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).send("Not found");
      }

      // Allow deletion only if the user owns this Story
      if (story.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      await Story.findByIdAndDelete(req.params.id);
      res.json({ success: "Story has been deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

export default router;