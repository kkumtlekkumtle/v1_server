module.exports = (sequelize, DataTypes) => {
  const Keywords = sequelize.define(
    "keywords",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      keyword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );
  return Keywords;
};
