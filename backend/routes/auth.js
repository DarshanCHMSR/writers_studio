import express from "express";
import User from "../models/User.js";
const router = express.Router();
//it is used to validate the user,password
const { body, validationResult } = require("express-validator");
//bcrypt.js id used to add to salt to passwords
const bcrypt = require("bcryptjs");
//jwt - jsonwebtokens used to give secure connection between client and server
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "darshanch@4444";

//Route 1:create a user using : POST "/api/auth/createuser". Doesn't require Auth or no login required
router.post(
  "/createuser",
  [
    //we are getting information from create user
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be atleast of 5 chacters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success =false;
    // if there are error returns bad requests and the errors

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
      }
      // CHECKS WHETHER THE USER WITH THIS EMAIL EXISTS ALREADY
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,error: "sorry a user with this email already exists " });
      }
      // adding salt using bcrypt.js it is made await because it retutns promises
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      //   .then(user => res.json(user))
      //   .catch(err=>console.log(err),
      // res.json({error:'please enter a unique email address',message:err.message}))

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      //sending token--userid for fast instead of user
      success=true;
      res.json({success,authtoken});
      //res.json({ user });
      // catches the error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 2:authentication a user using : POST "/api/auth/login". Doesn't require Auth or no login required

router.post(
  "/login",
  [
    //here we are getting the user who are getting login
    body("email", "enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
  let success =false;
    // if there are error returns bad requests and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //authicates whether the user of that name exist are not in the database
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }
      //authenticates whether the user entering correct password one or not
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      //finally sends the token back l
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken });
      //if any error occurs--
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
//Route 3:Get loggedin users details using POST:'/api/auth/getuser'.Login required
router.post(
  "/getuser",fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
export default router;
