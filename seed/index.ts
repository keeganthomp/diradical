import prisma from '../lib/prisma'
import {
  MOCK_ALBUMS,
  MOCK_USERS,
  MOCK_SINGLES,
  MOCK_ALBUM_TRACKS,
} from './data'

async function seedSeason() {
  const existingSeason = await prisma.season.findFirst()
  if (existingSeason) return
  console.log('seeding season...')
  await prisma.season.create({
    data: {
      id: 1,
    },
  })
  console.log('season seeded')
}

async function seedUsers() {
  console.log('seeding users...')
  await prisma.user.createMany({
    data: MOCK_USERS,
    skipDuplicates: true,
  })
  console.log('seeded users')
}

async function seedAlbums() {
  console.log('seeding albums...')
  await prisma.album.createMany({
    data: MOCK_ALBUMS,
    skipDuplicates: true,
  })
  const trackPayload = MOCK_ALBUM_TRACKS.map((track) => {
    return {
      ...track,
      albumId: MOCK_ALBUMS[0].id,
    }
  })
  await prisma.track.createMany({
    data: trackPayload,
    skipDuplicates: true,
  })
  console.log('seeded albums')
}

async function seedSingles() {
  console.log('seeding singles...')
  await prisma.track.createMany({
    data: MOCK_SINGLES,
    skipDuplicates: true,
  })
  console.log('seeded singles')
}

async function seedDb() {
  await seedSeason()
  await seedUsers()
  await seedSingles()
  await seedAlbums()
}

seedDb()
