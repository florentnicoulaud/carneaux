import {Sequelize} from "sequelize";

const sequelizeConnection = new Sequelize({
  dialect: 'sqlite',
  storage: 'carneaux.sqlite'
})

export default sequelizeConnection