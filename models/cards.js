import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../config/connection';

class Cards extends Model {}

Cards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    face: {
        type: DataTypes.STRING,
        allowNull: false
    },
    svgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cards',
  }
);

export default Cards;
