import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'
import stripe from 'lib/stripe'
import { EventType, User } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  await checkIfAuthenticated(req, res)
  const { userId } = req.query
  try {
    const currentSeason = await prisma.season.findFirst({
      orderBy: {
        id: 'desc',
      },
    })
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
      include: {
        events: {
          where: {
            type: EventType.PLAY_SAVED,
            seasonId: currentSeason.id,
          },
          include: {
            track: {
              select: {
                id: true,
                title: true,
                art: true,
                archived: true,
                artist: {
                  select: {
                    username: true,
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    let payload = {
      payoutsToMake: [],
      balance: 0,
    }
    if (!user?.stripeAccountId) {
      payload = {
        ...payload,
        balance: 0,
      }
    } else {
      const stripeBalance = await stripe.getUserBalance({
        stripeAccountId: user.stripeAccountId,
      })
      payload = {
        ...payload,
        balance: stripeBalance.amount,
      }
    }
    const membershipCost = await stripe.getMembershipPrice()
    const amtForArtist = membershipCost * 0.5
    const totalPlays = user.events.length
    const playsPerArtist = user.events.reduce((acc, cur) => {
      if (acc[cur.track.artist.id]) {
        acc[cur.track.artist.id] = {
          ...acc[cur.track.artist.id],
          totalPlays: acc[cur.track.artist.id].totalPlays + 1,
        }
      } else {
        acc[cur.track.artist.id] = {
          artistId: cur.track.artist.id,
          username: cur.track.artist.username,
          totalPlays: 1,
        }
      }
      return acc
    }, {})
    console.log('playsPerArtist', playsPerArtist)
    const artistIds = Object.keys(playsPerArtist)
    for (const artistId of artistIds) {
      const artist = playsPerArtist[artistId]
      const percent = artist.totalPlays / totalPlays
      const amtToGive = amtForArtist * percent
      payload.payoutsToMake.push({
        ...artist,
        amtToGive,
      })
    }
    res.status(200).json(payload)
  } catch (err) {
    res.status(500).json({ message: err.message || 'unable to fetch user' })
  }
}
