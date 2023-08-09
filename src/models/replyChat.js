module.exports = (sequelize, DataTypes) => {
  const ReplyChat = sequelize.define(
    "replyChat",
    {
      chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "replyChat",
      timestamps: false,
    }
  );
  return ReplyChat;
};
