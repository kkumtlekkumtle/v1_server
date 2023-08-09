const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");
const { board, sequelize } = require("../models");
router.post("/", async (req, res) => {
  const { title, keyword, type } = req.body;
  try {
    if (type === "title") {
      const data = await board.findOne({
        attributes: ["title", "views"],
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
      });
      console.log(data);
      if (!data) return res.send(404);
      return res.json(data);
    }
    if (type === "keyword") {
      const data = await board.findAll({
        attributes: ["title", "views", "keyword"],
        where: {
          keyword: {
            [Op.like]: `%${keyword}%`,
          },
        },
      });
      return res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});
module.exports = router;
