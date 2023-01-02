import { Magic as MagicAdmin } from '@magic-sdk/admin'

export const magicAdmin = new MagicAdmin(process.env.MAGIC_SECRET_KEY)

export const polygonNodeOptions = {
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  chainId: 80001,
}
