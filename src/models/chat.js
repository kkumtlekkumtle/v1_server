module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "chat",
    {
      boardId: {
        type: DataTypes.INTEGER,
      },
      chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: "chat",
      timestamps: false,
    }
  );
  return Chat;
};
