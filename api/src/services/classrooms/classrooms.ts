import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const classrooms = () => {
  return db.classroom.findMany()
}

export const classroom = ({ id }: Prisma.ClassroomWhereUniqueInput) => {
  return db.classroom.findUnique({
    where: { id },
    include: {
      wizards: true,
      ingredients: true,
      spells: true,
    },
  })
}

interface CreateClassroomArgs {
  input: Prisma.ClassroomCreateInput
}

export const createClassroom = ({ input }: CreateClassroomArgs) => {
  return db.classroom.create({
    data: input,
  })
}

type UpdateInput = {
  name?: string
  wizardIds?: string[]
  spellIds?: string[]
  ingredientIds?: string[]
}

interface UpdateClassroomArgs extends Prisma.ClassroomWhereUniqueInput {
  input: UpdateInput
}

export const updateClassroom = ({ id, input }: UpdateClassroomArgs) => {
  console.log({ input })
  const { name, wizardIds, spellIds, ingredientIds } = input
  const data = {}
  if (name) {
    data['name'] = name
  }
  if (wizardIds) {
    data['wizards'] = {
      connect: wizardIds.map((id) => ({
        id,
      })),
    }
  }

  if (spellIds) {
    data['spells'] = {
      connect: spellIds.map((id) => ({
        id,
      })),
    }
  }

  if (ingredientIds) {
    data['ingredients'] = {
      connect: ingredientIds.map((id) => ({
        id,
      })),
    }
  }

  console.log('CLASSROOM UPDATE', data)
  return db.classroom.update({
    data,
    where: { id },
  })
}

export const deleteClassroom = ({ id }: Prisma.ClassroomWhereUniqueInput) => {
  return db.classroom.delete({
    where: { id },
  })
}

export const Classroom = {
  wizards: (_obj, { root }: ResolverArgs<ReturnType<typeof classroom>>) =>
    db.classroom.findUnique({ where: { id: root.id } }).wizards(),
  spells: (_obj, { root }: ResolverArgs<ReturnType<typeof classroom>>) =>
    db.classroom.findUnique({ where: { id: root.id } }).spells(),
  ingredients: (_obj, { root }: ResolverArgs<ReturnType<typeof classroom>>) =>
    db.classroom.findUnique({ where: { id: root.id } }).ingredients(),
}
