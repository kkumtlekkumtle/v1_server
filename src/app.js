require("dotenv").config();
const db = require("./models");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MemoryStore = require("memorystore")(session);
const port = 3000;
const app = express();
const login = require("./routes/loginRouter");
const search = require("./routes/searchRouter");
const board = require("./routes/boardRouter");
const chat = require("./routes/chatRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "loginData",
    secret: "testSecret",
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore({
      checkPeriod: 86400000,
    }),
    cookie: {
      expires: 60 * 60 * 24, // 쿠키 만료일 (60초 * 60분 * 24 = 1일)
    },
  })
);
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.use("/user", login);
app.use("/search", search);
app.use("/board", board);
app.use("/chat", chat);

app.listen(port, () => {
  console.log(`listening  at http://localhost:${port}`);
});
