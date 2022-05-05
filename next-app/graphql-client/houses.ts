import { client } from './client'

const QUERY = `
  query getHouses {
    houses {
      id
      name
      houseColours
      animal
      founder
      ghost
      element
      wizards {
        id
      }
    }
  }
`

export const get = async () => {
  const {
    data: { houses },
  } = await client.query(QUERY).toPromise()

  return houses
}
