import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../config/connection.js';

class ActiveGame extends Model { }

ActiveGame.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    total_bet: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    playerWon: {
      type: DataTypes.BOOLEAN,
    },
    data: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ActiveGame',
  }
);

export default ActiveGame;