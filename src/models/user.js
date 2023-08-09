module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );
};