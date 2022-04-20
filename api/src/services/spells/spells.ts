import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const spells = () => {
  return db.spell.findMany()
}

export const spell = ({ id }: Prisma.SpellWhereUniqueInput) => {
  return db.spell.findUnique({
    where: { id },
  })
}

interface CreateSpellArgs {
  input: Prisma.SpellCreateInput
}

export const createSpell = ({ input }: CreateSpellArgs) => {
  return db.spell.create({
    data: input,
  })
}

export const updateSpell = ({
  id,
  classroomId,
}: {
  id: string
  classroomId: string
}) => {
  return db.spell.update({
    data: {
      classroom: {
        connect: {
          id: classroomId,
        },
      },
    },
    where: { id },
  })
}

export const deleteSpell = ({ id }: Prisma.SpellWhereUniqueInput) => {
  return db.spell.delete({
    where: { id },
  })
}

export const Spell = {
  classroom: (_obj, { root }: ResolverArgs<ReturnType<typeof spell>>) =>
    db.spell.findUnique({ where: { id: root.id } }).classroom(),
}
