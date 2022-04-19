import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const wizards = () => {
  return db.wizard.findMany()
}

export const wizard = ({ id }: Prisma.WizardWhereUniqueInput) => {
  return db.wizard.findUnique({
    where: { id },
  })
}

interface CreateWizardArgs {
  input: Prisma.WizardCreateInput
}

export const createWizard = ({ input }: CreateWizardArgs) => {
  return db.wizard.create({
    data: input,
  })
}

interface UpdateWizardArgs extends Prisma.WizardWhereUniqueInput {
  input: Prisma.WizardUpdateInput
}

export const updateWizard = ({ id, input }: UpdateWizardArgs) => {
  return db.wizard.update({
    data: input,
    where: { id },
  })
}

export const deleteWizard = ({ id }: Prisma.WizardWhereUniqueInput) => {
  return db.wizard.delete({
    where: { id },
  })
}

export const Wizard = {
  classes: (_obj, { root }: ResolverArgs<ReturnType<typeof wizard>>) =>
    db.wizard.findUnique({ where: { id: root.id } }).classes(),
  house: (_obj, { root }: ResolverArgs<ReturnType<typeof wizard>>) =>
    db.wizard.findUnique({ where: { id: root.id } }).house(),
}
