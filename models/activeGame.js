import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../config/connection';

class ActiveGame extends Model {}

ActiveGame.init(
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
    ante_bet: {
       type: DataTypes.INTEGER,
    },
    pair_plus_active: {
       type: DataTypes.BOOLEAN,
    },
    bet: {
      type: DataTypes.INTEGER,
    },
    fold: {
      type: DataTypes.BOOLEAN,
    },
    user_wallet: {
      type: DataTypes.INTEGER,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gameType',
  }
);

export default ActiveGame;