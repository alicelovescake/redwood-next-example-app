import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WizardCreateArgs>({
  wizard: {
    one: { data: { firstName: 'String6210893', lastName: 'String' } },
    two: { data: { firstName: 'String6378840', lastName: 'String' } },
  },
})

export type StandardScenario = typeof standard
