import express from "express";
import { body, validationResult } from "express-validator";
import requiresignin from "../middleware/requiresignin.js";
import Story from "../models/Story.js";
import PDFDocument from "pdfkit";

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
    const { title, description,story,author } = req.body;
let success = false;
    try {
      // Create a new Story object
      const newStory = {};
      if (title) newStory.title = title;
      if (description) newStory.description = description;
      if (story) newStory.story = story;
      if (author) newStory.author = author;

      // Find the Story to be updated and update it
      let stor = await Story.findById(req.params.id);
      if (!stor) {
        return res.status(404).send("Not found");
      }

      // Allow update only if the user owns this Story
      if (stor.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      stor = await Story.findByIdAndUpdate(
        req.params.id,
        { $set: newStory },
        { new: true }
      );
      success = true;
      res.json({ success,stor });
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
// Route 5: Update an existing Story using : PUT "/api/story/publicstory/:id". Login required
router.put(
  "/publicstory/:id",
  requiresignin,
  async (req, res) => {
    let success = false;

    try {
      // Create a new Story object
      

      // Find the Story to be updated and update it
      let story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).send("Not found");
      }

      // Allow update only if the user owns this Story
      if (story.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      const newStory = {};
      story.status = "true";
      if (story.status) newStory.status = story.status;

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
// Route 6: fetching the public stories "/api/story/publicstories". Login required
router.get("/publicstories", requiresignin, async (req, res) => {
  try {
    const story = await Story.find({ status: true });
    res.json(story);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
// Route 7: Update an existing Story using : PUT "/api/story/like/:id". Login required
router.put(
  "/like/:id",
  requiresignin,
  async (req, res) => {
    let success = false;

    try {


      // Find the Story to be updated and update it
      let story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).send("Not found");
      }
        // Check if the user has already liked the story
    if (story.likedBy.includes(req.user.id)) {
      return res.status(400).json({ success, message: "You have already liked this story" });
    }

    // Increment the likes count and add the user's ID to the likedBy array
    story.likes += 1;
    story.likedBy.push(req.user.id);

      // Create a new Story object
      const newStory = {};
      if (story.likes) newStory.likes = story.likes;
      if (story.likedBy) newStory.likedBy = story.likedBy;
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
// Route 8: Downloading: GET "/api/story/storypdf/:id". Login required

router.get("/storypdf/:id", requiresignin, async (req, res) => {  try {    const story = await Story.findById(req.params.id);    if (!story) {      return res.status(404).send("Story not found");    }
    const stripHtml = (html) => html.replace(/<[^>]*>/g, "");
    const plainTextStory = stripHtml(story.story);
    const doc = new PDFDocument({ margin: 50 });
    res.setHeader("Content-Type", "application/pdf");    res.setHeader(      "Content-Disposition",      `attachment; filename=${story.title || "story"}.pdf`    );
    doc.pipe(res);
    // Title Header    doc      .fillColor("#2E86C1")      .fontSize(24)      .text("Story Details", { align: "center", underline: true });
    doc.moveDown();
    // Author    doc      .fillColor("#1B4F72")      .fontSize(14)      .text("Author:", { continued: true })      .fillColor("black")      .text(` ${story.author || "Unknown"}`);
    // Title    doc      .fillColor("#1B4F72")      .fontSize(14)      .text("Title:", { continued: true })      .fillColor("black")      .text(` ${story.title || "Untitled"}`);
    // Description    doc      .fillColor("#1B4F72")      .fontSize(14)      .text("Description:", { continued: true })      .fillColor("black")      .text(` ${story.description || "No description"}`);
    // Created At    doc      .fillColor("#1B4F72")      .fontSize(14)      .text("Created At:", { continued: true })      .fillColor("black")      .text(` ${story.date || "Unknown"}`);
    doc.moveDown();
    // Story Content    doc      .fillColor("#2E4053")      .fontSize(16)      .text("Story", { underline: true });
    doc.moveDown(0.5);    doc      .font("Times-Roman")      .fontSize(12)      .fillColor("black")      .text(plainTextStory, {        align: "justify",        lineGap: 4,      });
    doc.end();  } catch (error) {    console.error("Error generating PDF:", error);    res.status(500).send("Failed to generate PDF");  }});

// Route 9: Get the Story based on the id using : GET "/api/story/getstory/:id". Login required
router.get("/getstory/:id", requiresignin, async (req, res) => {
  try {
    let success = false;
    const story = await Story.findById(req.params.id).find({ user: req.user.id });
    if (!story) {
      return res.status(404).send("Not found");
    }
    // Allow update only if the user owns this Story
   
    success = true;
    res.json({story, success });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
// Route 10: Get the Story based on the search filter using : GET "/api/story/searchstory/:query". Login required
router.get("/searchstory/:query", requiresignin, async (req, res) => {
  try {
    const query = req.params.query;
    const stories = await Story.find({
      $or: [
        {author: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { story: { $regex: query, $options: "i" } },
      ],
    }).find({ user: req.user.id });
    if (stories.length === 0) {
      return res.status(404).send("No stories found matching the search criteria");
    }
    res.json(stories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
// Route 11: Get the Story based on the search filter for public using : GET "/api/story/searchstory/:query". Login required
router.get("/searchpublicstory/:query", requiresignin, async (req, res) => {
  try {
    const query = req.params.query;
    const stories = await Story.find({
      $or: [
        {author: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { story: { $regex: query, $options: "i" } },
      ],
    }).find({ status: true });
    if (stories.length === 0) {
      return res.status(404).send("No stories found matching the search criteria");
    }
    res.json(stories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
export default router;
