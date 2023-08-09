module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "board",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      link: {
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
};
