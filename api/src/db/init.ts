import Type from './models/Type'

const dbInit = async () => await Promise.all([
  Type.sync({ alter: true })
])
export default dbInit
