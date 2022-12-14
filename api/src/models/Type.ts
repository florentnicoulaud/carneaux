import {DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from "../db/config";

interface TypeAttributes {
  id: number;
  nom: string;
  deletedAt?: Date;
}

export interface TypeInput extends Optional<TypeAttributes, 'id'> {
}

export interface TypeOuput extends Required<TypeAttributes> {
}

class Type extends Model<TypeAttributes, TypeInput> implements TypeAttributes {
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
