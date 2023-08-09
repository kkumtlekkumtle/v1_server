module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "board",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      keyword: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: "board",
      timestamps: false,
    }
  );
  return Board;
};
