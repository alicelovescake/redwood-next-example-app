import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WizardCreateArgs>({
  wizard: {
    one: { data: { firstName: 'String8841295', lastName: 'String' } },
    two: { data: { firstName: 'String7968508', lastName: 'String' } },
  },
})

export type StandardScenario = typeof standard
