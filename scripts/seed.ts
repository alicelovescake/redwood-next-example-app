import { db } from 'api/src/lib/db'
import fs from 'fs'

const seedModel = async (model: string) => {
  const modelData = fs.readFileSync(`./data/${model}s.json`, 'utf8')
  const data = JSON.parse(modelData)
  console.log(`Seeding ${data.length} ${model}s into the database ...`)
  try {
    const dbData = data.map((entry) => ({
      ...entry,
    }))

    dbData.map(async (data) => {
      console.log(model)
      const modelCreated = await db[model]?.create({ data })
      console.log(modelCreated)
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

export default async () => {
  const housesCount = await db.house.count()
  const wizardsCount = await db.wizard.count()
  const spellsCount = await db.spell.count()
  const ingredientsCount = await db.ingredient.count()

  if (!housesCount) {
    await seedModel('house')
  }

  if (!wizardsCount) {
    await seedModel('wizard')
  }

  if (!spellsCount) {
    await seedModel('spell')
  }

  if (!ingredientsCount) {
    await seedModel('ingredient')
  }
}
