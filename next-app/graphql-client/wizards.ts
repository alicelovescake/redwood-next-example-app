import { client } from './client'
import { CreateWizardInput } from 'types/graphql'

const QUERY = `
  query getWizards {
    wizards {
      firstName
      lastName
    }
  }
`

const CREATE = `
  mutation($input: CreateWizardInput!) {
    createWizard(input: $input){
      id
    }
  }
`

export const get = async () => {
  const {
    data: { wizards },
  } = await client.query(QUERY).toPromise()
  return wizards
}

export const create = async (input: CreateWizardInput) => {
  const { data } = await client.mutation(CREATE, { input }).toPromise()

  return data.createWizard.id
}
