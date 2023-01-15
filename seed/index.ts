import prisma from '../lib/prisma'

async function seedSeason() {
  const existingSeason = await prisma.season.findFirst()
  if (existingSeason) return
  console.log('seeding season...')
  await prisma.season.create({
    data: {
      id: 1,
    },
  })
}

async function seedDb() {
  await seedSeason()
}

seedDb()
