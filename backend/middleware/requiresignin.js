import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const requiresignin = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ JWT_SECRET });
  }
};

export default requiresignin;