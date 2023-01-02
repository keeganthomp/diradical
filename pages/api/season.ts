import { NextApiRequest, NextApiResponse } from 'next'
import { polygonNodeOptions } from 'lib/magic'
import Web3 from 'web3'
import * as backend from 'contracts/index.main.mjs'
import { getNetworkSecs } from 'utils'
import { Season } from 'types'

const { NEXT_PUBLIC_ROYALTY_CTC_ADDRESS } = process.env
const abi = JSON.parse(backend._Connectors.ETH.ABI)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(polygonNodeOptions.rpcUrl),
  )
  const contract = new web3.eth.Contract(abi, NEXT_PUBLIC_ROYALTY_CTC_ADDRESS)
  const {
    getCurrentVotingPeriod,
    getPeriodPayouts,
    getPeriodVotes,
    getPeriodMembers,
    getPeriodEndTime,
  } = contract.methods
  switch (req.method) {
    case 'GET': {
      try {
        const vPeriod = await getCurrentVotingPeriod().call()
        const currentVotingPeriod = Number(vPeriod)
        const seasonPayout = await getPeriodPayouts(currentVotingPeriod).call()
        const seasonVotes = await getPeriodVotes().call()
        const seasonMembers = await getPeriodMembers().call()
        const seasonEndTime = await getPeriodEndTime().call()
        const currentSecs = await getNetworkSecs()
        const fmtEndTime = Number(seasonEndTime)
        const payload: Season = {
          currentSeason: currentVotingPeriod,
          payout: Number(seasonPayout),
          votes: Number(seasonVotes),
          members: Number(seasonMembers),
          endPeriodTime: Number(seasonEndTime),
          hasEnded: currentSecs >= fmtEndTime,
        }
        res.status(200).json(payload)
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch season' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
