const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/index")[env];
const db = {};
// 아래 설정을 통해 Sequelize가 노드와 MySQL을 연결해줍니다.
// 연결에 성공하면 sequelize 객체에 연결정보가 담기게 됩니다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 만들어논 모델들을 불러와 Sequelize에 연결해줍니다.
db.board = require("./board")(sequelize, Sequelize);
db.keywords = require("./keywords")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.points = require("./points")(sequelize, Sequelize);
db.chat = require("./chat")(sequelize, Sequelize);
db.replyChat = require("./replyChat")(sequelize, Sequelize);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
