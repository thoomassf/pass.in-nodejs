import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '3032fa64-7820-448a-8756-7769ca7649cb',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Databse seeded!')
  prisma.$disconnect()
})