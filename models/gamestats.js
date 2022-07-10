const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameType extends Model {}

GameType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hands_won: {
       type: DataTypes.INTEGER,
    },
    hands_lost: {
       type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gameType',
  }
);

module.exports = GameType;
