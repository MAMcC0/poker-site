const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserStats extends Model {}

UserStats.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    games_played: {
        type: DataTypes.INTEGER,
    },
    wallet: {
        type: DataTypes.INTEGER,
    },
    hands_won: {
       type: DataTypes.INTEGER,
    },
    hands_lost: {
       type: DataTypes.INTEGER,
    },
    money_won: {
        type: DataTypes.INTEGER,
    },
    money_lost: {
        type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userStats',
  }
);

module.exports = GameType;