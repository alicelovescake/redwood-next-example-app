import type { FindWizards } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Wizards from 'src/components/Wizard/Wizards'

export const QUERY = gql`
  query FindWizards {
    wizards {
      id
      firstName
      lastName
      houseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No wizards yet. '}
      <Link
        to={routes.newWizard()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wizards }: CellSuccessProps<FindWizards>) => {
  return <Wizards wizards={wizards} />
}
