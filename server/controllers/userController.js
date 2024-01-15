const client = require("../database/pgres");

const allUsers = (req, res) => {
  //console.log("Entered in allUsers");
  client.query(`SELECT * FROM USERS`, (err, result) => {
    if (err) {
      res.json(400).json({ message: `Error quering the database : ${err}` });
      return;
    }
    console.log(result.length);
    console.log(result.rows);
    res.status(200).json(result.rows);
  });
};

const specificUser = (req, res) => {
  const { user_id } = req.params;
  client.query(
    `SELECT * FROM USERS WHERE user_id=$1,`[user_id],
    (err, result) => {
      if (err) {
        res
          .status(400)
          .json({ message: `Error quering the database : ${err}` });
        return;
      }
      res.status(200).json(result.rows[0]);
      console.log(result.rows);
    }
  );
};

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!email && !name) {
    //console.log("Indide 1st if block of createuser");
    return res.status(200).json({ message: "Email and name is essential" });
  }
  client.query(`SELECT * FROM USERS WHERE email=$1`, [email], (err, result) => {
    if (result.rows.length > 0) {
      console.log("Indide 2nd if block of createuser");
      return res.status(200).json({ message: "Email is already present" });
    }

    client.query(
      `INSERT INTO USERS (name, email,password)
VALUES($1,$2,$3) RETURNING *`,
      [name, email, password],
      (err, result) => {
        if (err) {
          console.log("Indide 3rd if block of createuser");
          return res.status(400).json({ message: `Error: ${err}` });
        } else {
          console.log("Indide else block of createuser");
          console.log(result.rows[0]);
          return res
            .status(200)
            .json({ message: "User is successfully created..!" });
        }
      }
    );
  });
};

const checkUser = (req, res) => {
  console.log("inside check user, uerController");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({ message: "Fill Credentials" });
  }
  client.query(`SELECT * FROM USERS WHERE email=$1`, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    if (result.rows.length === 0) {
      return res.status(200).json({ message: "User dosen't exist" });
    }
    client.query(
      `SELECT * FROM USERS WHERE email=$1 AND password=$2`,
      [email, password],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        if (result.rows.length === 0) {
          return res.status(200).json({ message: "Wrong Credentials" });
        }
        return res.status(200).json({
          message: "User logged in successfully..!",
          user: result.rows[0],
        });
        //return res.status(200).json(result.rows[0]);
      }
    );
  });
};

const updateUser = (req, res) => {
  const { name, email, profile_photo_url, bio, created_at } = req.body;
  const values = [name, email, profile_photo_url, bio, created_at];

  const nonEmptyCount = values.filter(
    (value) => value !== undefined && value.trim() !== ""
  ).length;

  if (nonEmptyCount === 1) {
    // Only one value contains a non-empty value
    res.status(200).json({ message: "Only one value is non-empty" });
  } else {
    // More than one or no value is non-empty
    res
      .status(400)
      .json({ message: "Conditions not met for only one non-empty value" });
  }
};

const deleteUser = (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(200).json({ message: "Email fiels is essential" });
  }
  client.query(`DELETE FROM USERS WHERE email=$1`, [email], (err, result) => {
    if (err) {
      return res.status(400).json({ message: `Error: ${err}` });
    } else {
      console.log("Row is deleted");
      console.log(result.rows);
      return res.status(200).json({ message: "Row is deleted" });
    }
  });
};

module.exports = { allUsers, specificUser, createUser, deleteUser, checkUser };
