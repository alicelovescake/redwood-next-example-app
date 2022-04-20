import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SpellCreateArgs>({
  spell: {
    one: {
      data: {
        name: 'String',
        incantation: 'String',
        effect: 'String',
        light: 'String',
        type: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        incantation: 'String',
        effect: 'String',
        light: 'String',
        type: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
