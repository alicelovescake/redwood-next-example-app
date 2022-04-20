import type { EditClassroomById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ClassroomForm from 'src/components/Classroom/ClassroomForm'

export const QUERY = gql`
  query EditClassroomById($id: String!) {
    classroom: classroom(id: $id) {
      id
      name
      ingredients {
        id
        name
      }
      spells {
        id
        name
      }
      wizards {
        id
        firstName
      }
    }
    ingredients: ingredients {
      id
      name
    }
    spells: spells {
      id
      name
    }
    wizards: wizards {
      id
      firstName
    }
  }
`
const UPDATE_CLASSROOM_MUTATION = gql`
  mutation UpdateClassroomMutation(
    $id: String!
    $input: UpdateClassroomInput!
  ) {
    updateClassroom(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = (data: CellSuccessProps<EditClassroomById>) => {
  console.log({ data })
  const [updateClassroom, { loading, error }] = useMutation(
    UPDATE_CLASSROOM_MUTATION,
    {
      onCompleted: () => {
        toast.success('Class updated')
        navigate(routes.classrooms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateClassroom({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Class</h2>
      </header>
      <div className="rw-segment-main">
        <ClassroomForm
          data={data}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
