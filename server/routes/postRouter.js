const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  deletePost,
  createPost,
  allPosts,
  specificPost,
} = require("../controllers/postController");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.get("/all", allPosts);
router.get("/specific/:id", specificPost);

router.post("/createPost", upload.single("image"), createPost);

router.delete("/deletePost", deletePost);

module.exports = router;
