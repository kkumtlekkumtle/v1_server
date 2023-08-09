require("dotenv").config();
const express = require("express");
const db = require("./models");
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);
app.listen(port, () => {
  console.log(`listening  at http://localhost:${port}`);
});
