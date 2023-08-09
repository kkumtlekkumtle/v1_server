module.exports = (sequelize, DataTypes) => {
  const Points = sequelize.define(
    "points",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "points",
      timestamps: false,
    }
  );
  return Points;
};
