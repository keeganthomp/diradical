import { Magic } from '@magic-sdk/admin'
console.log('wee', process.env)
const magic = new Magic(process.env.MAGIC_SECRET_KEY)

export default magic
