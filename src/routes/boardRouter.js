const express = require("express");
const router = express.Router();
const db = require("../models");
const { board, points, sequelize } = require("../models");

router.get("/", async (req, res) => {
  try {
    const data = await board.findAll({
      attributes: ["id", "title", "keyword", "views"],
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

router.post("/", async (req, res) => {
  const { userId, title, keyword, description } = req.body;
  try {
    const data = await board.findOne({
      attributes: ["title"],
      where: {
        title,
      },
    });
    if (data) return res.send(409);
    const boardData = {
      userId,
      title,
      keyword,
      description,
    };
    const insert = await board.create(boardData);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});
module.exports = router;
