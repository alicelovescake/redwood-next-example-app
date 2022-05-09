import { client } from './client'
import { CreateWizardInput, UpdateWizardInput } from 'types/graphql'

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

const UPDATE = `
  mutation($id: String!, $input: UpdateWizardInput!) {
    updateWizard(id: $id, input: $input) {
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

  return data?.createWizard.id
}

export const update = async (id: string, input: UpdateWizardInput) => {
  const { data } = await client.mutation(UPDATE, { id, input }).toPromise()
  return data?.updateWizard.id
}
