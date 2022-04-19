import type { FindClassrooms } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Classrooms from 'src/components/Classroom/Classrooms'

export const QUERY = gql`
  query FindClassrooms {
    classrooms {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No classrooms yet. '}
      <Link
        to={routes.newClassroom()}
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

export const Success = ({ classrooms }: CellSuccessProps<FindClassrooms>) => {
  return <Classrooms classrooms={classrooms} />
}
