const express = require("express");
const router = express.Router();
const db = require("../models");
const { chat, replyChat, board, user, sequelize } = require("../models");
const { Sequelize } = require("sequelize");

router.post("/", async (req, res) => {
  const { boardId, description, name } = req.body;
  try {
    const newChat = {
      boardId,
      description,
      name,
      date: Sequelize.literal("now()"),
    };
    await chat.create(newChat);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

router.post("/reply", async (req, res) => {
  const { chatId, description, name, date } = req.body;
  try {
    const newReply = {
      chatId,
      description,
      name,
      date: Sequelize.literal("now()"),
    };
    await replyChat.create(newReply);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

router.get("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  try {
    const chatting = await chat.findAll({
      attributes: ["chatId", "description", "name", "date"],
      where: {
        boardId,
      },
    });
    console.log(chatting);
    res.json(chatting);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

router.get("/reply/:chatId", async (req, res) => {
  const { chatId } = req.params;
  try {
    const reply = await replyChat.findAll({
      attributes: ["description", "name", "date"],
      where: { chatId },
    });
    res.json(reply);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});
module.exports = router;
