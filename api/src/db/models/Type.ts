import {DataTypes, Model} from "sequelize";
import sequelizeConnection from "../config";

class Type extends Model {
  public id!: number;
  public nom!: string;
  public readonly deletedAt?: Date;
}

Type.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Type
