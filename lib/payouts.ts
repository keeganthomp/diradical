import { User, Event, Track } from '@prisma/client'
import stripe from './stripe'

export type Distribution = {
  artist: Partial<User>
  totalPlays: number
  suggestedAmount: number
  percentOfListens: number
}

export const getListenDistribution = async (
  user: User & {
    events: Partial<Event> &
      { track: Partial<Track> & { artist: Partial<User> } }[]
  },
): Promise<{
  artists: Distribution[]
  totalAmountToGive: number
}> => {
  const payoutsPerArtist: Distribution[] = []
  const membershipCost = await stripe.getMembershipPrice()
  const amtForArtist = membershipCost * 0.5
  const userTotalPlays = user.events.length
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
  const artistIds = Object.keys(playsPerArtist)
  for (const artistId of artistIds) {
    const artist = playsPerArtist[artistId]
    const percent = artist.totalPlays / userTotalPlays
    const amtToGive = amtForArtist * percent
    const { totalPlays, ...rest } = artist
    payoutsPerArtist.push({
      artist: {
        ...rest,
      },
      percentOfListens: percent,
      suggestedAmount: amtToGive,
      totalPlays,
    })
  }
  return {
    artists: payoutsPerArtist,
    totalAmountToGive: amtForArtist,
  }
}
