import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const ingredients = () => {
  return db.ingredient.findMany()
}

export const ingredient = ({ id }: Prisma.IngredientWhereUniqueInput) => {
  return db.ingredient.findUnique({
    where: { id },
  })
}

export const updateIngredient = ({
  id,
  classroomId,
}: {
  id: string
  classroomId: string
}) => {
  return db.ingredient.update({
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

export const Ingredient = {
  classroom: (_obj, { root }: ResolverArgs<ReturnType<typeof ingredient>>) =>
    db.ingredient.findUnique({ where: { id: root.id } }).classroom(),
}
