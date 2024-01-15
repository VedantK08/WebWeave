const client = require("../database/pgres");

const allPosts = (req, res) => {
  client.query(`SELECT * FROM POSTS`, [], (err, result) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(result.rows);
  });
};

const specificPost = (req, res) => {
  const { id } = req.params;
  client.query(`SELECT * FROM POSTS WHERE user_id=$1`, [id], (err, result) => {
    if (err) {
      return res.status(400).json(err);
    }
    if (result.rows.length === 0) {
      return res.status(200).json({ message: "You haven't Posted Yet" });
    }
    console.log(result.rows);
    return res.status(200).json(result.rows);
  });
};

const getPost = (req, res) => {
  const { id } = req.params;
  console.log("Id is", id);
  client.query(`SELECT * FROM POSTS WHERE user_id=$1`, [id], (err, result) => {
    if (err) {
      return res.status(400).json(err);
    }
    if (result.rows.length === 0) {
      console.log("Inside checking row length ");
      return res.status(200).json({ message: "You haven't Posted Yet" });
    }
    console.log(result.rows);
    return res.status(200).json(result.rows);
  });
};

const deletePost = (req, res) => {};

const createPost = (req, res) => {
  console.log(req.file);
  const { user_id, caption, category } = req.body;
  const imageName = req.file ? req.file.filepath : null;
  console.log(imageName);
  console.log(req.file);
  client.query(
    `INSERT INTO POSTS (user_id,caption, imageName, category) VALUES ($1,$2,$3,$4) RETURNING *`,
    [user_id, caption, req.file.filename, category],
    (err, result) => {
      if (err) {
        return res.status(200).json({ message: `Error: ${err}` });
      } else {
        console.log(result.rows[0]);
        return res
          .status(200)
          .json({ message: "Post is created..!", user: result.rows[0] });
      }
    }
  );
};

module.exports = { getPost, deletePost, createPost, allPosts, specificPost };
