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
export const get = async () => {
  const {
    data: { classrooms },
  } = await client.query(QUERY).toPromise()
  return classrooms
}
