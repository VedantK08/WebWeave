const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client(process.env.DATABASE_URL);

/* 
  CREATE TABLE IF NOT EXISTS USERS (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    profile_photo_url TEXT,
    bio TEXT,
    created_at TEXT,
    password TEXT
    
);
`
CREATE TABLE IF NOT EXISTS POSTS (
    post_id SERIAL PRIMARY KEY,
    caption TEXT,
    category TEXT,
    imageName TEXT,
    user_id INT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/

(async () => {
  await client.connect();
  try {
    const results = await client.query(`select * from POSTS;`);
    console.log(results.rows);
    /* console.log(results.rows); */
    console.log("Database Connected");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    // client.end();
  }
})();

module.exports = client;
