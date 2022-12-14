import Type from "../models/Type";

const dbInit = () => Promise.all([
  Type.sync({alter: true})
])
export default dbInit