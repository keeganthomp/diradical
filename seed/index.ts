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
  console.log('season seeded')
}

async function seedUsers() {
  const existingUsers = await prisma.user.findMany()
  if (existingUsers.length) return
  console.log('seeding users...')
  //   await prisma.user.create({
  //     data: {
  //       id: 1,
  //       name: 'Admin',
  //       email: '',
  //     },
  //   })
  console.log('seeded users')
}

async function seedMembership() {
  const existingMembership = await prisma.membership.findFirst()
  if (existingMembership) return
  console.log('seeding membership...')
  //   await prisma.membership.create({
  //     data: {
  //       id: 1,
  //       name: 'Free',
  //       price: 0,
  //       duration: 'month',
  //       durationCount: 1,
  //       isDefault: true,
  //     },
  //   })
  console.log('seeded memberships')
}

async function seedDb() {
  await seedSeason()
}

seedDb()
