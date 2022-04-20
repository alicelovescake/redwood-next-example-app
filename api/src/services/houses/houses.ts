import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const houses = () => {
  return db.house.findMany()
}

export const house = ({ id }: Prisma.HouseWhereUniqueInput) => {
  return db.house.findUnique({
    where: { id },
  })
}

export const House = {
  wizards: (_obj, { root }: ResolverArgs<ReturnType<typeof house>>) =>
    db.house.findUnique({ where: { id: root.id } }).wizards(),
}
