const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const { static } = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/uploads/", static("./uploads/"));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Started" });
});
app.listen(3002, () => {
  console.log("Server Started");
});
