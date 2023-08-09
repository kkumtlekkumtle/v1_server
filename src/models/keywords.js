module.exports = (sequelize, DataTypes) => {
  const Keywords = sequelize.define(
    "keywords",
    {
      boardId: {
        type: DataTypes.INTEGER,
      },
      keyword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "keywords",
      timestamps: false,
    }
  );
  return Keywords;
};
