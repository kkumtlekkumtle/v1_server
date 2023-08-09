require("dotenv").config();
const express = require("express");
const boardRoutes = require("./routers/board.js");
const db = require("./models");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/boards', boardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});