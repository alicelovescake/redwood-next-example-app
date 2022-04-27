import { client } from './client'

const QUERY = `
  query getWizards {
    wizards {
      firstName
      lastName
    }
  }
`

export const get = async () => {
  const {
    data: { wizards },
  } = await client.query(QUERY).toPromise()
  return wizards
}
