import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/connection';

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
    },
    fold: {
      type: DataTypes.BOOLEAN,
    },
    user_wallet: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "wallet",
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