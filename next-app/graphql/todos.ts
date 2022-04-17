import { client } from './client'

const TodoQuery = `
  query TodoQuery {
    todos{
      id
      status
      body
    }
  }
`
export const get = async () => {
  const {
    data: { todos },
  } = await client.query(TodoQuery).toPromise()
  return todos
}
