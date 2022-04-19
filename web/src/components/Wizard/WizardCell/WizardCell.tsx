import type { FindWizardById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Wizard from 'src/components/Wizard/Wizard'

export const QUERY = gql`
  query FindWizardById($id: String!) {
    wizard: wizard(id: $id) {
      id
      firstName
      lastName
      houseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Wizard not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wizard }: CellSuccessProps<FindWizardById>) => {
  return <Wizard wizard={wizard} />
}
