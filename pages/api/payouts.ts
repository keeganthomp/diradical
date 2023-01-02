import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthed } from 'lib/auth'
import { polygonNodeOptions } from 'lib/magic'
import Web3 from 'web3'
import * as backend from 'contracts/index.main.mjs'
import { Payout } from 'types'

const { NEXT_PUBLIC_ROYALTY_CTC_ADDRESS } = process.env
const abi = JSON.parse(backend._Connectors.ETH.ABI)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const user = await checkIfAuthed(req, res)
      const web3 = new Web3(
        new Web3.providers.HttpProvider(polygonNodeOptions.rpcUrl),
      )
      const contract = new web3.eth.Contract(
        abi,
        NEXT_PUBLIC_ROYALTY_CTC_ADDRESS,
      )
      const { getCurrentVotingPeriod, getOwnerPayout } = contract.methods
      try {
        const userWallet = user.publicAddress
        const vPeriod = await getCurrentVotingPeriod().call()
        const currentVotingPeriod = Number(vPeriod)
        const payoutsFromDb = await prisma.payout.findMany({
          where: { wallet: userWallet },
        })
        const payoutPeriodsReceived = payoutsFromDb.map((p) => p.period)
        const allPayoutsPms = [...Array(currentVotingPeriod - 1).keys()].map(
          (_, i) => getOwnerPayout(userWallet, i + 1).call(),
        )
        const allPayouts = await Promise.all(allPayoutsPms)
        const sortedPayouts = allPayouts.reduce(
          (acc, cur, i) => {
            const currPeriod = i + 1
            const hasReceived = payoutPeriodsReceived.includes(currPeriod)
            if (currPeriod === currentVotingPeriod) return acc
            const period = {
              period: currPeriod,
              amount: cur?.payout || 0,
            }
            if (hasReceived) {
              acc.received.push(period)
            } else {
              acc.notReceived.push(period)
            }
            acc.all.push(period)
            return acc
          },
          {
            received: [] as Payout[],
            notReceived: [] as Payout[],
            all: [] as Payout[],
          },
        )
        res.status(200).json(sortedPayouts)
      } catch (err) {
        console.log('err', err)
        res.status(500).json({ message: 'unable to fetch tracks' })
      }
      break
    }
    case 'POST': {
      await checkIfAuthed(req, res)
      const {
        wallet,
        amount,
        period,
      }: { wallet: string; amount: number; period: number } = req.body

      if (!amount || !period) {
        res.status(500).json({ message: 'missing required fields' })
      }
      if (isNaN(amount) || isNaN(period)) {
        res.status(500).json({ message: 'amount and period must be numbers' })
      }
      try {
        await prisma.payout.create({
          data: {
            period,
            amount: amount.toString(),
            receiver: { connect: { wallet } },
          },
        })
        res.status(200).json({ sucess: true })
      } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'unable to add payout' })
      }
    }
    default: {
      res.status(405).send({ message: 'Only GET & POST requests allowed' })
      break
    }
  }
}
