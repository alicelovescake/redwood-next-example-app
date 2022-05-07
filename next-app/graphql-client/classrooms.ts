import { UpdateClassroomInput } from '../../web/types/graphql'
import { client } from './client'

const QUERY = `
  query getClassrooms {
    classrooms {
      id
      name
      ingredients {
        name
      }
      spells {
        name
      }
      wizards {
        firstName
      }
    }
  }
`

const UPDATE = `
  mutation($id: String!, $input: UpdateClassroomInput!) {
    updateClassroom(id: $id, input: $input) {
      id
    }
  }
`
export const get = async () => {
  const {
    data: { classrooms },
  } = await client.query(QUERY).toPromise()
  return classrooms
}

export const update = async (id: string, input: UpdateClassroomInput) => {
  const { data } = await client.mutation(UPDATE, { id, input }).toPromise()
  return data.updateClassroom.id
}
