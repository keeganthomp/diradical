import { loadStdlib } from '@reach-sh/stdlib'

const POLYGON_TESTNET = 'https://rpc.ankr.com/polygon_mumbai'
// const POLYGON_MAINNET = 'https://rpc-mainnet.matic.quiknode.pro';

const stdlib = loadStdlib({
  ETH_NODE_URI: POLYGON_TESTNET,
})

export default stdlib
