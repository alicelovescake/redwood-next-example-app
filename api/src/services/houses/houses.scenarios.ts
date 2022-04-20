import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HouseCreateArgs>({
  house: {
    one: {
      data: {
        name: 'String',
        houseColours: 'String',
        animal: 'String',
        founder: 'String',
        ghost: 'String',
        element: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        houseColours: 'String',
        animal: 'String',
        founder: 'String',
        ghost: 'String',
        element: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
