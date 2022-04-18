import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import fs from 'fs'

const seedHouses = async () => {
  const housesData = fs.readFileSync('./data/houses.json', 'utf8')
  const houses = JSON.parse(housesData)
  console.log(`Seeding ${houses.length} houses into the database ...`)
  try {
    const dbHouses: Prisma.HouseCreateInput[] = houses.map((house) => ({
      ...house,
    }))

    dbHouses.map(async (house) => {
      const houseCreated = await db.house.create({ data: house })
      console.log(houseCreated)
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

const seedWizards = async () => {
  const wizardsData = fs.readFileSync('./data/wizards.json', 'utf8')
  const wizards = JSON.parse(wizardsData)
  console.log(`Seeding ${wizards.length} wizards into the database ...`)
  try {
    const dbWizards: Prisma.WizardCreateInput[] = wizards.map((wizard) => ({
      ...wizard,
    }))

    dbWizards.map(async (wizard) => {
      const wizardCreated = await db.wizard.create({ data: wizard })
      console.log(wizardCreated)
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

export default async () => {
  const housesCount = await db.house.count()
  const wizardCount = await db.wizard.count()

  if (!housesCount) {
    await seedHouses()
  }

  if (!wizardCount) {
    await seedWizards()
  }
}
