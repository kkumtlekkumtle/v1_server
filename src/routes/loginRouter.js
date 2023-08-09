const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const { user, points, sequelize } = require("../models");

const saltRounds = 5;

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: ["id"],
    });

    if (users === null) return res.send(400);
    return res.json(users);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});
router.post("/login", async (req, res) => {
  const { id, pw } = req.body;
  try {
    const userData = await user.findOne({ where: { id } });
    if (userData) {
      const result = bcrypt.compareSync(pw, userData.pw);
      if (result) {
        req.session.loginData = {
          userId: userData.userId,
          id: userData.id,
          name: userData.name,
        };
        req.session.save();
        return res.send(200);
      }
    }
    if (!userData) {
      return res.status(400).send("사용자가 존재하지 않습니다.");
    }
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

router.post("/", async (req, res) => {
  const { id, pw, name } = req.body;
  if (!id || !pw || !name) {
    return res.status(400).json({ error: "모든 필드를 입력해주세요." });
  }
  try {
    const hash = bcrypt.hashSync(pw, saltRounds);

    const newUser = {
      id,
      pw: hash,
      name,
    };

    const createUser = await db.user.create(newUser);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.get("/loginCheck", (req, res) => {
  try {
    console.log(req.session.loginData);
    if (req.session.loginData) {
      res.send({ loggedIn: true, loginData: req.session.loginData });
    } else {
      res.send({ loggedIn: false });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      } else {
        res.json({ message: "success" });
      }
    });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});
module.exports = router;
